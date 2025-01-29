import HomeEventCard from '../../components/event-cards/HomeEventCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const HomeCarousel = () => {
    return (
        <div className="w-full  mx-auto my-10 md:my-5 px-4 sm:px-6 lg:px-8">
            <p className='className=" text-3xl md:text-6xl my-5 md:my-10 md:pb-10 md:w-[80%]" w-full text-center mx-auto'>Recent & Upcoming Events</p>
            <Carousel
                opts={{
                    align: "start",
                    containScroll: "trim", // Keeps the items within the view boundary for better responsiveness
                    dragFree: true,        // Allows smooth dragging
                    skipSnaps: false,      // Adds snapping points to make it easier to stop
                }}
                className="w-full z-20 max-w-[90%] mx-auto"
            >
                <CarouselContent className="flex gap-4 mx-auto">

                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg ">
                        <HomeEventCard title={`Horizon 2025 - Day 1️⃣`} subtitle="The most exciting management fest by FCC IITH is coming back bigger and better this year, loaded with inspiring talks, exciting events and ofcourse, Pronites!!  We're Coming soon..." date="January 31, 2025" time="5:30 PM, IST" venue="Auditorium - A Block" link="/horizon/schedule" linkText="View Full 
                         Schedule" />
                    </CarouselItem>

                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg ">
                        <HomeEventCard title={`Pre - Horizon`} subtitle="Kickstarting the most exciting Management fest by FCC IITH🔥. Join us for aan inspiring talk by renowned Youtuber Mr. Pranjal Kamra and the theme launch for Horizon 2025" date="January 11, 2025" time="8:30 PM" venue="Auditorium - A Block" />
                    </CarouselItem>

                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg ">
                        <HomeEventCard title={`Trading 101 : Master the basics of Stock Trading`} subtitle="Join Us and kickstart your trading journey today📈" date="November 9, 2024" time="9:00 PM" venue="Auditorium - A Block" />
                    </CarouselItem>

                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg ">
                        <HomeEventCard title="Intro to Finance and Stock Market" subtitle="Unlock secrets of finance and the stock market!💸 " date="October 20, 2024" time="9:00 PM" venue="Auditorium" />
                    </CarouselItem>

        

                </CarouselContent>
                <CarouselPrevious className="h-1/2 text-black bg-[#3361A1] rounded-md flex" > </CarouselPrevious>
                <CarouselNext className="h-1/2 text-black bg-[#3361A1] rounded-md flex" ></CarouselNext>
            </Carousel>
        </div>
    )
}

export default HomeCarousel
