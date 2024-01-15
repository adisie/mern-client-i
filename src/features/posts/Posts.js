
// sub-components
import NewPostForm from "./sub-components/NewPostForm"
const Posts = () => {
  return (
    <div className='flex-grow'>
      <div className='flex-grow bg-white h-[93vh]'>post content</div>

      {/* new post form */}
      <NewPostForm />
    </div>
  )
}

export default Posts