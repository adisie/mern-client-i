// icons
// user profile icon
import { LuUserCircle } from "react-icons/lu"
// like
import { BsFillHandThumbsUpFill } from "react-icons/bs"
// comments
import { RiMessage2Fill } from "react-icons/ri"
// delete
import { IoMdTrash } from "react-icons/io"

// author profile
import defaultUserProfile from '../../../assets/images/defaults/male-profile-3.jpg'

////////////////////////////////////////////
////////////////////////////////////////////
const SinglePost = () => {
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
            {
                !true 
                ?
                <img src={defaultUserProfile} alt="" className='w-[26px] h-[26px] rounded-full mr-1'/>
                :
                <LuUserCircle className="text-2xl opacity-[.9] mr-1"/>
            }
            <span>author</span>
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
            <button className="text-xl mr-1 text-gray-700"><IoMdTrash /></button>
        </div>
        {/* date */}
        <div className="flex items-center text-xs italic">
            <span>date</span>
        </div>
    </div>
</div>
  )
}

export default SinglePost