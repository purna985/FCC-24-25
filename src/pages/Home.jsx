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
        
      {/* Upcoming Events Carousel */}
      <hr className="mb-10 w-full opacity-10 mx-auto " />
      <HomeAbout />

      {/* What we do section */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HomeCarousel />

      {/* Newsletter subscriptions  */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HomeNewsletter />

      {/* Insta embed */}
      <hr className="mb-10 w-full opacity-10 mx-auto " />
      <HomeInsta />

    </div>
  );
}

export default Home;

