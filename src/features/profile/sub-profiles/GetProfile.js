import { useLayoutEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import {MAIN_URL} from '../../../config'

// actions from slices
// users
import {
  selectAllUsersProfiles,
  getUsersProfiles,
} from '../../users/usersSlice'

// icons
// user profile icon
import { LuUserCircle } from "react-icons/lu"

const GetProfile = ({userId}) => {
  // states from slices
  const allUsersProfiles = useSelector(selectAllUsersProfiles)
  let profiles = allUsersProfiles.find(up=>up._id === userId)?.profiles 

  // hooks
  const dispatch = useDispatch()

  // effects
  useLayoutEffect(()=>{
    // dispatch(getUsersProfiles())
  })
  
  return (
    <>
    {
        profiles?.length > 0 
        ?
        <img src={`${MAIN_URL}/${profiles[profiles.length-1].profilePath}`} alt="" className='w-[26px] h-[26px] rounded-full mr-1'/>
        :
        <LuUserCircle className="text-2xl opacity-[.9] mr-1"/>
    }
    </>
  )
}

export default GetProfile