import { teamsData } from '@/assets/data/team/teamData';
import TeamCarousel from '../components/team/TeamCarousel';

function Team() {
    return (
        <div className="overflow-x-hidden min-h-screen my-10">
            {
                teamsData.map((teamData,key) => {
                    return (
                        <TeamCarousel key={key} teamname={teamData.teamName} heads={teamData.teamHead} coords={teamData.teamMembers}  />
                    )
                })

            }
        </div>
    );
}

export default Team;

