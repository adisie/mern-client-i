import { useState} from "react"
import { useDispatch,useSelector } from "react-redux"

// actions from slices
// users slcies
import {
  setIsLogin,
  selectIsLoading,
  selectErrors,
  resetErrors,
  login,
} from '../usersSlice'

// icons
// username
import { RiUser4Fill } from "react-icons/ri"
// password
import { BiSolidShow } from "react-icons/bi"
import { BiSolidHide } from "react-icons/bi"

// spinner
import Spinner from "./Spinner"


//////////////////////////////////////////
//////////////////////////////////////////
const LoginForm = () => {
  // local states
  const [isHidden,setIsHidden] = useState(true)

  // states from slices
  // users slices
  const isLoading = useSelector(selectIsLoading)
  const errors = useSelector(selectErrors)
  

  // form field states
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  // hooks
  const dispatch = useDispatch()


  // validators
  // username validators
  const usernameValidator = () => {
    let usernameError = document.getElementById('login-username-error')
    if(!username.trim()){
      usernameError.textContent = 'username required'
    }else if(username.includes(' ') || username.includes('/') || username.includes('\\') || username.includes('|') || username.includes('?') || username.includes('*') || username.includes('\"') || username.includes(':') || username.includes('\'')){
      usernameError.textContent = 'invalid character'
    }else{
      usernameError.textContent = ''
    }
  }


  // password validator
  const passwordValidator = () => {
    let passwordError = document.getElementById('login-password-error')
    if(!password){
      passwordError.textContent = 'password required'
    }else if(password.length < 3){
      passwordError.textContent = 'too short password'
    }else {
      passwordError.textContent = ''
    }
  }



  // submit handler
  const submitHandler = () => {
    let usernameError = document.getElementById('login-username-error')
    let passwordError = document.getElementById('login-password-error')

    if(!username.trim() && !password){
      usernameError.textContent = 'username required'
      passwordError.textContent = 'password required'
    }else if(username.trim() && !password){
      usernameError.textContent = ''
      passwordError.textContent = 'password required'
    }else if(username.trim() && password){
      if(usernameError.textContent || passwordError.textContent){
        console.log('YOU CAN\'T SUBMIT')
      }else {
        dispatch(login({username,password}))
      }
    }
  }

  // spinner
  if(isLoading){
    return <Spinner />
  }
  return (
    <div>
      <form className="bg-black bg-opacity-[.15] py-2 px-9 rounded-sm text-xs text-emerald-700 font-serif">
        <div className="flex justify-center my-2 text-lg font-bold">
          <span>Login</span>
        </div>
        {/* username */}
        <div className="mb-[.5rem]">
          <div className="flex items-center bg-white rounded-sm px-3 py-[.2rem]">
            <input type="text" name="username" placeholder="username" className="border-none bg-transparent focus:outline-none flex-grow" 
              value={username} 
              onChange={e=>setUsername(e.target.value)} 
              onKeyUp={usernameValidator}
            />
            <RiUser4Fill className="text-xl opacity-[.5]"/>
          </div>
          <div className="text-center text-[.7rem] italic text-red-600" id="login-username-error">{errors && errors.username ? errors.username : ''}</div>
        </div>

        {/* password */}
        <div className="mb-[.5rem]">
          <div className="flex items-center bg-white rounded-sm px-3 py-[.2rem]">
            <input type={isHidden ? "password" : "text"} name="password" placeholder="password" className="border-none bg-transparent focus:outline-none flex-grow" 
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
              onKeyUp={passwordValidator} 
            />
            {
              isHidden
              ?
              <BiSolidHide className="text-xl opacity-[.5] cursor-pointer" 
                onClick={()=>setIsHidden(false)}
              />
              :
              <BiSolidShow className="text-xl opacity-[.5] cursor-pointer" 
                onClick={()=>setIsHidden(true)}
              />
            }
          </div>
          <div className="text-center text-[.7rem] italic text-red-600" id="login-password-error">{errors && errors.password ? errors.password : ''}</div>
        </div>

        {/* /////////////////////// */}
        <div className="flex items-center justify-center">
          <span className="flex-grow text-center text-gray-300 text-sm bg-emerald-700 rounded-sm py-[.175rem] cursor-pointer transition-all ease-in-out duration-300 hover:bg-opacity-[.75]" 
            onClick={()=>{
              submitHandler()
            }}
          >Login</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="my-2 text-gray-500 cursor-pointer hover:underline hover:text-gray-600" 
            onClick={()=>{
              dispatch(setIsLogin(false))
              dispatch(resetErrors())
            }}
          >
            <span>no account?</span>
          </div>
            <div className="my-2 text-gray-500 cursor-pointer hover:underline hover:text-gray-600">
            <span>forget password</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm