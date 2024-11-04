import React from 'react'
import horizonLogo from "../assets/home/HoRiZoN-logo-second-draft.png";
const HorizonCard = () => {
    return (
        <div className="cardbox w-full md:w-1/2 h-1/4 md:h-full hidden md:flex justify-center mx-auto">
            <div
                className="horizon-card  p-6 md:p-10 md:px-[20px] md:pt-0 md:pb-[20px] flex flex-col justify-center font-rosario w-[70%] md:w-[90%] md:max-w-[420px] md:min-w-[300px] h-auto md:h-[17rem] rounded-md border border-solid border-[#ffffff41] bg-gray-500 "
                style={{
                    background:
                        "linear-gradient(180deg, rgba(142, 141, 141, 0.5) -36.57%, rgba(217, 217, 217, 0) 141.73%)",
                    backdropFilter: "blur(36px)",
                }}
            >
                <div className="heading h-fit w-full flex items-center justify-between">
                    <div className="fs-4 text-[#acababad] md:text-lg ">
                        FCC IIT Hyderabad
                    </div>
                    <img
                        className="horizon-logo w-15 h-10 md:w-16 md:h-12 "
                        src={horizonLogo}
                        alt=""
                    />
                </div>
                <div className="horizon-title h-fit w-fit flex items-center justify-between">
                    <div className="md:text-[4rem] text-[2rem] bg-clip-text text-[#1270ED] t">
                        Horizon
                    </div>
                </div>
                <div className="timer h-fit w-full">
                    <div className="countdown-container flex justify-between w-full p-[2%]">
                        <div className="days text-[#acababad]">
                            <span id="days"> 00</span> <br />
                            <span>days</span>
                        </div>
                        <div className="hours text-[#acababad]">
                            <span id="hours"> 00</span> <br />
                            <span>hrs</span>
                        </div>
                        <div className="minutes text-[#acababad]">
                            <span id="minutes"> 00</span>
                            <br /> <span>min</span>
                        </div>
                        <div className="seconds text-[#acababad]">
                            <span id="seconds"> 00</span> <br />
                            <span>sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizonCard