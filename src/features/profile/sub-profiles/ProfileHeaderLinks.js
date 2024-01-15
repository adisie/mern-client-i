
// header icons
import { TiGlobe } from "react-icons/ti"
import { MdOutlineSupervisorAccount } from "react-icons/md"
import { GrChannel } from "react-icons/gr"
import { IoChatbubblesSharp } from "react-icons/io5"

const ProfileHeaderLinks = () => {
  return (
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
  )
}

export default ProfileHeaderLinks