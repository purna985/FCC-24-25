// Components imports
import HomeArticles from "../components/home/HomeArticles"
import HomeLanding from "../components/home/HomeLanding";
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
      <HomeArticles />

    </div>
  );
}

export default Home;

