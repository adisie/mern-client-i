import {useDispatch} from 'react-redux'

// user default profile picture
import userDefaultProfile from '../../../assets/images/defaults/male-profile-3.jpg'

// actions from slices
// easy nav slice
import {
    setMainDir,
} from '../../easy-nav/easyNavSlice'

const GetUserProfile = () => {

    // hooks
    const dispatch = useDispatch()

  return (
    <div>
        <img src={!true? "" : userDefaultProfile} alt="user default profile" className='cursor-pointer w-[28px] h-[28px] rounded-full ml-1' 
        onClick={()=>{
            dispatch(setMainDir('PROFILE'))
        }}
        />
    </div>
  )
}

export default GetUserProfile