
// home icon
import { IoMdHome } from "react-icons/io"
// groups icon
import { MdOutlineSupervisorAccount } from "react-icons/md"
// channels
import { GrChannel } from "react-icons/gr"
// chats
import { IoChatbubblesSharp } from "react-icons/io5"
// left arrow
import { RiArrowLeftFill } from "react-icons/ri"


const HomeMenuSideBar = () => {

  // hide home main side bar
  const hideHomeMainSidBar = () => {
    let homeMainSideBar = document.getElementById('home-main-side-bar')
    if(homeMainSideBar.classList.contains('absolute')){
      homeMainSideBar.classList.add('left-[-100vw]')
    }
  }
  return (
    <div className='w-[25%] h-full absolute left-[-100vw] z-50 bg-white sm:relative sm:left-0' id="home-main-side-bar">
      <div className="text-emerald-700 text-xs font-serif h-full pt-7 pr-1 sm:pt-3 relative">
      <div className="text-2xl absolute top-[.1rem] right-[.1rem] cursor-pointer sm:hidden" 
        onClick={hideHomeMainSidBar}
      >
        <RiArrowLeftFill />
      </div>
        <ul>
          <li className="mb-3 flex items-center cursor-pointer border-b border-emerald-700 border-opacity-[.1] transition-all ease-in-out duration-500 hover:ml-1">
            <IoMdHome className="text-xl mb-1 mr-1"/>
            <span>Home</span>
          </li>
          <li className="mb-3 flex items-center cursor-pointer border-b border-emerald-700 border-opacity-[.1] transition-all ease-in-out duration-500 hover:ml-1">
            <MdOutlineSupervisorAccount className="text-xl mb-1 mr-1"/>
            <span>Groups</span>
          </li>
          <li className="mb-3 flex items-center cursor-pointer border-b border-emerald-700 border-opacity-[.1] transition-all ease-in-out duration-500 hover:ml-1">
            <GrChannel className="text-xl mb-1 mr-1"/>
            <span>Channels</span>
          </li>
          {
            !true
            ?
          <li className="mb-3 flex items-center cursor-pointer border-b border-emerald-700 border-opacity-[.1] transition-all ease-in-out duration-500 hover:ml-1">
            <IoChatbubblesSharp className="text-xl mb-1 mr-1"/>
            <span>Chats</span>
          </li>
            :
            <></>
          }
        </ul>
        {
          !true
          ?
          <div className="mt-5 flex items-center">
            <button className="w-[65%] border border-emerald-700 border-opacity-[.5] py-[.13rem] rounded-sm">Logout</button>
          </div>
          :
          <div className="mt-5 flex items-center">
            <button className="w-[65%] border border-emerald-700 border-opacity-[.5] py-[.13rem] rounded-sm">Login</button>
          </div>
        }
      </div>
    </div>
  )
}

export default HomeMenuSideBar