import {useDispatch,useSelector} from 'react-redux'

// actions from slices
// group slice
import {
    setGroupDir,
    selectGroupDir,
} from '../groupsSlice'

// search icons
import { CiSearch } from "react-icons/ci"
// plus
import { CiSquarePlus } from "react-icons/ci"
// left arrow
import { IoExitOutline } from "react-icons/io5"
// cancel
import { MdOutlineCancel } from "react-icons/md"

const GroupsSideBarHeader = () => {

    // state from slices
    const groupDir = useSelector(selectGroupDir)

    // hooks
    const dispatch = useDispatch()

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
            dispatch(setGroupDir('ALL'))
        }else if(flag === 'JOIN'){
            allGroupLink.classList.remove('font-bold')
            allGroupLink.classList.add('font-normal')
            allGroupLink.classList.remove('underline')
            joinGroupLink.classList.remove('font-normal')
            joinGroupLink.classList.add('font-bold')
            joinGroupLink.classList.add('underline')
            dispatch(setGroupDir('JOIN'))
        }
    }

    // hide and show search bar
    const hideShowSearchBar = () => {
        let searchBarContainer = document.querySelector('#group-header-search-bar-container')
        if(searchBarContainer.classList.contains('hidden')){
            searchBarContainer.classList.remove('hidden')
            searchBarContainer.classList.add('flex')
        }else {
            searchBarContainer.classList.add('hidden')
            searchBarContainer.classList.remove('flex')
        }
    }

    // exit group side bar for small screen
    const exitGroupsSideBar = () => {
        let groupsSideBar = document.getElementById('groups-left-side-bar-container')
        if(groupsSideBar.classList.contains('absolute')){
            groupsSideBar.classList.add('left-[-100vw]')
        }
    }

  return (
    <div className="flex items-center justify-between text-xs text-emerald-700 font-serif border-b-2 border-emerald-700 border-opacity-[.13] py-1 mt-1 relative">
        {/* search bar container */}
        {
            groupDir === 'ALL'
            ?
            <div className="h-full w-full hidden  bg-gray-100 sm:bg-white absolute items-center px-1" id="group-header-search-bar-container">
                <div className="flex-grow">
                    <div className="flex items-center bg-black bg-opacity-[.13] rounded-full px-2 py-[.13rem]">
                        <CiSearch className="cursor-pointer text-xl"/>
                        <div className="flex-grow flex items-center">
                            <input type="text" placeholder="find groups" className="w-full bg-transparent border-none focus:outline-none"/>
                        </div>
                        <div>
                            <MdOutlineCancel className="cursor-pointer" 
                                onClick={()=>{
                                    hideShowSearchBar()
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            :
            groupDir === 'JOIN'
            ?
            <div className="h-full w-full hidden  bg-gray-100 sm:bg-white absolute items-center px-1" id="group-header-search-bar-container">
                <div className="flex-grow">
                    <div className="flex items-center bg-black bg-opacity-[.13] rounded-full px-2 py-[.13rem]">
                        <CiSearch className="cursor-pointer text-xl"/>
                        <div className="flex-grow flex items-center">
                            <input type="text" placeholder="find groups" className="w-full bg-transparent border-none focus:outline-none"/>
                        </div>
                        <div>
                            <MdOutlineCancel className="cursor-pointer" 
                                onClick={()=>{
                                    hideShowSearchBar()
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            :
            <></>
        }
        {/* nav container */}
        <div className="flex items-center">
            <div>
                <CiSearch className="cursor-pointer text-xl mr-1" 
                    onClick={()=>{
                        hideShowSearchBar()
                    }}
                />
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
        <div className="flex items-center text-emerald-700 text-2xl" >
            <div>
                <CiSquarePlus className="cursor-pointer"/>
            </div>
            <div className="sm:hidden">
                <IoExitOutline className="cursor-pointer text-xl" 
                    onClick={()=>{
                        exitGroupsSideBar()
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default GroupsSideBarHeader