import HomeAboutGrid from "../event-cards/HomeAboutGrid";

const HomeAbout = () => {
  return (
    <div className="relative w-full h-auto py-10 md:pt-0 md:pb-10  px-4  flex items-center justify-center flex-col  z-20"
    >
   <div className="w-4/5 " >
     <h1 className='text-3xl md:text-6xl mb-5 md:my-10 md:w-[80%] w-full text-center mx-auto'>What Do We Do ?</h1>
     <div>
       <p className="w-full md:text-xl text-center p-2" >The Finance and Consulting Club at IIT Hyderabad is a student-led
         organization fostering finance and consulting interests. At FCC
         IITH, students are driven by their passion for finance, consulting,
         product management and continual progress.</p>
       <p className="w-full md:text-xl text-center p-2" >Our dedicated team is geared toward achieving the mission of
         equipping students with useful skills and real-world knowledge in
         the finance, consulting, and product management domains.</p>
     </div>
   </div>
   <div className='w-[200px] h-[200px] blur-[250px] bg-blue-700 absolute top-0 right-0 ' ></div>
   <div className='w-[200px] h-[200px] blur-[250px] bg-blue-700 absolute bottom-0 left-0 ' ></div>
    <HomeAboutGrid className=' bg-blue-500' />
    </div>
    )
    }

export default HomeAbout