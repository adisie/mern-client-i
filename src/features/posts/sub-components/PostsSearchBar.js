import { useState } from 'react'
import {useSelector} from 'react-redux'

// actions from slices
import {
  selectAllUsers,
} from '../../users/usersSlice'
// posts 
import {
  selectAllPosts,
} from '../postsSlice'

// search icons
import { CiSearch } from "react-icons/ci"

const PostsSearchBar = () => {
  // states from slices
  const allUsers = useSelector(selectAllUsers)
  const allPosts = useSelector(selectAllPosts)
  
  // input change handler 
  const usernameInputChangeHandler = e => {
    let username = e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1)
    let usersId = allUsers.filter(user=>user.username.startsWith(username))
    let filteredIds = [] 
    usersId.forEach(user=>{
      filteredIds.push(user._id)
    })
    
    let filteredPosts = allPosts.filter(post=>filteredIds.includes(post.authorId))
    console.log(filteredPosts)
  }
  
  return (
    <div className="flex-grow flex items-center justify-end">
        <div className="flex-grow flex items-center justify-end mr-3">
            <div className="flex items-center py-[.1rem] bg-black bg-opacity-[.13] rounded-full px-1">
                <CiSearch className="text-emerald-700 text-xl cursor-pointer"/>
                <input type="text" className="border-none bg-transparent focus:outline-none text-emerald-700 text-xs font-serif" placeholder="username..." 
                  onKeyUp={usernameInputChangeHandler}
                />
            </div>
        </div>
    </div>
  )
}

export default PostsSearchBar