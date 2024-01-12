

// groups side bar components
import GroupsSideBarHeader from "./GroupsSideBarHeader"
import GroupsLists from "./GroupsLists"

const GroupsSideBar = () => {
  return (
    <div className='min-w-[230px] pr-1'>
      <GroupsSideBarHeader />
      <GroupsLists />
    </div>
  )
}

export default GroupsSideBar