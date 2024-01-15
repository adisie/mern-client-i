import { useEffect } from 'react'

import {useDispatch} from 'react-redux'

// actions from slices
// users
import {
  logout,
  resetErrors,
  getMyProfiles,
} from '../../features/users/usersSlice'
// easy nav
import {
  setMainDir,
} from '../../features/easy-nav/easyNavSlice'

// user profile render
import GetUserProfile from '../../features/users/users-components/GetUserProfile'

const AuthorizedHeader = ({user}) => {
  // hooks
  const dispatch = useDispatch()

  // effects
  useEffect(()=>{
    dispatch(getMyProfiles())
  })

  // logout handler
  const logoutHandler = () => {
    dispatch(logout())
    dispatch(resetErrors())
    dispatch(setMainDir('HOME'))
  }

  return (
    <div>
      <div className='flex items-center text-xs text-emerald-700 font-serif'>
        <div className='hidden sm:flex'>
          <span>{user ? user.username : ''}</span>
        </div>
        <GetUserProfile />
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