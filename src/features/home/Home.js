import { useEffect } from 'react'
import {useSelector} from 'react-redux'

// actions from slices
// easy nav
import {
  selectMainDir,
} from '../easy-nav/easyNavSlice'

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