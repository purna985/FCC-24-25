import Particles from "../components/ParticleBackground"
import Collaborate from "../components/Collaborate"
import Vision from "../assets/images/aboutus/Vision.png"
import Mission from "../assets/images/aboutus/Mission.png"

import { useState, useEffect } from "react";
import { teamsData } from "@/assets/data/team/teamData";
import ChromaGrid from "../components/team/ChromaGrid";
import { Timeline } from "../components/TimeLine/Timeline";
import timelineData from "../assets/data/timelineData/timelineData";

function AboutUs() {

  const [selectedTeam, setSelectedTeam] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
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

  return (
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5">
      <div
        id="Hero Section"
        className="w-full h-[530px] relative
                   py-16 md:py-24 lg:py-32
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24
                   flex flex-col items-center justify-center
                   gap-12 rounded-lg shadow-md"
      >
        <div id="Hero Background Container" className="w-[1557px] h-[530px] absolute inset-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* We are .... */}

        <div id="Hero Container" class="w-full max-w-[1006px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
          <div id="Hero text container" class="w-full text-center gap-4">
            <div id="Hero title" class="font-Family-primary font-semibold text-5xl md:text-6xl leading-tight tracking-normal">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]" >
                We're More Than a Club
              </span>
              <span class="text-transparent block bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]">
                We're a Movement
              </span>
            </div>
            <div id="Hero subtitle" class="font-[Body/3/fontFamily] font-normal text-lg md:text-xl leading-relaxed tracking-[Heading/H3/letterSpacing] text-center mt-4">
              <span class="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)]">Founded by students, led with purpose. At FCC IIT Hyderabad, we're cultivating the next generation of financial leaders and consultants - through collaboration, action, and real-world impact.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1006px] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* About Section */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <h3 className="font-sans font-semibold text-2xl text-white">
              About Us
            </h3>
            <p className="text-[#BBBBBB]">
              Founded by students, led with purpose. At FCC IIT Hyderabad, we're cultivating the next generation of financial leaders and consultants — through collaboration, action, and real-world impact.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4">
            <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-lg">
              <img
                src={Vision}
                alt="Vision Illustration"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <h3 className="font-sans font-semibold text-2xl text-white">
              Vision
            </h3>
            <p className="text-[#BBBBBB]">
              Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.
            </p>
          </div>

          {/* Mission Section*/}
          <div className="flex flex-col items-center gap-4 md:w-1/3 text-center rounded-[10px] border border-[#5a5a5a] bg-[#1b1a1a] p-4">
            <div className="relative h-24 w-24 mb-4 overflow-hidden rounded-lg">
              <img
                src={Mission}
                alt="Mission Illustration"
                className="absolute h-full w-full object-cover"
              />
            </div>
            <h3 className="font-sans font-semibold text-2xl text-white">
              Mission
            </h3>
            <p className="text-[#BBBBBB]">
              Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.
            </p>
          </div>

        </div>
      </div>

      {/*  */}

      <div className="min-h-screen w-full bg-[#0a0a0d] flex flex-col">
      {/* Timeline */}
      <Timeline data={timelineData} />

      {/* Team Header */}
      <div className="text-center mb-12 px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7fa4fa] mb-4">
          Meet Our Team
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A dedicated group of professionals driving innovation and excellence.
          Meet the talented individuals who make it all possible.
        </p>
      </div>

      {/* Tab Bar */}
      <div className="flex flex-wrap justify-center gap-2 bg-[#23232a] rounded-xl p-1 inline-flex self-center">
        {teamsData.map((team, idx) => (
          <button
            key={team.teamName}
            onClick={() => setSelectedTeam(idx)}
            className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
              ${selectedTeam === idx
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-300 hover:bg-white/10"
              }`}
          >
            {team.teamName}
          </button>
        ))}
      </div>

      {/* ChromaGrid */}
      <div style={{ flex: "1 0 auto" }}>
        <ChromaGrid
          items={items}
          radius={320}
          damping={0.4}
          fadeOut={0.5}
          columns={3}
          rows={2}
        />
      </div>

      <div>
        <Collaborate></Collaborate>
      </div>
    </div>
    </div>
  );
}

export default AboutUs
