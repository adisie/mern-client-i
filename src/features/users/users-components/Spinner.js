
const Spinner = () => {
  return (
    <div className=''>
        <div className="pt-16">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-[100px] h-[100px] rounded-full border border-emerald-700 border-r-transparent z-10 animate-spin"></div>
                <div className="absolute w-[70px] h-[70px] rounded-full border border-emerald-700 border-l-transparent z-30 animate-anti-clock"></div>
                <div className="absolute w-[40px] h-[40px] rounded-full border border-emerald-700 border-r-transparent z-50 animate-spin"></div>
            </div>
        </div>
    </div>
  )
}

export default Spinner