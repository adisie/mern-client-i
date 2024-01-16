import {useSelector} from 'react-redux'

// actions from slices
// posts slice
import {
  selectAllPosts,
} from '../postsSlice'

// sub - components
import SinglePost from "./SinglePost"

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const PostsContent = () => {
  // states from slices
  const allPosts = useSelector(selectAllPosts)
  
  return (
    <div className='flex-grow bg-white h-[93vh] overflow-y-auto px-1'>
        {/* single post */}
        {
          allPosts.length > 0 
          ?
          <>
          {
            allPosts.map(post=>(
              <SinglePost key={post._id} post={post}/>
            ))
          }
          </>
          :
          <div>no post yet</div>
        }
    </div>
  )
}

export default PostsContent