import HomeAboutGrid from "../event-cards/HomeAboutGrid";
import arrow from '@/assets/home/Vector.svg'
const HomeAbout = () => {
  return (
    <div className="relative w-full h-auto pb-10 md:pt-0 md:pb-10  md:px-4  flex items-center justify-center flex-col z-10"
    >
   <div className=" md:w-4/5 z-20 " >
     <h1 className='text-3xl md:text-6xl mb-5 md:my-10 md:w-[80%] w-full text-center mx-auto'>About Us</h1>
     <div className="mx-auto" >
       <p className="w-4/5 md:text-xl mx-auto md-1:text-center text-start p-2" >At the Finance and Consulting Club (FCC) of IIT Hyderabad, we’re all about bringing finance, consulting, and product management to life. Our student-led community is driven by curiosity and a passion for learning.</p>
       <p className="w-4/5 md:text-xl mx-auto md-1:text-center text-start p-2" >We’re here to help each other out, learn together, and make the path to careers in finance and consulting a little clearer (and a lot more fun). So, if you’re curious about the world of finance or want to explore what consulting and product management really mean, you’re in the right place.</p>
     </div>
   </div>
   <div className='w-[200px] h-[200px] blur-[250px] bg-blue-700 absolute top-0 right-0 ' ></div>
   <div className='w-[200px] h-[200px] blur-[250px] bg-blue-700 absolute bottom-0 left-0 ' ></div>
    <HomeAboutGrid className=' bg-blue-500' />
    <div className="absolute top-0 right-0 z-0  w-2/3"><img src={arrow} alt="" /></div>
    </div>
    )
    }

export default HomeAbout