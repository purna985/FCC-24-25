// Components imports
import HomeNewsletter from "../components/home/HomeNewsletter";
import HomeCarousel from "../components/event-cards/HomeCarousel";
import HomeInsta from "../components/home/HomeInsta";
import HomeAbout from "../components/home/HomeAbout";
import HomeLanding from "../components/home/HomeLanding";

function Home() {
  return (
    <div className=" relative">

      {/* Landing Title and Horizon Card Section */}
      <HomeLanding />
      <hr className="mt-10 w-[90%] opacity-50 mx-auto" />

      {/* What we do section */}
      <HomeAbout />
      <hr className="mt-10 w-[90%] opacity-50 mx-auto" />
        
      {/* Upcoming Events Carousel */}
      <HomeCarousel />

      {/* Newsletter subscriptions  */}
      <hr className="mt-10 w-[90%] opacity-50 mx-auto" />
      <HomeNewsletter />
      <hr className="mb-10 w-[90%] opacity-50 mx-auto" />

      {/* Insta embed */}
      <HomeInsta />
      
      

    </div>
  );
}

export default Home;
