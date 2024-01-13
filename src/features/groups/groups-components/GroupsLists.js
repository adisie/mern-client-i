import {useSelector} from 'react-redux'

// actions from slices
// groups slice
import {
  selectGroupDir,
} from '../groupsSlice'

// groups list
// own groups
import OwnGroupsLists from './groups-lists/OwnGroupsLists'
// find groups
import FindGroupsLists from './groups-lists/FindGroupsLists'

const GroupsLists = () => {
  // states from slices
  const groupDir = useSelector(selectGroupDir)
  return (
    <div className="h-[88vh] overflow-y-auto text-emerald-700 text-xs font-serif px-1">
      {/* mine group list */}
      {
        groupDir === 'ALL'
        ?
        <>
        <OwnGroupsLists />
        <OwnGroupsLists />
        </>
        :
        groupDir === 'JOIN'
        ?
        <>
        <FindGroupsLists />
        <FindGroupsLists />
        <FindGroupsLists />
        </>
        :
        <></>
      }
    </div>
  )
}

export default GroupsLists