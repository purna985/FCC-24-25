import { useState } from "react";
import { teamsData } from '@/assets/data/team/teamData';
import ChromaGrid from '../components/team/ChromaGrid';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState(0);

  // Prepare ChromaGrid items for selected team
  const currentTeam = teamsData[selectedTeam];
  const items = [
    ...currentTeam.teamHead,
    ...currentTeam.teamMembers
  ].map(member => ({
    image: member.image,
    title: member.name,
    subtitle: member.por,
    handle: member.handle,
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: member.linkedin || ""
  }));

  return (
    <div
      className="min-h-screen w-full bg-[#0a0a0d] flex flex-col"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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
      <div className="w-full flex justify-center py-8">
        <div className="flex gap-2 bg-[#23232a] rounded-xl p-1">
          {teamsData.map((team, idx) => (
            <button
              key={team.teamName}
              onClick={() => setSelectedTeam(idx)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedTeam === idx 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-gray-300 hover:bg-white/10"}`}
            >
              {team.teamName}
            </button>
          ))}
        </div>
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
      
    </div>
  );
}

export default Team;
