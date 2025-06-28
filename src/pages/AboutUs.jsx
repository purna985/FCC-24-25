import Particles from "../components/ParticleBackground"
import Collaborate from "../components/Collaborate"
import Vision from "../assets/images/aboutus/Vision.png"
import Mission from "../assets/images/aboutus/Mission.png"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { teamsData } from "@/assets/data/team/teamData";
import ChromaGrid from "../components/team/ChromaGrid";
import { Timeline } from "../components;/TimeLine/Timeline";
import timelineData from "../assets/data/timelineData/timelineData";


function AboutUs() {
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [rows, setRows] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    function handleResize() {
      const containerWidth = window.innerWidth - 40;
      const buttonMinWidth = 150;
      const buttonsPerRow = Math.max(1, Math.floor(containerWidth / buttonMinWidth));

      const newRows = [];
      teamsData.forEach((team, idx) => {
        const rowIdx = Math.floor(idx / buttonsPerRow);
        if (!newRows[rowIdx]) newRows[rowIdx] = [];
        newRows[rowIdx].push({ ...team, idx });
      });

      setRows(newRows);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentTeam = teamsData[selectedTeam];
  const items = [...currentTeam.teamHead, ...currentTeam.teamMembers].map((member) => ({
    image: member.image,
    title: member.name,
    subtitle: member.por,
    handle: member.handle,
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: member.linkedin || "",
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
            className="font-schibsted text-transparent bg-clip-text bg-gradient-to-r from-[#7fa4fa] via-[#7fa4fa] to-[#7fa4fa]"

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
              className="font-Family-primary font-semibold text-5xl md:text-6xl leading-tight tracking-normal"
            >
              <span className="text-transparent bg-clip-text">
                <TypingText
                  text="We're More Than a Club"
                  duration={1.5}
                  cursor={false}
              
                />
              </span>

              <span className="text-transparent block bg-clip-text bg-gradient-to-r p-10 from-[#7fa4fa] via-[#7fa4fa] to-[#7fa4fa] font-schibsted">
                <TypingText
                  text="We're a Movement"
                  delay={2.2}  // Slightly longer delay for natural pause
                  duration={1.2}
                  cursorBlink={false}  // Remove blinking after last line
                />
              </span>
            </motion.div>
            <motion.div
              id="Hero subtitle"
              className="font-[Body/3/fontFamily] font-normal text-lg md:text-xl leading-relaxed tracking-[Heading/H3/letterSpacing] text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)] font-outfit">
                Founded by students, led with purpose. At FCC IIT Hyderabad, we're cultivating the next generation of financial leaders and consultants - through collaboration, action, and real-world impact.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* About/Vision/Mission Section */}
      <motion.div
        className="w-full max-w-[1006px] mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div
            className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4 hover:border-[#A3ACD9] transition-all duration-100 hover:shadow-lg hover:shadow-[#4E56D3]/20"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-outfit font-semibold text-2xl py-8 text-white">
              About Us
            </h3>
            <p className="text-[#BBBBBB] font-outfit">
              Founded by students, led with purpose. At FCC IIT Hyderabad, we're cultivating the next generation of financial leaders and consultants — through collaboration, action, and real-world impact.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4 hover:border-[#A3ACD9] transition-all duration-100 hover:shadow-lg hover:shadow-[#4E56D3]/20"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-lg">
              <img
                src={Vision}
                alt="Vision Illustration"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <h3 className="font-outfit font-semibold text-2xl text-white">
              Vision
            </h3>
            <p className="text-[#BBBBBB] font-outfit">
              Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.
            </p>
          </motion.div>

          {/* Mission Section*/}
          <motion.div
            className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4 hover:border-[#A3ACD9] transition-all duration-100 hover:shadow-lg hover:shadow-[#A3ACD9]/20"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-lg">
              <img
                src={Mission}
                alt="Mission Illustration"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <h3 className="font-outfit font-semibold text-2xl text-white">
              Mission
            </h3>
            <p className="text-[#BBBBBB] font-outfit">
              Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Timeline & Team Section */}
      <motion.div
        className="min-h-screen w-full bg-[#0a0a0d] flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
      >
        {/* Timeline */}
        <Timeline data={timelineData} />

        {/* Team Header */}
        <motion.div
          className="text-center mb-12 px-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#7fa4fa] mb-4 font-schibsted">
            Meet Our Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-outfit">
            A dedicated group of professionals driving innovation and excellence.
            Meet the talented individuals who make it all possible.
          </p>
        </motion.div>

        {/* Tab Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 bg-[#23232a] rounded-xl p-1 inline-flex self-center font-outfit mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {teamsData.map((team, idx) => (
            <motion.button
              key={team.teamName}
              onClick={() => setSelectedTeam(idx)}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300
                ${selectedTeam === idx
                  ? "bg-gradient-to-r from-[#4E56D3] to-[#3B82F6] text-white shadow-lg"
                  : "text-gray-300 hover:bg-white/10"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {team.teamName}
            </motion.button>
          ))}
        </motion.div>

        {/* ChromaGrid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTeam}
            style={{ flex: "1 0 auto", fontFamily: "outfit" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChromaGrid
              items={items}
              radius={320}
              damping={0.4}
              fadeOut={0.5}
              columns={3}
              rows={2}
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >


          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              ease: "backOut",
              delay: 0.2
            }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            <Collaborate />
          </motion.div>


        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
