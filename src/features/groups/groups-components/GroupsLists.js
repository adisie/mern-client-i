// default group profile
import groupDefaultProfile from '../../../assets/images/defaults/group-profile-avater-2.jpg'

const GroupsLists = () => {
  return (
    <div className="bg-green-300 h-[88vh] overflow-y-auto">
      {/* mine group list */}
      <div>
        <div>
          <img src={!true ? '' : groupDefaultProfile } alt="group profile" className='w-[28px] h-[28px] rounded-full cursor-pointer'/>
          <span>group name</span>
        </div>
        <div>
          <button>leave</button>
        </div>
      </div>
    </div>
  )
}

export default GroupsLists