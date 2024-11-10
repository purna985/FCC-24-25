// import PropTypes from "prop-types";
// import "react-multi-carousel/lib/styles.css";
// import { FaInstagram, FaLinkedin } from 'react-icons/fa';


import { teamsData } from '@/assets/data/team/teamData';
import TeamMemberCard from '../components/team/TeamMemberCard';
import TeamCoordCard from "../components/team/TeamCoordCard";
import TeamHeadCard from "../components/team/TeamHeadCard";

import ComingSoon from '../components/ComingSoon'
import TeamCarousel from '../components/team/TeamCarousel';

function Team() {
    return (
        <div className="overflow-x-hidden min-h-screen my-10">
            {/* Team Components */}
            {/* <ComingSoon /> */}

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

