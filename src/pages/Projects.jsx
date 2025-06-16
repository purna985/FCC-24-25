import ProjectCard from "../components/ProjectCard"
import Particles from "../components/ParticleBackground"
import Collaborate from "../components/Collaborate"
import m_and_a from "../assets/images/projects/m_and_a.png"
import Arima from "../assets/images/projects/Arima.png"


import {AnimatedToolTip} from "../components/AnimatedToolTip"


function Projects(){
  let topics1=['Python','Machine Learning','Finance'];
  let topics2=["Finance","Python","Excel"]

  return(
    <div className="w-full min-h-screen mx-auto max-w-screen-2xl flex flex-col gap-2.5"> 

      {/* Hero Section */}
      {/* This div also uses `w-full` for full width. */}
      {/* Padding is now responsive: `px-4` for small screens, increasing to `lg:px-24` for larger screens. */}
      {/* `py-16` provides vertical padding, adjusting on larger screens. */}
      {/* `flex flex-col items-center justify-center` can be used to center content within this section. */}
      <div
        id="Hero Section"
        className="w-full h-[530px] relative
                   py-16 md:py-24 lg:py-32
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24
                   flex flex-col items-center justify-center
                   gap-12 rounded-lg shadow-md"
      >
      <div id="Hero Background Container" className="w-[1557px] h-[530px] absolute inset-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          />
          </div>
      
        <div id="Hero Container" class="w-full max-w-[1006px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
          <div id="Hero text container" class="w-full text-center gap-4">
            <div id="Hero title" class="font-Family-primary font-semibold text-5xl md:text-6xl leading-tight tracking-normal">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]">
                Real World Projects
              </span>
            </div>
            <div id="Hero subtitle" class="font-Body-3-fontFamily font-normal text-lg md:text-xl leading-relaxed tracking-Heading-H3-letterSpacing text-center mt-4">
              <span class="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)]">Consulting and finance projects led by FCC members. Real Impact.</span>
            </div>
          </div>
        </div>
    </div>

<div
  id="desktop-3"
  class="w-full min-h-screen py-10 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center justify-start gap-8 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-12"
>
  <div
    id="project header container"
    class="w-full max-w-screen-lg flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8"
  >
    <div
      id="Section title"
      class="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
    >
      <span
        class="bg-gradient-to-r from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent"
        >Our Projects</span
      >
    </div>
    <div
      id="Section subtitle"
      class="mt-4 text-center font-normal text-base sm:text-lg md:text-xl leading-relaxed"
    >
      <span class="text-[var(--Website-Neutral-3,#BBBBBB)] bg-clip-text text-transparent"
        >Student-led initiatives solving real-world problems in finance and
        consulting.</span
      >
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
    
    <div>
      <Collaborate></Collaborate>
    </div>
  </div>
  )
}

export default Projects