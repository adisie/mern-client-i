

// side bar components
import HomeMenuSideBar from './components/HomeMenuSideBar'

// main components
// posts components
import Posts from '../posts/Posts'

const Home = () => {
  return (
    <div className='flex-grow'>
      <div className='max-w-[1200px] mx-auto px-1 flex h-full relative'>
        {
          true 
          ?
          <HomeMenuSideBar />
          :
          <></>
        }
        {
          true
          ?
          <Posts />
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Home