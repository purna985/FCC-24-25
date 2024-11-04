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
          <p className='className=" text-3xl md:text-6xl my-5 md:my-10 md:pb-10 md:w-[80%]" w-full text-center mx-auto'>Upcoming Sessions</p>
            <Carousel
                opts={{
                    align: "start",
                    containScroll: "trim", // Keeps the items within the view boundary for better responsiveness
                    dragFree: true,        // Allows smooth dragging
                    skipSnaps: false,      // Adds snapping points to make it easier to stop
                }}
                className="w-full z-20 max-w-[90%] mx-auto"
            >
                <CarouselContent className="flex gap-4">
                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <HomeEventCard title="Intro to Finance and Stock Market" subtitle="Unlocking the secrets of finance and the stock market! 📈💸 Dive into the world of smart investments and future financial insights." date="October 20, 2024" time="9:00 PM" venue="Auditorium" />
                    </CarouselItem>
                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <HomeEventCard title="Intro to Finance and Stock Market" subtitle="Unlocking the secrets of finance and the stock market! 📈💸 Dive into the world of smart investments and future financial insights." date="October 20, 2024" time="9:00 PM" venue="Auditorium" />
                    </CarouselItem>
                    <CarouselItem className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <HomeEventCard title="Intro to Finance and Stock Market" subtitle="Unlocking the secrets of finance and the stock market! 📈💸 Dive into the world of smart investments and future financial insights." date="October 20, 2024" time="9:00 PM" venue="Auditorium" />
                    </CarouselItem>
                    
                </CarouselContent>
                <CarouselPrevious className="h-1/2 text-black bg-[#3361A1] rounded-md flex" > </CarouselPrevious>
                <CarouselNext className="h-1/2 text-black bg-[#3361A1] rounded-md flex" ></CarouselNext>
            </Carousel>
        </div>
    )
}

export default HomeCarousel
