import ProjectCard from "../components/ProjectCard"
import Particles from "../components/ParticleBackground"
import img1 from "../assets/images/projects/4f9bbc943449768f1d1a3a2b35bacbc73cd1bf16 (1).png"

function Projects(){
  let topics1=['Python','Machine Learning','Finance'];

  return(
    <div className=" w-[1440px] h-[4003px] gap-[10px]">
    <div id="Hero Section" className="w-[1440px] h-[530px] py-[88px] px-[124px] gap-[52px] relative">
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
      
        <div id="Hero Container" className="w-[1006px] h-[130px] gap-[52px]">
          <div id="Hero text container" className="w-[981px] h-[130px] gap-[32px]">
            <div id="Hero title" className="font-Family-primary font-semibold text-[60px] leading-[66px] tracking-normal text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]">
                Real World Projects
              </span>
            </div>
            <div id="Hero subtitle" className=" font-[Body/3/fontFamily] font-normal text-Heading-H3-fontSize] 
                             leading-8 tracking-[Heading/H3/letterSpacing] text-center ">
              <span className="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)]">Consulting and finance projects led by FCC members. Real Impact.</span>
            </div>
          </div>
      </div>
    </div>

    <div id="desktop-3" className="w-[1440px] h-[2320px] py-[80px] gap-[62px] flex flex-col">
      <div id="project header container" className="w-[704px] h-[100px] gap-[20px] flex flex-col items-center mx-[300px]">
        <div id="Section title" className="w-[704px] h-[48px] font-[Title/Title-2/fontFamily] font-bold text-Title-Title-2-fontSize 
                                text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E56D3_25.48%] via-[#A3ACD9_60.58%] to-[#F3FFD8_100%]">Our Projects</span>
        </div>
        <div id="Section subtitle" className="w-[704px] h-[32px] font-secondary font-normal text-xl leading-8 tracking-normal text-center">
          <span className="text-transparent bg-clip-text bg-[var(--Website-Neutral-3,#BBBBBB)]">Student-led initiatives solving real-world problems in finance and consulting.</span>
        </div>
      </div>
    <ProjectCard Title="Portfolio Optimizer" Desc="An AI-powered portfolio optimization tool that helps students and professionals make data-driven investment decisions."
     Topics={topics1} Image={img1} imageOnLeft={true}/>
    <ProjectCard Title="Expense Tracker App" Desc="An AI-powered portfolio optimization tool that helps students and professionals make data-driven investment decisions."
     Topics={topics1} Image={img1} imageOnLeft={false}/>
    <ProjectCard Title="Market Prediction Model" Desc="An AI-powered portfolio optimization tool that helps students and professionals make data-driven investment decisions."
     Topics={topics1} Image={img1} imageOnLeft={true}/>
    <ProjectCard Title="Expense Tracker App" Desc="An AI-powered portfolio optimization tool that helps students and professionals make data-driven investment decisions."
     Topics={topics1} Image={img1} imageOnLeft={false}/>
    <ProjectCard Title="Market Prediction Model" Desc="An AI-powered portfolio optimization tool that helps students and professionals make data-driven investment decisions."
     Topics={topics1} Image={img1} imageOnLeft={true}/>
    </div>
    {/* Here we have to add project cards. its there in componenets/ProjectCard.jsx (yet to build) */}
    
    </div>
  )
}

export default Projects