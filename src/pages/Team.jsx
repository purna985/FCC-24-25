import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { teamsData } from '../assets/data/team/teamData'
import TeamMemberCard from '../components/team/TeamMemberCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/ui/carousel'

function Team() {


    return (
        <div className="overflow-x-hidden">
            {/* Team Components */}
            {teamsData.map((teamData, index) => {
                return (
                    <div key={index} className='flex flex-col'>
                        <h1 className='text-4xl mt-10 mb-3 text-center'>{teamData.teamName} Team</h1>
                        <Carousel className="dark" >
                            <CarouselContent className="mx-auto  my-5 p-3" >
                                {/* Team Heads map */}
                                {teamData.teamHead.map((data, index) => (
                                    <CarouselItem key={index} className="basis-1/5 mx-auto" >
                                        <TeamMemberCard
                                            name={data.name}
                                            designation={`${teamData.teamName} Head`}
                                            linkedin=""
                                            image={data.image}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <Carousel>
                            <CarouselContent className='mx-auto my-5 p-3'>
                                <div className='flex'>
                                    {/* Team Coords map */}
                                    {teamData.teamMembers.map((data, index) => (
                                        <CarouselItem key={index} className="basis-1/2 md:basis-1/6" >
                                            <TeamMemberCard
                                                name={data.name}
                                                designation={`${teamData.teamName} Coordinator`}
                                                linkedin=""
                                                image={data.image}
                                            />
                                        </CarouselItem>
                                    ))}
                                </div>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext className="light bg-white" />
                        </Carousel>
                    </div>
                )
            })}
        </div>
    );
}

export default Team;
