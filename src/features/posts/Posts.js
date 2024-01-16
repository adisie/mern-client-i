import {useSelector} from 'react-redux'

// actions from slices
// user slice
import {
  selectUser,
} from '../users/usersSlice'

// sub-components
import NewPostForm from "./sub-components/NewPostForm"
import PostsContent from './sub-components/PostsContent'

///////////////////////////////////////////////////
///////////////////////////////////////////////////
const Posts = () => {
  // states frm slices
  const user = useSelector(selectUser)

  return (
    <div className='flex-grow'>
      {/* posts content */}
      <PostsContent />

      {/* new post form */}
      {user && <NewPostForm />}
    </div>
  )
}

export default Posts