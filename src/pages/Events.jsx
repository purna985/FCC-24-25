import Particles from "../components/ParticleBackground.jsx";
import EventArchive from "../components/EventArchive.jsx";
import ScrollAnimation from "../components/ScrollAnimation.jsx";
import Collaborate from "../components/Collaborate.jsx";
import UpcomingEvent from "../components/UpcomingEvent.jsx";
import { motion, AnimatePresence } from "framer-motion";

const TypingText = ({
    text,
    delay = 0,
    duration = 1,
    className = "",
    cursor = false,
    cursorBlink = true
  }) => {
    const letters = text.split("");

    return (
      <span className={`inline-block ${className}`}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-schibsted text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8]"

            transition={{
              delay: delay + index * (duration / letters.length),
              duration: 0.1
            }}
          >
            {letter}
          </motion.span>
        ))}
        {cursor && (
          <motion.span
            className="inline-block w-1 h-8 bg-current -mb-1 ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: cursorBlink ? [0, 1, 0] : 1 }}
            transition={{
              delay: delay + duration,
              duration: 0.8,
              repeat: cursorBlink ? Infinity : 0,
              repeatDelay: 0.4
            }}
          />
        )}
      </span>
    );
  };


function Events() {
  return (
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        id="Hero Section"
        className="w-full h-[530px] relative
                   py-16 md:py-24 lg:py-32
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24
                   flex flex-col items-center justify-center
                   gap-12 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div id="Hero Background Container" className="w-[1557px] h-[530px] absolute inset-0">
          <Particles
            particleColors={['#ffffff', '#4E56D3', '#A3ACD9']}
            particleCount={300}
            particleSpread={15}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        <motion.div
          id="Hero Container"
          className="w-full max-w-[1006px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div id="Hero text container" className="w-full text-center gap-4">
            <motion.div
              id="Hero title"
              className="text-6xl font-schibsted font-extrabold bg-gradient-to-r from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent leading-tight tracking-normal"
            >
              <span className="text-transparent bg-clip-text">
                FCC Events
              </span>

            </motion.div>
            <motion.div
              id="Hero subtitle"
              className="font-outfit font-normal text-xl md:text-xl leading-relaxed text-center mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-2xl text-transparent text-[#BBBBBB] bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)] font-outfit">
                        From talks to summits, here's how we lead the conversation in finance and consulting.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    <UpcomingEvent />
    <EventArchive/>
    <ScrollAnimation />
    <Collaborate/>
    </div>
  );
}

export default Events;