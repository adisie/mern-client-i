// default group profile
import groupDefaultProfile from '../../../../assets/images/defaults/group-profile-avater-2.jpg'

const OwnGroupsLists = () => {
  return (
    <div className='flex items-center justify-between py-1 border-b border-emerald-700 border-opacity-[.13] mb-1'>
        <div className='flex items-center cursor-pointer'>
            <img src={!true ? '' : groupDefaultProfile } alt="group profile" className='w-[24px] h-[24px] rounded-full cursor-pointer mr-1'/>
            <span>group name</span>
        </div>
        <div>
            <button className='border rounded-sm border-emerald-700 border-opacity-[.25] px-[1rem] py-[.13rem]'>leave</button>
        </div>
    </div>
  )
}

export default OwnGroupsLists