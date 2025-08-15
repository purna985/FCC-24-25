import { Link } from "react-router-dom";
import ChallengeCard from "./ChallengeCard";

function ProjectDetails(props) {
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-[62px] py-6 sm:py-10 md:py-[80px] md:gap-[62px] px-4 sm:px-8 md:px-[124px]">
      {/* Breadcrumb */}
      <div id="breadcrumb" className="h-[26px] w-full flex items-center gap-3 sm:gap-[12px]">
        <Link to={'/projects'} className="cursor-pointer">
          <span className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#A2A2A2] cursor-pointer">Projects</span>
        </Link>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L7 7L1 1" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


        <p className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#EBEBEB]">{props.title}</p>
      </div>

      {/* Title */}
      <p id="title" className="w-full sm:w-3/4 font-Family-primary font-semibold text-3xl sm:text-5xl md:text-[60px] leading-tight sm:leading-[66px] text-[#EBEBEB]">
        {props.title}
      </p>

      {/* Project Info */}
      <div id="project info" className="bg-[#1B1A1A] border-[#414141] w-full rounded-[10px] p-4 sm:p-[20px] flex flex-col md:flex-row gap-6 md:gap-[10%]">
        {/* Project Type */}
        <div id="project type container" className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-[26px]">
          <p className="w-full font-Heading-H3-fontFamily text-base sm:text-Heading-H4-fontSize font-Weights-Medium">Project Type</p>
          <div id="Topics" className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-2">
            {props.topics.map((item, index) => (
              <div key={index} className="rounded-[10px] border border-[#4E56D3] bg-[#121649] px-2 sm:px-3 py-1.5 flex justify-center items-center">
                <p className="font-schibsted text-[#EBEBEB] font-Weights-Medium text-xs sm:text-sm leading-normal tracking-normal whitespace-nowrap">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Timeline */}
        <div id="timeline container" className="w-full md:w-1/3 flex flex-col justify-around gap-4 sm:gap-[26px] mt-4 md:mt-0">
          <p className="w-full font-Heading-H3-fontFamily text-base sm:text-Heading-H4-fontSize font-Weights-Medium text-[#A2A2A2]">Timeline</p>
          <p className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#EBEBEB]">{props.startDate + " - " + props.endDate}</p>
        </div>
        {/* Team */}
        <div id="team container" className="w-full md:w-1/3 flex flex-col justify-around gap-4 sm:gap-[26px] mt-4 md:mt-0">
          <p className="w-full font-Heading-H3-fontFamily text-base sm:text-Heading-H4-fontSize font-Weights-Medium text-[#A2A2A2]">Team</p>
          <div id="team value container" className="w-full flex flex-wrap gap-2 sm:gap-[14px]">
            {props.team.map((member, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-[8px]">
                <p className="font-Body-3-fontFamily font-Weights-Regular text-sm sm:text-Body-2-fontSize text-[#EBEBEB]">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div id="project overviw" className="flex flex-col gap-4 sm:gap-[32px]">
        <p className="text-[#EBEBEB] font-Family-primary text-xl sm:text-Title-Title-3-fontSize font-Weights-Bold">Overview</p>
        <p className="font-Family-secondary text-base sm:text-[20px] leading-relaxed sm:leading-[32px] font-light">{props.overview}</p>
      </div>
      {/* Responsive Image */}
      <img src={props.image} alt="overview image" className="w-full max-w-full h-auto rounded-lg" />

      {/* Key Challenges */}
      <div id="key challenges container" className="flex flex-col gap-4 sm:gap-[32px]">
        <div className="h-full flex flex-col gap-2 sm:gap-[32px]">
          <p className="text-[#EBEBEB] font-Family-primary text-xl sm:text-Title-Title-3-fontSize font-Weights-Bold">Key Challenges</p>
          <p className="font-Family-secondary text-base sm:text-[20px] leading-relaxed sm:leading-[32px] font-light">
            These were some of the key challenges we identified during the discovery phase of the project
          </p>
        </div>
        <div className="w-full border border-[#111111] flex flex-col md:flex-row gap-4 md:gap-[62px] overflow-x-auto">
          {props.challenges.map((challenge, index) => (
            <ChallengeCard key={index} title={challenge.title} desc={challenge.desc} />
          ))}
        </div>
      </div>

      {/* Impact */}
      <div id="impact container" className="flex flex-col gap-4 sm:gap-[32px]">
        <p className="text-[#EBEBEB] font-Family-primary font-Weights-Bold text-xl sm:text-Title-Title-3-fontSize">Impact</p>
        <p className="font-Family-secondary text-base sm:text-[20px] leading-relaxed sm:leading-[32px] font-light">{props.impact}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;