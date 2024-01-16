
// icons
// user profile icon
import { LuUserCircle } from "react-icons/lu"

// author profile
import defaultUserProfile from '../../../assets/images/defaults/male-profile-3.jpg'

const GetProfile = () => {
  return (
    <>
    {
        !true 
        ?
        <img src={defaultUserProfile} alt="" className='w-[26px] h-[26px] rounded-full mr-1'/>
        :
        <LuUserCircle className="text-2xl opacity-[.9] mr-1"/>
    }
    </>
  )
}

export default GetProfile