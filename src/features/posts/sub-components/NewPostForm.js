import { useState } from "react"
// icons
// send icon
import { FiSend } from "react-icons/fi"
// file
import { MdOutlineAttachFile } from "react-icons/md"

//////////////////////////////////////////
//////////////////////////////////////////
const NewPostForm = () => {

    // local states
    const [text,setText] = useState('')

    // adjust text-area height
    const adjustTextAreaHeight = e => {
        let element = document.getElementById('post-text-area')
        element.style.height = '26px'
        let scHeight = e.target.scrollHeight 
        element.style.height = `${scHeight}px`
    }

    // submit handler
    const submitHandler = () => {
        let element = document.getElementById('post-text-area')
        if(text.trim()){
            console.log(text)
        }
        element.style.height = '26px'
        element.focus()
        setText('')
    }

  return (
    <div className='flex items-center justify-center relative'>
        <div className='flex-grow flex bg-red-700'>
            <div className='absolute bottom-0 flex items-center bg-white flex-grow w-full'>
                <textarea name="text" className="font-serif text-sm text-emerald-900" id='post-text-area' placeholder="text here ..." 
                    onKeyUp={adjustTextAreaHeight} 
                    value={text} 
                    onChange={e=>setText(e.target.value)}
                ></textarea>

                <button className='self-end text-xl text-gray-700 opacity-[.75] ml-1' 
                    onClick={submitHandler}
                >
                    <FiSend />
                </button>
                <input type="file" hidden name="file" id="file" />
                <label htmlFor="file" className='self-end text-xl cursor-pointer text-gray-700 opacity-[.75] ml-1'>
                    <MdOutlineAttachFile />
                </label>
            </div>
        </div>
    </div>
  )
}

export default NewPostForm