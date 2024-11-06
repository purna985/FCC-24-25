import glimpseVideo from "/src/assets/home/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4"

const HorizonVideo = () => {
    return (
        <div className="sticky m-auto py-12 md:py-2 mt-10 md:mt-2 z-50 ">
            <div className='w-full h-full opacity-50 absolute z-10 ' ></div>
            <video className="px-3 mx-auto md:w-4/5" autoPlay muted loop draggable="false">
                <source src={glimpseVideo} />
                ./images/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4
            </video>
        </div>)
}

export default HorizonVideo