
const HorizonLanding = () => {
    return (
        <div className='relative md:min-h-[80vh] px-6 pt-12 my-12 md:my-[6rem] text-center  z-50 '>
            <div className='absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
            <div className='absolute right-0 top-[90vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] '></div>
            <p className=' text-lg md:text-[2.2vw] font-light font-rosario text-custom-blue pb-6 md-1:pb-4 '>
                FCC IIT-HYDERABAD  Presents
            </p>
            <div className='mx-auto w-full flex-col gap-0 m-6 md-1:mb-6 mt-0'>
                <p className='w-full font-semibold text-6xl md:text-[7rem] text-white  md-1:leading-normal'>HORIZON 25&apos;</p>
            </div>

            {/* Schedule Button */}
            {/* <div className="gap-2 flex justify-center py-8 md-1:py-2">
      <a className="font-rosario bg-custom-blue font-bold rounded-lg text-xl px-6 py-2 md-1:w-70p md-1:inline-block">
        TODAY'S SCHEDULE </a>
    </div> */}

        </div>)
}

export default HorizonLanding