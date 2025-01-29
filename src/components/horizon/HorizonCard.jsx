import { useState, useEffect } from "react";
import horizonLogo from "/src/assets/home/HoRiZoN-logo-second-draft.png";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const HorizonCard = () => {
    const [timeLeft, setTimeLeft] = useState({});
    const [isEventLive, setIsEventLive] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const targetDate = new Date("2025-01-28T00:00:00");
        const confettiEndDate = new Date(targetDate.getTime() + 3 * 24 * 60 * 60 * 1000);

        const updateCountdown = () => {
            const currentDate = new Date();
            const diff = targetDate - currentDate;

            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((diff / (1000 * 60)) % 60),
                    secs: Math.floor((diff / 1000) % 60),
                });
            } else {
                setIsEventLive(true);
                setTimeLeft(null);
                if (currentDate < confettiEndDate) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 5000);
                }
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cardbox z-20 w-full md:w-1/2 flex justify-center mx-auto">
            {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
            <div
                className={`horizon-card p-6 md:p-6 flex flex-col justify-center font-rosario w-[70%] md:w-[90%] max-w-[420px] rounded-md border border-[#ffffff41] bg-gray-500`}
                style={{
                    background:
                        "linear-gradient(180deg, rgba(142, 141, 141, 0.5) -36.57%, rgba(217, 217, 217, 0) 141.73%)",
                    backdropFilter: "blur(36px)",
                }}
            >
                <div className="heading flex items-center justify-between">
                    <div className="fs-4 text-[#acababad] md:text-lg">
                        FCC IIT Hyderabad
                    </div>
                    <img className="w-16 h-12" src={horizonLogo} alt="Horizon Logo" />
                </div>

                <div className="horizon-title flex items-center justify-between">
                    <div className="md:text-[4rem] text-[2rem] text-[#1270ED]">
                        Horizon
                    </div>
                </div>

                {isEventLive ? (
                    <div className="event-live flex flex-col items-start px-2 my-6">
                        <p className="text-xl font-bold">Horizon 25' is Live! 🚀</p>
                        {/* <Link to="/horizon/schedule" className="mt-4 bg-blue-600 text-white px-6 py-2 hover:bg-blue-500 rounded-md">
                            Join Now
                        </Link> */}
                    </div>
                ) : (
                    <div className="timer w-full mt-3">
                        <div className="countdown-container flex justify-between w-full p-2">
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                <div key={unit} className="text-[#acababad] text-center">
                                    <span className="font-mono text-xl">{value}</span> <br />
                                    <span>{unit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HorizonCard;
