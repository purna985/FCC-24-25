import { useState, useEffect } from "react";
import horizonLogo from "/src/assets/home/HoRiZoN-logo-second-draft.png";

const HorizonCard = () => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [mins, setMins] = useState(0)
    const [secs, setSecs] = useState(0)

    useEffect(() => {
        const targetDate = new Date("2025-01-15T00:00:00");

        const updateCountdown = () => {
            const currentDate = new Date();
            const diff = targetDate - currentDate;

            if (diff > 0) {
                const remainingDays = Math.floor(diff / (1000 * 60 * 60 * 24));
                const remainingHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const remainingMinutes = Math.floor((diff / (1000 * 60)) % 60);
                const remainingSeconds = Math.floor((diff / 1000) % 60);

                setDays(remainingDays);
                setHours(remainingHours);
                setMins(remainingMinutes);
                setSecs(remainingSeconds);
            } else {
                setDays(0);
                setHours(0);
                setMins(0);
                setSecs(0);
            }
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cardbox z-20 w-full md:w-1/2 md:h-1/4 md:h-full flex justify-center mx-auto">
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
                            <span id="days" className="font-mono text-xl" > {days} </span> <br />
                            <span>days</span>
                        </div>
                        <div className="hours text-[#acababad]">
                            <span id="hours" className="font-mono" > {hours} </span> <br />
                            <span>hrs</span>
                        </div>
                        <div className="minutes text-[#acababad]">
                            <span id="minutes" className="font-mono" > {mins} </span>
                            <br /> <span>min</span>
                        </div>
                        <div className="seconds text-[#acababad]">
                            <span id="seconds" className="font-mono" > {secs} </span> <br />
                            <span>sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizonCard