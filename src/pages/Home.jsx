// Components imports
import HomeNewsletter from "../components/home/HomeNewsletter";
import HomeInsta from "../components/home/HomeInsta";
import HomeAbout from "../components/home/HomeCarousel";
import HomeLanding from "../components/home/HomeLanding";
import HorizonCard from "../components/HorizonCard";
import HomeProjects from "../components/home/HomeProjects";
import HomeCarousel from "../components/home/HomeCarousel"

function Home() {
  return (
    <div className=" relative">

      {/* Landing Title and Horizon Card Section */}
      <HomeLanding />
      {/* Upcoming Events Carousel */}

      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HomeCarousel />

      {/* Newsletter subscriptions  */}
      <hr className="mt-10 w-full opacity-10 mx-auto " />
      <HomeProjects />

      {/* Insta embed */}
      <hr className="mb-10 w-full opacity-10 mx-auto " />
      <HomeInsta />

    </div>
  );
}

export default Home;

