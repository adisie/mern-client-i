import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// users slice
import {
  selectIsLogin,
  selectUser,
} from './usersSlice'
// easy nav
import {
  setMainDir,
} from '../easy-nav/easyNavSlice'
// profiles
import {
  getMyProfiles,
} from '../profile/profilesSlice'

// login and signup form components
import LoginForm from "./users-components/LoginForm"
import SignupForm from "./users-components/SignupForm"

const LoginSignup = () => {
  // states from slices
  // users
  const isLogin = useSelector(selectIsLogin)
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch()

  // effects
  useEffect(()=>{
    if(user){
      dispatch(setMainDir('HOME'))
    }
  })
  return (
    <div className='flex-grow flex justify-center pt-5'>
      {
        isLogin 
        ?
        <LoginForm />
        :
        <SignupForm />
      }
    </div>
  )
}

export default LoginSignup