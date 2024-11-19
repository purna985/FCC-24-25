import { Link } from "react-router-dom"
import HorizonCard from "../horizon/HorizonCard"
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";
import { Button } from '@/components/ui/button'


const HomeLanding = () => {
    return (
        <div className="flex h-[80vh] md:h-auto mb-[10%] md:flex-row flex-col w-full justify-evenly  md:justify-start items-center md:py-[5%] z-20">
            {/* Bg elements */}
            <div className="absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] "></div>

            {/* Landing titles */}
            <div className="md-1:w-auto lg:w-1/2 w-full flex flex-col text-center r justify-evenly">
                <div className="titles  md:w-[80%] mx-auto">
                    <p className="text-[#1270ed] md:text-6xl text-5xl leading-100p md:text-start text-center w-full  mb-5">
                        Finance & <br className="md:hidden" /> Consulting Club 
                    </p>
                    <p className="font-light text-xl md:text-[2.5rem] leading-normal  text-center md:text-start">
                        IIT Hyderabad
                    </p>
                </div>
                <div className="md:w-4/5 mx-auto" >
                    <Link
                        to="/horizon"
                        className="flex items-start my-5"
                    >
                        <Button className='text-xl p-6 relative overflow-hidden' >
                            Horizon 25&apos;{" "}
                            <img src={rightArrow} className="h-10 w-10 md:w-15 md:h-15" alt="" />
                            <div className='w-3 h-3 bg-white absolute top-0 right-0 blur-[0.6rem]' ></div>
                            <div className='w-3 h-3 bg-white absolute bottom-0 left-0 blur-[0.6rem]' ></div>

                        </Button>
                    </Link>
                </div>

            </div>

            {/* Horizon Timer Card */}
            <HorizonCard />
        </div >)
}

export default HomeLanding