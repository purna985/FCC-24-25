import HomeAboutGrid from "../event-cards/HomeAboutGrid";

const HomeAbout = () => {
  return (
    <div className="relative w-full h-auto py-10 md:pt-0 md:pb-10  px-4  flex items-center justify-center flex-col  z-20"
    >
   <div className="w-4/5 " >
     <h1 className='text-3xl md:text-6xl mb-5 md:my-10 md:w-[80%] w-full text-center mx-auto'>What Do We Do ?</h1>
     <div>
       <p className="w-full md:text-xl text-center p-2" >At the Finance and Consulting Club (FCC) of IIT Hyderabad, we’re all about bringing finance, consulting, and product management to life. Our student-led community is driven by curiosity and a passion for learning.</p>
       <p className="w-full md:text-xl text-center p-2" >We’re here to help each other out, learn together, and make the path to careers in finance and consulting a little clearer (and a lot more fun). So, if you’re curious about the world of finance or want to explore what consulting and product management really mean, you’re in the right place.</p>
     </div>
   </div>
   <div className='w-[200px] h-[200px] blur-[250px] bg-blue-700 absolute top-0 right-0 ' ></div>
   <div className='w-[200px] h-[200px] blur-[250px] bg-blue-700 absolute bottom-0 left-0 ' ></div>
    <HomeAboutGrid className=' bg-blue-500' />
    </div>
    )
    }

export default HomeAbout