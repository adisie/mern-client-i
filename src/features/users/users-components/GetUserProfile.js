
import {useDispatch,useSelector} from 'react-redux'
import {MAIN_URL} from '../../../config'

// icons
// user profile icon
import { LuUserCircle } from "react-icons/lu"

// actions from slices
// easy nav slice
import {
    setMainDir,
} from '../../easy-nav/easyNavSlice'
// users
import {
  selectMyProfiles,
} from '../usersSlice'

const GetUserProfile = () => {

    // states from slices
    const myProfiles = useSelector(selectMyProfiles)

    // hooks
    const dispatch = useDispatch()

  return (
    <div>
      {
        myProfiles.length > 0 
        ?
        <img src={`${MAIN_URL}/${myProfiles[0].profilePath}`} alt="user default profile" className='cursor-pointer w-[28px] h-[28px] rounded-full ml-1' 
        onClick={()=>{
            dispatch(setMainDir('PROFILE'))
        }} />
        :
        <LuUserCircle className='ml-1 cursor-pointer text-3xl' onClick={()=>{
          dispatch(setMainDir('PROFILE'))
        }}/>
      }
    </div>
  )
}

export default GetUserProfile