
// user default profile picture
import userDefaultProfile from '../../assets/images/defaults/male-profile-3.jpg'
const AuthorizedHeader = () => {
  return (
    <div>
      <div className='flex items-center text-xs text-emerald-700 font-serif'>
        <div className='hidden sm:flex'>
          <span>username</span>
        </div>
        <div>
          <img src={!true? "" : userDefaultProfile} alt="user default profile" className='cursor-pointer w-[28px] h-[28px] rounded-full ml-1'/>
        </div>
        <div className='hidden sm:flex'>
          <button className='px-[1rem] cursor-pointer py-[.13rem] border border-emerald-700 border-opacity-[.75] rounded-sm transition-all ease-in-out duration-500 hover:bg-emerald-700 hover:text-gray-200 hover:border-opacity-0 ml-3'>logout</button>
        </div>
      </div>
    </div>
  )
}

export default AuthorizedHeader