// search icons
import { CiSearch } from "react-icons/ci"

const GroupsSideBarHeader = () => {


    // decore active link
    const decoreActiveLink = (flag) => {
        const allGroupLink = document.getElementById('all-group-link')
        const joinGroupLink = document.getElementById('join-group-link')
        if(flag === 'ALL'){
            allGroupLink.classList.add('font-bold')
            allGroupLink.classList.remove('font-normal')
            allGroupLink.classList.add('underline')
            joinGroupLink.classList.add('font-normal')
            joinGroupLink.classList.remove('font-bold')
            joinGroupLink.classList.remove('underline')
        }else if(flag === 'JOIN'){
            allGroupLink.classList.remove('font-bold')
            allGroupLink.classList.add('font-normal')
            allGroupLink.classList.remove('underline')
            joinGroupLink.classList.remove('font-normal')
            joinGroupLink.classList.add('font-bold')
            joinGroupLink.classList.add('underline')
        }
    }

  return (
    <div className="flex items-center justify-between text-xs text-emerald-700 font-serif border-b border-emerald-700 border-opacity-[.13] py-1 mt-1">
        <div className="relative bg-white">
            <div className="flex items-center relative bg-black bg-opacity-[.13] rounded-full z-50 mr-[.1rem] py-[.1rem] px-[.1rem]">
                <CiSearch className="text-xl cursor-pointer"/>
                <div className="relative">
                    <input type="text" placeholder="find group" className="border-none bg-transparent focus:outline-none text=xs"/>
                </div>
            </div>
        </div>
        <ul className="flex items-center justify-end text-sm">
            <li className="mr-[.25rem] cursor-pointer hover:underline" 
                onClick={()=>{
                    decoreActiveLink('ALL')
                }}
            >
                <span id="all-group-link" className="font-bold underline">All</span>
            </li>
            <li className="mr-[.25rem] cursor-pointer hover:underline"
                onClick={()=>{
                    decoreActiveLink('JOIN')
                }}
            >
                <span id="join-group-link" className="font-normal">Join</span>
            </li>
        </ul>
    </div>
  )
}

export default GroupsSideBarHeader