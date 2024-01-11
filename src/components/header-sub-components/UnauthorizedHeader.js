
const UnauthorizedHeader = () => {
  return (
    <div className="flex items-center text-emerald-700 text-xs font-serif">
        <div>
            <button className="px-[1rem] cursor-pointer py-[.13rem] border border-emerald-700 border-opacity-[.75] rounded-sm transition-all ease-in-out duration-500 hover:bg-emerald-700 hover:text-gray-200 hover:border-opacity-0 ">login</button>
        </div>
        <div className="hidden sm:flex">
        <button className="px-[1rem] cursor-pointer py-[.13rem] border border-emerald-700 border-opacity-[.75] rounded-sm transition-all ease-in-out duration-500 hover:bg-emerald-700 hover:text-gray-200 hover:border-opacity-0 ml-3">signup</button>
        </div>
    </div>
  )
}

export default UnauthorizedHeader