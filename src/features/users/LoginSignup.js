import {useSelector} from 'react-redux'

// actions from slices
// users slice
import {
  selectIsLogin,
} from './usersSlice'

// login and signup form components
import LoginForm from "./users-components/LoginForm"
import SignupForm from "./users-components/SignupForm"

const LoginSignup = () => {
  // states from slices
  const isLogin = useSelector(selectIsLogin)
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