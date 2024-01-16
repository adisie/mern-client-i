import {formatDistanceToNow} from 'date-fns'
import {useSelector,useDispatch} from 'react-redux'

// actions from slice
import {
    selectUser,
} from '../../users/usersSlice'
import {
    deleteSinglePost,
} from '../postsSlice'

// icons
// like
import { BsFillHandThumbsUpFill } from "react-icons/bs"
// comments
import { RiMessage2Fill } from "react-icons/ri"
// delete
import { IoMdTrash } from "react-icons/io"


// get username
import GetUsername from "../../users/users-components/GetUsername"
// get profile
import GetProfile from '../../profile/sub-profiles/GetProfile'

////////////////////////////////////////////
////////////////////////////////////////////
const SinglePost = ({post}) => {
    // states from slices
    const user = useSelector(selectUser)

    // hooks
    const dispatch = useDispatch()

    // delete single post
    const deleteSinglePostHandler = _id => {
        dispatch(deleteSinglePost(_id))
    }

  return (
    <div className="mb-3 border-b border-emerald-700 border-opacity-[.13] pb-2 px-1">
    {/* posts content */}
    <div className="ml-3 sm:ml-7 text-sm text-emerald-950 font-serif">
        <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa officia consectetur voluptatibus a quod sapiente officiis, perspiciatis quaerat odit ullam deserunt, quasi impedit! Numquam non amet commodi cupiditate beatae nisi atque rem. Dignissimos beatae quis autem delectus perspiciatis debitis incidunt! Rem sequi sapiente excepturi dolorem velit quidem inventore distinctio ut magnam nihil fuga placeat, libero quam obcaecati numquam et voluptates! At, quos veritatis, quae nesciunt accusantium libero nobis reprehenderit nihil assumenda possimus eveniet necessitatibus laborum fugit? Enim eius, ipsum tempore, iure repellendus accusamus totam obcaecati illum iusto nobis aspernatur, consectetur eos magni suscipit ipsa maiores nam molestias cum rerum.
        </p>
    </div>
    {/* authors container */}
    <div className='flex items-center text-emerald-900 text-xs font-serif'>
        {/* author name and profile */}
        <div className='flex items-center cursor-pointer mr-3'>
            <GetProfile userId={post.authorId}/>
            {/* author name */}
            <GetUsername userId={post.authorId}/>
            {
                !true 
                ?
                <div className="w-[7px] h-[7px] rounded-full bg-emerald-700 ml-1"></div>
                :
                <div className="w-[7px] h-[7px] rounded-full bg-gray-500 ml-1"></div>
            }
        </div>
        {/* action buttons */}
        <div className="flex items-center">
            <span>12</span>
            <button className="text-xl mx-1"><BsFillHandThumbsUpFill /></button>
            <span>7</span>
            <button className="text-xl mx-1"><RiMessage2Fill /></button>
            {
                user && user._id === post.authorId && <button className="text-xl mr-1 text-gray-700" 
                    onClick={()=>{
                        deleteSinglePostHandler(post._id)
                    }}
                ><IoMdTrash /></button>
            }
        </div>
        {/* date */}
        <div className="flex items-center text-xs italic">
            <span>{formatDistanceToNow(new Date(post.createdAt),{addSuffix: true})}</span>
        </div>
    </div>
</div>
  )
}

export default SinglePost