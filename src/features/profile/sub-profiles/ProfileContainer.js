import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

// configs
import {MAIN_URL} from '../../../config'

// actions from slice
import {
    selectMyProfiles,
    addNewProfile,
    deleteProfile,
} from '../../users/usersSlice'
// icons
// trash icon
import { IoMdTrash } from "react-icons/io"
// camera
import { FaCamera } from "react-icons/fa"
// left arrow
import { IoMdArrowDropleft } from "react-icons/io"
// right arrow
import { IoMdArrowDropright } from "react-icons/io"
// image
import { FaCircleUser } from "react-icons/fa6"

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
const ProfileContainer = () => {
    // states from slices
    const myProfiles = useSelector(selectMyProfiles)

    const [currentIndex,setCurrentIndex] = useState(0)

    // hooks
    const dispatch = useDispatch()

    // image slider
    const slideImage = index => {
        if(index > 0){
            if(currentIndex < myProfiles.length-1){
                setCurrentIndex(currentIndex + index)
            }else{
                setCurrentIndex(0)
            }
        }else {
            if(currentIndex > 0){
                setCurrentIndex(currentIndex + index)
            }else {
                setCurrentIndex(myProfiles.length-1)
            }
        }
    }

    // add new profile handler
    const addNewProfileHandler = e => {
        let formData = new FormData()
        formData.append('profile',e.target.files[0])
        dispatch(addNewProfile(formData))
    }

    // delete profile handler
    const deleteProfileHandler = _id => {
        dispatch(deleteProfile(_id))
    }

  return (
    <div className="w-full bg-emerald-700 bg-opacity-[.13] rounded-t-md flex items-center justify-center p-1">
        <div className='flex flex-col items-center relative'>
            {
                myProfiles.length > 0 
                ?
                <button className="absolute top-2 right-2 text-emerald-700 text-2xl" 
                    onClick={()=>{
                        deleteProfileHandler(myProfiles[currentIndex]._id)
                    }}
                >
                    <IoMdTrash />
                </button>
                :
                <></>
            }
        <div className='p-1'>
            {
                myProfiles.length > 0 
                ?
                <img src={`${MAIN_URL}/${myProfiles[currentIndex].profilePath}`} alt="" className='w-[120px] h-[120px] rounded-full object-cover'/>
                :
                <>
                <input type="file" name="profile" accept="image/*" id="select-profile" hidden 
                    onChange={addNewProfileHandler}
                />
                <label htmlFor="select-profile" className="text-[120px] text-gray-400 cursor-pointer">
                    <FaCircleUser />
                </label>
                </>
            }
        </div>
        {/* buttons */}
        <div className="text-emerald-700 text-xl flex items-center justify-center">
            {
                myProfiles.length > 1 
                ?
                <button 
                    onClick={()=>{
                        slideImage(-1)
                    }}
                >
                <IoMdArrowDropleft />
                </button>
                :
                <></>
            }
            <input type="file" name='profile' accept="image/*" hidden id="profile" onChange={addNewProfileHandler}/>
            <label htmlFor="profile" className="cursor-pointer">
            <FaCamera className={myProfiles.length > 0 ? "text-emerald-700" : "text-gray-400"}/>
            </label>
            {
                myProfiles.length > 1 
                ?
                <button onClick={()=>{
                    slideImage(1)
                }}>
                <IoMdArrowDropright />
                </button>
                :
                <></>
            }
        </div>
        {/* end */}
        </div>
    </div>
  )
}

export default ProfileContainer