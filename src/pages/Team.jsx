import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { teamsData } from '../assets/data/team/teamData';
import TeamMemberCard from '../components/team/TeamMemberCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/ui/carousel';
import ComingSoon from '../components/ComingSoon'

function Team() {
    return (
        <div className="overflow-x-hidden min-h-screen">
            {/* Team Components */}
            <ComingSoon />
        </div>
    );
}

export default Team;

// {teamsData.map((teamData, index) => {
//     return (
//         <div key={index} className="flex flex-col">
//             <h1 className="text-4xl mt-10 mb-3 text-center">
//                 {teamData.teamName} Team
//             </h1>

//             {/* Carousel for Team Heads */}
//             <Carousel className="dark">
//                 <CarouselContent className="flex mx-auto my-5 p-3 space-x-4 ">
//                     {teamData.teamHead.map((data, headIndex) => (
//                         <CarouselItem key={headIndex} className={`flex-shrink-0 basis-1/${teamData.teamHead.length} w-1/5 mx-auto`}>
//                             <TeamMemberCard
//                                 name={data.name}
//                                 designation={`${teamData.teamName} Head`}
//                                 linkedin=""
//                                 image={data.image}
//                             />
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious className="text-white" />
//                 <CarouselNext className="text-white" />
//             </Carousel>

//             {/* Carousel for Team Members */}
//             <Carousel className="dark">
//                 <CarouselContent className="flex mx-auto my-5 p-3 space-x-4">
//                     {teamData.teamMembers.map((data, memberIndex) => (
//                         <CarouselItem key={memberIndex} className={`flex-shrink-0 basis-1/3 md:basis-1/5 w-1/2 md:w-1/6 `}>
//                             <TeamMemberCard
//                                 name={data.name}
//                                 designation={`${teamData.teamName} Coordinator`}
//                                 linkedin=""
//                                 image={data.image}
//                             />
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious className="text-white" />
//                 <CarouselNext className="text-white" />
//             </Carousel>
//         </div>
//     );
// })}
