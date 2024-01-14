// icons
// trash icon
import { IoMdTrash } from "react-icons/io"
// camera
import { FaCamera } from "react-icons/fa"
// left arrow
import { IoMdArrowDropleft } from "react-icons/io"
// right arrow
import { IoMdArrowDropright } from "react-icons/io"

// header icons
import { AiFillThunderbolt } from "react-icons/ai"
import { TiGlobe } from "react-icons/ti"
import { MdOutlineSupervisorAccount } from "react-icons/md"
import { GrChannel } from "react-icons/gr"
import { IoChatbubblesSharp } from "react-icons/io5"

// profile
import profileImage from '../../assets/images/defaults/menelik4.jpg'

const Profile = () => {
  return (
    <div className="flex-grow flex">
      <div className="m-1 flex-grow flex flex-col">
        {/* profile container */}
        <div className="w-full bg-emerald-700 bg-opacity-[.13] rounded-t-md flex items-center justify-center p-1">
          <div className='flex flex-col items-center relative'>
            <button className="absolute top-2 right-2 text-emerald-700 text-2xl">
              <IoMdTrash />
            </button>
            <div className='p-1'>
              <img src={profileImage} alt="" className='w-[120px] h-[120px] rounded-full object-cover'/>
            </div>
            {/* buttons */}
            <div className="text-emerald-700 text-xl flex items-center justify-center">
              <button>
                <IoMdArrowDropleft />
              </button>
              <input type="file" accept="image/*" hidden id="profile" />
              <label htmlFor="profile" className="cursor-pointer">
                <FaCamera />
              </label>
              <button>
                <IoMdArrowDropright />
              </button>
            </div>
            {/* end */}
          </div>
        </div>

        {/* header */}
        <div className="w-full border-b-2 border-emerald-700 border-opacity-[.13]">
          <div className="mt-2">
            <ul className="flex items-center text-emerald-700 text-xs font-serif py-1">
              <li className="flex items-center cursor-pointer mr-2">
                <TiGlobe className="text-xl"/>
                <span>Posts</span>
              </li>
              <li className="flex items-center cursor-pointer mr-2">
                <MdOutlineSupervisorAccount className="text-xl"/>
                <span>Groups</span>
              </li>
              <li className="flex items-center cursor-pointer mr-2">
                <GrChannel className="text-xl"/>
                <span>Channels</span>
              </li>
              <li className="flex items-center cursor-pointer mr-2">
                <IoChatbubblesSharp className="text-xl"/>
                <span>Chats</span>
              </li>
              
            </ul>
          </div>
        </div>
        {/* contents */}
        <div className="bg-opacity-[.1] flex-grow">
          content
        </div>
      </div>
    </div>
  )
}

export default Profile