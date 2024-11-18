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
      <hr className="mb-10 w-full opacity-10 mx-auto " />
        
      {/* Upcoming Events Carousel */}
      <HomeCarousel />

      {/* What we do section */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HomeAbout />

      {/* Newsletter subscriptions  */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HomeNewsletter />
      <hr className="mb-10 w-full opacity-10 mx-auto " />

      {/* Insta embed */}
      <HomeInsta />

    </div>
  );
}

export default Home;
