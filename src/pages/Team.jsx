import { useState } from "react";
import { teamsData } from "@/assets/data/team/teamData";
import RollingGallery from "../components/team/RollingGallery";

function Team() {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  const selectedTeam = teamsData[selectedTeamIndex];
  const images = [
    ...selectedTeam.teamHead.map((m) => m.image),
    ...selectedTeam.teamMembers.map((m) => m.image),
  ];

  return (
    <div className="overflow-x-hidden min-h-screen mb-10">
      <h1 className="text-3xl md:text-5xl py-10 text-center w-[90%] md:w-full">
        <span className="text-blue-500">FCC</span> 2024-25
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {teamsData.map((team, idx) => (
          <button
            key={team.teamName}
            onClick={() => setSelectedTeamIndex(idx)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200
              ${
                selectedTeamIndex === idx
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }
            `}
          >
            {team.teamName}
          </button>
        ))}
      </div>

      <RollingGallery images={images} autoplay={true} pauseOnHover={false} />

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {[...selectedTeam.teamHead, ...selectedTeam.teamMembers].map(
          (member, i) => (
            <div key={i} className="text-center w-40">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-blue-400"
              />
              <div className="font-semibold">{member.name}</div>
              <div className="text-xs text-gray-500">{member.por}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Team;
