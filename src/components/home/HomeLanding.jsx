import { Link } from "react-router-dom"
import HorizonCard from "../horizon/HorizonCard"
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";


const HomeLanding = () => {
    return (
        <div className="flex h-auto mb-[10%] md:flex-row flex-col w-full justify-start items-center md:py-[5%] z-20">
            {/* Bg elements */}
            <div className="absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] "></div>

            {/* Landing titles */}
            <div className="md-1:w-auto lg:w-1/2 w-full flex flex-col text-center r justify-evenly">
                <div className="titles  w-[80%] mx-auto">
                    <p className="text-[#1270ed] md:text-6xl text-5xl leading-100p md:text-start text-center  mb-5">
                        Finance & Consulting Club
                    </p>
                    <p className="font-light text-xl md:text-[2.5rem] leading-normal  text-center md:text-start">
                        IIT Hyderabad
                    </p>
                </div>
                <div className="md:w-4/5 mx-auto" >
                    <Link
                        to="/horizon"
                        className="shadow-[0_0_12px_rgba(69,115,213,0.6)] hover:shadow-[0_0_25px_rgba(69,115,213,0.6)] w-fit md:w-1/2 my-10 text-lg  md:text-4xl text-white bg-[#1228ed] rounded-md flex justify-center items-center p-2 md:px-5 "
                    >
                        Horizon 25&apos;{" "}
                        <img src={rightArrow} className="h-10 w-10 md:w-20 md:h-20" alt="" />
                    </Link>
                </div>

            </div>

            {/* Horizon Timer Card */}
            <HorizonCard />
        </div>)
}

export default HomeLanding