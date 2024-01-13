import { useDispatch } from "react-redux"

// actions from slices
// easy nav
import {
  setMainDir,
} from '../../features/easy-nav/easyNavSlice'
// user slices
import {
  setIsLogin,
} from '../../features/users/usersSlice'

const UnauthorizedHeader = () => {
  // hooks
  const dispatch = useDispatch()

  // set main dir handler
  const setMainDirHandler = (dir) => {
    dispatch(setMainDir(dir))
  }
  return (
    <div className="flex items-center text-emerald-700 text-xs font-serif">
        <div>
            <button className="px-[1rem] cursor-pointer py-[.13rem] border border-emerald-700 border-opacity-[.75] rounded-sm transition-all ease-in-out duration-500 hover:bg-emerald-700 hover:text-gray-200 hover:border-opacity-0 "
              onClick={()=>{
                setMainDirHandler('AUTH')
                dispatch(setIsLogin(true))
              }}
            >login</button>
        </div>
        <div className="hidden sm:flex">
        <button className="px-[1rem] cursor-pointer py-[.13rem] border border-emerald-700 border-opacity-[.75] rounded-sm transition-all ease-in-out duration-500 hover:bg-emerald-700 hover:text-gray-200 hover:border-opacity-0 ml-3" 
          onClick={()=>{
            setMainDirHandler('AUTH')
            dispatch(setIsLogin(false))
          }}
        >signup</button>
        </div>
    </div>
  )
}

export default UnauthorizedHeader