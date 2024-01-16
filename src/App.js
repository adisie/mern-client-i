import { useEffect } from "react"
import {useDispatch} from 'react-redux'

// actions from slices
// posts slices
import {
  getAllPosts,
} from './features/posts/postsSlice'
// users
import {
  getAllUsers,
  getUsersProfiles,
} from './features/users/usersSlice'

// components
import Header from "./components/Header"

// home page
import Home from "./features/home/Home"

const App = () => {
  // hoks
  const dispatch = useDispatch()

  // effects
  useEffect(()=>{
    dispatch(getAllPosts())
  })
  useEffect(()=>{
    dispatch(getAllUsers())
  })
  useEffect(()=>{
    dispatch(getUsersProfiles())
  },[])
  
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Home />
    </div>
  )
}

export default App