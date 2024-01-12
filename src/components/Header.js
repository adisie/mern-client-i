import { useDispatch } from "react-redux"

// actions from slices
// easy nav
import {
    setMainDir,
} from '../features/easy-nav/easyNavSlice'

// menu icon
import { AiOutlineMenu } from "react-icons/ai"
// home icon
import { IoMdHome } from "react-icons/io"
// search icons
import { CiSearch } from "react-icons/ci"

// sub-header components
import UnauthorizedHeader from "./header-sub-components/UnauthorizedHeader"
import AuthorizedHeader from "./header-sub-components/AuthorizedHeader"

const Header = () => {

    // hooks
    const dispatch = useDispatch()

    // set main dir handler
    const setMainDirHandler = dir => {
        dispatch(setMainDir(dir))
    }

    // show side bar
    const homeMainSideBar = () => {
        let homeMainSideBar = document.getElementById('home-main-side-bar')
        if(homeMainSideBar.classList.contains('left-[-100vw]')){
            homeMainSideBar.classList.remove('left-[-100vw]')
        }
    }
  return (
    <header className='border-b border-emerald-700 border-opacity-[.15]'>
        <div className='max-w-[1200px] mx-auto p-1 flex items-center justify-between'>
            {/* site logo and menu icon container */}
            <div className="flex items-center">
                <div className="cursor-pointer text-emerald-700 text-xl sm:text-2xl mb-[-.25rem] flex items-center mr-1 sm:hidden" 
                    onClick={homeMainSideBar}
                >
                    <AiOutlineMenu />
                </div>
                <div className="text-emerald-700 text-2xl opacity-[.75] cursor-pointer hidden sm:flex items-center font-bold " 
                    onClick={()=>{
                        setMainDirHandler('HOME')
                    }}
                >
                    <span>ishare</span>
                </div>
                <div className="cursor-pointer text-emerald-700 text-2xl sm:text-2xl flex items-center sm:hidden" 
                    onClick={()=>{
                        setMainDirHandler('HOME')
                    }}
                >
                    <IoMdHome />
                </div>
            </div>
            {/* site main search bar container */}
            <div className="flex-grow flex items-center justify-end">
                <div className="flex-grow flex items-center justify-end mr-3">
                    <div className="flex items-center py-[.1rem] bg-black bg-opacity-[.13] rounded-full px-1">
                        <CiSearch className="text-emerald-700 text-xl cursor-pointer"/>
                        <input type="text" className="border-none bg-transparent focus:outline-none text-emerald-700 text-xs font-serif" placeholder="username..."/>
                    </div>
                </div>
            </div>
            {/* header right side controllers container */}
            <div>
                {
                    false
                    ?
                    <AuthorizedHeader />
                    :
                    <UnauthorizedHeader />
                }
            </div>
        </div>
    </header>
  )
}

export default Header