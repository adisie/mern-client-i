import {useDispatch} from 'react-redux'

// actions from slices
// users
import {
  logout,
  resetErrors,
} from '../../features/users/usersSlice'
// easy nav
import {
  setMainDir,
} from '../../features/easy-nav/easyNavSlice'

// user default profile picture
import userDefaultProfile from '../../assets/images/defaults/male-profile-3.jpg'

const AuthorizedHeader = ({user}) => {
  // hooks
  const dispatch = useDispatch()

  // logout handler
  const logoutHandler = () => {
    dispatch(logout())
    dispatch(resetErrors())
  }

  return (
    <div>
      <div className='flex items-center text-xs text-emerald-700 font-serif'>
        <div className='hidden sm:flex'>
          <span>{user ? user.username : ''}</span>
        </div>
        <div>
          <img src={!true? "" : userDefaultProfile} alt="user default profile" className='cursor-pointer w-[28px] h-[28px] rounded-full ml-1' 
            onClick={()=>{
              dispatch(setMainDir('PROFILE'))
            }}
          />
        </div>
        <div className='hidden sm:flex'>
          <button className='px-[1rem] cursor-pointer py-[.13rem] border border-emerald-700 border-opacity-[.75] rounded-sm transition-all ease-in-out duration-500 hover:bg-emerald-700 hover:text-gray-200 hover:border-opacity-0 ml-3' 
            onClick={()=>{
              logoutHandler()
            }}
          >logout</button>
        </div>
      </div>
    </div>
  )
}

export default AuthorizedHeader