import { useState } from "react"
import { useDispatch } from "react-redux"

// actions from slices
// users slcies
import {
  setIsLogin,
} from '../usersSlice'

// icons
// username
import { RiUser4Fill } from "react-icons/ri"
// email
import { MdEmail } from "react-icons/md"
// password
import { BiSolidShow } from "react-icons/bi"
import { BiSolidHide } from "react-icons/bi"

const SignupForm = () => {
  // local states
  const [isHidden,setIsHidden] = useState(true)
  const [isHidden2,setIsHidden2] = useState(true)

  // form field states
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password2,setPassword2] = useState('')

  // hooks
  const dispatch = useDispatch()

  // validators
  // username validators
  const usernameValidator = () => {
    let usernameError = document.getElementById('signup-username-error')
    if(!username.trim()){
      usernameError.textContent = 'username required'
    }else if(username.includes(' ') || username.includes('/') || username.includes('\\') || username.includes('|') || username.includes('?') || username.includes('*') || username.includes('\"') || username.includes(':') || username.includes('\'')){
      usernameError.textContent = 'invalid character'
    }else{
      usernameError.textContent = ''
    }
  }

  // submit handler
  const submitHandler = () => {
    console.log({username,email,password})
  }

  return (
    <div>
      <form className="bg-black bg-opacity-[.15] py-2 px-9 rounded-sm text-xs text-emerald-700 font-serif">
        <div className="flex justify-center my-2 text-lg font-bold">
          <span>Signup</span>
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
          <div className="text-center text-[.7rem] italic text-red-600" id="signup-username-error"></div>
        </div>

        {/* email */}
        <div className="mb-[.5rem]">
          <div className="flex items-center bg-white rounded-sm px-3 py-[.2rem]">
            <input type="text" name="email" placeholder="email" className="border-none bg-transparent focus:outline-none flex-grow" 
              value={email} 
              onChange={e=>setEmail(e.target.value)} 
            />
            <MdEmail className="text-xl opacity-[.5]"/>
          </div>
          <div className="text-center text-[.7rem] italic text-red-600"></div>
        </div>

        {/* password */}
        <div className="mb-[.5rem]">
          <div className="flex items-center bg-white rounded-sm px-3 py-[.2rem]">
            <input type={isHidden ? "password" : "text"} name="password" placeholder="password" className="border-none bg-transparent focus:outline-none flex-grow" 
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
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
          <div className="text-center text-[.7rem] italic text-red-600"></div>
        </div>

        {/* confrim password */}
        <div className="mb-[.5rem]">
          <div className="flex items-center bg-white rounded-sm px-3 py-[.2rem]">
            <input type={isHidden2 ? "password" : "text"} name="password2" placeholder="confirm password" className="border-none bg-transparent focus:outline-none flex-grow" 
              value={password2} 
              onChange={e=>setPassword2(e.target.value)}
            />
            {
              isHidden2
              ?
              <BiSolidHide className="text-xl opacity-[.5] cursor-pointer" 
                onClick={()=>setIsHidden2(false)}
              />
              :
              <BiSolidShow className="text-xl opacity-[.5] cursor-pointer" 
                onClick={()=>setIsHidden2(true)}
              />
            }
          </div>
          <div className="text-center text-[.7rem] italic text-red-600"></div>
        </div>

        {/* /////////////////////// */}
        <div className="flex items-center justify-center">
          <span className="flex-grow text-center text-gray-300 text-sm bg-emerald-700 rounded-sm py-[.175rem] cursor-pointer transition-all ease-in-out duration-300 hover:bg-opacity-[.75]" 
            onClick={()=>{
              submitHandler()
            }}
          >Signup</span>
        </div>
        <div className="my-2 text-gray-500 cursor-pointer hover:underline hover:text-gray-600" 
          onClick={()=>{
            dispatch(setIsLogin(true))
          }}
        >
          <span>have an account?</span>
        </div>
      </form>
    </div>
  )
}

export default SignupForm