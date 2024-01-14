import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// easy nav
import {
  selectMainDir,
  setMainDir,
} from '../easy-nav/easyNavSlice'
// users slice
import {
  selectUser,
} from '../users/usersSlice'

// side bar components
import HomeMenuSideBar from './components/HomeMenuSideBar'

// main components
// posts components
import Posts from '../posts/Posts'
// groups Component
import Groups from '../groups/Groups'
import GroupsSideBar from '../groups/groups-components/GroupsSideBar'
// channels
import Channels from '../channels/Channels'

// chats
import Chats from '../chats/Chats'

// users component
// login and sign up
import LoginSignup from '../users/LoginSignup'


// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
const Home = () => {
  // states from slices
  // easy nav
  const mainDir = useSelector(selectMainDir)
  // users
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch()

  // effects
  useEffect(()=>{
    if(user){
      dispatch(setMainDir('HOME'))
    }
  })

  return (
    <div className='flex-grow'>
      <div className='max-w-[1200px] mx-auto px-1 flex h-full relative'>
        {
         mainDir === 'HOME' || mainDir === 'AUTH'
          ?
          <HomeMenuSideBar />
          :
          mainDir === 'GROUPS'
          ?
          <GroupsSideBar />
          :
          <></>
        }
        {
          mainDir === 'HOME'
          ?
          <Posts />
          :
          mainDir === 'GROUPS'
          ?
          <Groups />
          :
          mainDir === 'CHANNELS'
          ?
          <Channels />
          :
          mainDir === 'CHATS'
          ?
          <Chats />
          :
          mainDir === 'AUTH'
          ?
          <LoginSignup />
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Home