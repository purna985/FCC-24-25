import { useState, useEffect } from "react";
import { teamsData } from "@/assets/data/team/teamData";
import ChromaGrid from "../components/team/ChromaGrid";
import Collaborate from "../components/Collaborate"
import { Timeline } from "../components/home/TimeLine/Timeline";

function Team() {
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

  const timelineData = [
    {
      title: "2021 Club Formation",
      content: <p>FCC was established at IIT Hyderabad with 20 founding members.</p>,
    },
    {
      title: "2022 First Event",
      content: <p>We hosted our first finance workshop with 100+ attendees.</p>,
    },
    {
      title: "2023 Second Event",
      content: <p>We hosted our second finance workshop with 200+ attendees.</p>,
    },
    {
      title: "2023 Expansion",
      content: <p>FCC expanded with new chapters across multiple colleges.</p>,
    },
    {
      title: "2024 Third Event",
      content: <p>We hosted our third finance workshop with 400+ attendees.</p>,
    },
  ];

  return (
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
  );
}

export default Team;
