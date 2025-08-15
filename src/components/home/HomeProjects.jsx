import { useEffect } from "react";
import ProjectCard from "../ProjectCard.jsx";
import {AnimatedToolTip} from "../AnimatedToolTip.jsx"
import { Minimize } from "lucide-react"
import Arima from "../../assets/images/projects/Arima.png"
import m_and_a from "../../assets/images/projects/m_and_a.png"

let topics1=['Python','Machine Learning','Finance'];
let topics2=["Finance","Python","Excel"]

const HomeProjects = () => {

  return (
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5"> 
    <div
        id="project header container"
        class="w-full max-w-screen-lg flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 mx-auto"
        >
        <div
          id="Section title"
          class="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
          <span
            class="bg-gradient-to-r font-schibsted text-[#EBEBEB] text-5xl from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent"
            >Featured Projects</span>
        </div>
        <div
          id="Section subtitle"
          class="mt-4 text-center font-schibsted text-[#EBEBEB] text-base sm:text-lg md:text-2xl leading-relaxed"
          >
          <span class="text-[var(--Website-Neutral-3,#BBBBBB)] font-schibsted text-[#EBEBEB] bg-clip-text "
            >Student-led initiatives solving real-world problems in finance and
            consulting.</span>
        </div>
      </div>
        <ProjectCard Title="Forecast-Driven Trading" Desc="A data-driven trading strategy leveraging ARIMA and Prophet to forecast stock prices and enhance investment decisions through statistical analysis."
        Topics={topics1} Image={Arima} imageOnLeft={false} people={[{
          id: 1,
          name: "Sreeteja",
          designation: "Student",
          image: "https://placehold.co/32x32/3498db/ffffff?text=ST",
          linkedIn:"https://www.linkedin.com/in/guddeti-sreeteja"
          },]}/>
        <ProjectCard Title="M&A Case Study" Desc="An analytical study of M&A deals in India, assessing value creation for acquirers and targets through valuation, financial, and event analysis."
     Topics={topics2} Image={m_and_a} imageOnLeft={true} people={[{
       id: 1,
       name: "Tejas Mundada",
       designation: "Student",
       image: "https://placehold.co/32x32/3498db/ffffff?text=TM",
       linkedIn:"https://www.linkedin.com/in/tejas-mundada-86329536b"
      },]}/>
      
</div>

  )
}

export default HomeProjects