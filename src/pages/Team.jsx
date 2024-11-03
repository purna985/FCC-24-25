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
