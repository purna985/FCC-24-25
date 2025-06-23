import { Link } from "react-router-dom"
import HorizonCard from "../HorizonCard"
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";
import { Button } from '@/components/ui/button'


const HomeLanding = () => {
    return (
        <div className="flex h-[80vh] md:h-auto mb-[2%] md:flex-row flex-col w-full justify-center items-center md:py-[5%] z-20">
            {/* Main content wrapper: Centers content block, adds mobile padding */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center max-w-[1200px] px-4 md:px-10">
                {/* Left Section: Text Content */}
                <div className="flex flex-col justify-center items-start text-left w-full md:w-1/2 mb-8 md:mb-0">
                    <h2 className="flex items-center gap-x-3 text-4xl md:text-5xl font-title font-bold bg-gradient-to-r from-[#6B72DA] to-[#F3FFD8] bg-clip-text text-transparent text-lime-400 mb-4">
                        Learn. Build. Excel In Finance Practice
                    </h2>
                    <p className="max-w-3xl font-Body-3-fontFamily font-Weights-Medium text-Body-1-fontSize md:text-2xl text-gray-300 mb-8">
                        Empowering tomorrow's finance leaders and consultants through hands-on projects, insights, and global exposure.
                    </p>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5"> {/* Added flex-wrap for button responsiveness */}
                        <button className="flex items-center gap-2 bg-[#4E56D3] hover:bg-blue-500 text-white font-semibold font-roboto text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
                            Collaborate
                            <span className="text-white">→</span>
                        </button>

                        <button className="flex items-center gap-2 bg-[#CDFE64] hover:bg-blue-500 text-[#1F2E01] font-semibold font-roboto text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
                            Explore Horizon2025
                            <span className="text-[#1F2E01]">→</span>
                        </button>
                    </div>
                </div>
                {/* Right Section: HorizonCard */}
                <div className="w-full md:w-1/2 md:ml-10">
                    <HorizonCard />
                </div>
            </div>
        </div>)
}

export default HomeLanding