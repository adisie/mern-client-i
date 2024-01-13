

// groups side bar components
import GroupsSideBarHeader from "./GroupsSideBarHeader"
import GroupsLists from "./GroupsLists"

const GroupsSideBar = () => {
  return (
    <div className='min-w-[250px] sm:w-[25%] h-full pr-1 absolute bg-gray-100 left-[-100vw] sm:relative sm:left-0 z-50 sm:bg-white' id="groups-left-side-bar-container">
      <GroupsSideBarHeader />
      <GroupsLists />
    </div>
  )
}

export default GroupsSideBar