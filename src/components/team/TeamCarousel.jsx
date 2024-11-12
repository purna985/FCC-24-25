import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import TeamHeadCard from './TeamHeadCard';
import TeamCoordCard from './TeamCoordCard';

const TeamCarousel = ({ teamname, heads, coords }) => {
    return (
        <div  >
            <h1 className=' text-4xl py-10 mt-12 text-center w-[90%] md:w-full' >{teamname}</h1>
            
            {/* Domain Heads */}
            <div className='w-full flex flex-wrap justify-evenly gap-5 md:gap-0' >
                {
                    heads.map((head, key) => {
                        return (
                            <TeamHeadCard key={key} name={head.name} image={head.image} title={head.por} linkedin={head.linkedin} />
                        )
                    })
                }
            </div>
            
            {/* Domain Coords */}
            {
                coords.length > 0 &&
                <Carousel
                    opts={{
                        align: "start",
                        containScroll: "trim", // Keeps the items within the view boundary for better responsiveness
                        dragFree: true,        // Allows smooth dragging
                        skipSnaps: false,      // Adds snapping points to make it easier to stop
                    }}
                    className="w-full z-20 max-w-[90%] mx-auto my-10"
                >
                    <CarouselContent className="flex gap-4 mx-auto">

                        {
                            coords.map((coord, key) => {
                                return (
                                    <CarouselItem key={key} className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg lg:basis-1/3">
                                        <TeamCoordCard name={coord.name} image={coord.image} title={coord.por} linkedin={coord.linkedin} />
                                    </CarouselItem>
                                )
                            })
                        }

                    </CarouselContent>
                    <CarouselPrevious className="h-1/2 text-black bg-[#3361A1] rounded-md flex" > </CarouselPrevious>
                    <CarouselNext className="h-1/2 text-black bg-[#3361A1] rounded-md flex" ></CarouselNext>
                </Carousel>             
            }
            
        </div>
    )
}

export default TeamCarousel