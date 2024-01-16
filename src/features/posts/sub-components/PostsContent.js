// sub - components
import SinglePost from "./SinglePost"

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const PostsContent = () => {
  return (
    <div className='flex-grow bg-white h-[93vh] overflow-y-auto px-1'>
        {/* single post */}
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
    </div>
  )
}

export default PostsContent