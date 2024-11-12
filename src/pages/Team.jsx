import { teamsData } from '@/assets/data/team/teamData';
import TeamCarousel from '../components/team/TeamCarousel';

function Team() {
    return (
        <div className="overflow-x-hidden min-h-screen my-10">
            <h1 className='text-3xl md:text-5xl py-10 mt-12 text-center w-[90%] md:w-full' ><span className='text-blue-500' >FCC</span> 2024-25</h1>
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

