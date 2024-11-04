// Module imports
import { Link } from "react-router-dom";

// Assets imports
import rupeeBlur from "/src/assets/home/rupeeblur.svg";
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";
import aboutSVG from "/src/assets/home/Vector.svg";
import financeSVG from "/src/assets/home/finance.svg";
import consultingSVG from "/src/assets/home/consulting.svg";
import prodmanSVG from "/src/assets/home/prodman.svg";

// Components imports
import Newsletter from "../components/Newsletter";
import HorizonCard from "../components/HorizonCard";
import HomeCarousel from "../components/event-cards/HomeCarousel";

function Home() {
  return (
    <div className="overflow-hidden ">

      <div className="flex h-auto mb-[10%] md:flex-row flex-col w-full justify-start items-center md:py-[5%]">
        {/* Bg elements */}
        <div className="absolute left-0 top-[20vh] w-[200px] h-[200px] blur-[250px] bg-[#1270ED] "></div>
        <img
          className="md-1:hidden md:absolute top-[10vh] md:top-[30vh] md:left-[50vw] rotate-[60deg] "
          src={rupeeBlur}
          alt=""
          height="50"
          width="50"
          title="svg"
        />
        <img
          className="md-1:hidden md:absolute md:top-[80vh] md:right-[10vw] "
          src={rupeeBlur}
          alt=""
          height="50"
          width="50"
          title="svg"
        />
        <img
          className="md-1:hidden md:absolute md:top-[20vh] md:left-[20vw] "
          src={rupeeBlur}
          alt=""
          height="50"
          width="50"
          title="svg"
        />
        <img
          className="md-1:hidden md:absolute md:top-[80vh] md:right-[10vw] "
          src={rupeeBlur}
          alt=""
          height="50"
          width="50"
          title="svg"
        />

        {/* Landing titles */}
        <div className="md-1:w-auto lg:w-1/2 w-full flex flex-col text-center r justify-evenly">
          <div className="titles  w-[80%] mx-auto">
            <p className="text-[#1270ed] md:text-6xl text-5xl leading-100p md:text-start text-center  mb-5">
              Finance & Consulting Club
            </p>
            <p className="font-light text-xl md:text-[2.5rem] leading-normal  text-center md:text-start">
              IIT Hyderabad
            </p>
          </div>
          <div className="md:w-4/5 mx-auto" >
            <Link
              to="/horizon"
              className="shadow-[0_0_12px_rgba(69,115,213,0.6)] hover:shadow-[0_0_25px_rgba(69,115,213,0.6)] w-fit md:w-1/2 my-10 text-lg  md:text-4xl text-white bg-[#1228ed] rounded-md flex justify-center items-center p-2 md:px-5 "
            >
              Horizon 25&apos;{" "}
              <img src={rightArrow} className="h-10 w-10 md:w-20 md:h-20" alt="" />
            </Link>
          </div>

        </div>

        {/* Horizon Timer Card */}
        <HorizonCard />

      </div>

      {/* Our Mission */}
      {/* <div className="w-full h-auto mt-5 mx-auto hidden md:flex flex-col py-[3%]">
        <div className="w-full absolute right-0 ">
          <img
            className="arrowsvg"
            src={aboutSVG}
            alt=""
            height="60%"
            width="100%"
          />
        </div>
        <p className=" text-left text-white font-rosario text-xl md:text-[3vw] leading-normal pl-[5%] my-3 font-medium">
          Our mission :
        </p>
        <div className="w-auto h-auto  text-[7vw] leading-[80%] pl-[5%]">
          <p className="font-lato q1 my-9">TO PROVE</p>
          <p className="font-lato q2 my-9">
            THAT <br />
          </p>
          <p className="font-lato q3 my-9">
            ENGINEERS <br />
          </p>
          <p className="font-lato q4 my-9">CAN DO</p>
          <p className="font-lato q5 my-9" style={{ color: "#1507E8" }}>
            NUMBERS
          </p>
        </div>
      </div> */}

      {/* Who are we/ About us section */}
      {/* <div
        className="relative w-full h-auto py-10  px-4 md:p-[1%] flex items-center justify-center flex-col overflow-hidden"
        style={{ background: "linear-gradient(#0f4693e5, #0f489399)" }}
      >
        <h1 className=" text-3xl md:text-6xl mb-4 md:mb-0 md:mt-10 md:w-[80%]" >So, <br className="hidden md:visible" /> Who Are We ?</h1>
        <div className="w-[80%] md:text-4xl md:my-10" >
          <p className="w-full text-start p-2" >The Finance and Consulting Club at IIT Hyderabad is a student-led
            organization fostering finance and consulting interests. At FCC
            IITH, students are driven by their passion for finance, consulting,
            product management and continual progress.</p>
          <p className="w-full p-2" >Our dedicated team plans a variety of events, such as stimulating
            lectures, engaging workshops, impactful projects, rigorous
            competitions, and more, all geared toward achieving their mission of
            equipping students with useful skills and real-world knowledge in
            the finance, consulting, and product management domains.</p>
        </div>
        <div className='w-24 h-24 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
        <div className='w-24 h-24 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div>
      </div> */}

      {/* What we do cards */}
      {/* <div
        className="h-auto w-full flex flex-col items-center justify-center font-rosario  py-4    container-fluid"
        id="what-we-do"
      >
        <div className="absolute right-[0] bg-[#345bd8] h-[26%] w-[45%] rounded-[100%] blur-[300px] "></div>
        <div className="what-heading w-full text-[3rem] md:text-[5vw] leading-[100%] md:pt-[3%] md:pb-[2%] p-[2%]  text-center">
        <p className='className=" text-3xl md:text-6xl my-5 md:my-10 md:pb-10 md:w-[80%]" w-full text-center mx-auto'>What Do We Do ?</p>

        </div>
        <div className="what-cards w-[80%] h-auto flex md:justify-center flex-wrap justify-between items-center ">
          <Link
            to="/resources"
            className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto "
            id="card1"
          >
            <img
              src={financeSVG}
              className="card-image transition-all duration-500 hover:cursor-pointer hover:scale-105 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-500"
              width="100%"
              height="100%"
              alt=""
            />
          </Link>
          <Link
            to="/resources"
            className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto "
            id="card2"
          >
            <img
              src={consultingSVG}
              className="card-image transition-all duration-500 hover:cursor-pointer hover:scale-105 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-500"
              width="100%"
              height="100%"
              alt=""
            />
          </Link>
          <Link
            to="/resources"
            className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto "
            id="card3"
          >
            <img
              src={prodmanSVG}
              className="card-image transition-all duration-500 hover:cursor-pointer hover:scale-105 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-500"
              width="100%"
              height="100%"
              alt=""
            />
          </Link>
        </div>
      </div> */}

      {/* What we do section */}
      <div className="relative w-full h-auto py-10  px-4  flex items-center justify-center flex-col bg-[#114791] overflow-hidden"
         >
        <div className="w-4/5 " >
          <h1 className='text-3xl md:text-6xl my-5 md:my-10 md:w-[80%] w-full text-center mx-auto'>What Do We Do ?</h1>
          <div>
            <p className="w-full z md:text-xl text-start p-2" >The Finance and Consulting Club at IIT Hyderabad is a student-led
              organization fostering finance and consulting interests. At FCC
              IITH, students are driven by their passion for finance, consulting,
              product management and continual progress.</p>
            <p className="w-full z md:text-xl p-2" >Our dedicated team plans a variety of events, such as stimulating
              lectures, engaging workshops, impactful projects, rigorous
              competitions, and more, all geared toward achieving their mission of
              equipping students with useful skills and real-world knowledge in
              the finance, consulting, and product management domains.</p>
          </div>
        </div>
        <div className='w-24 h-24 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
        <div className='w-24 h-24 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div>
      </div>

      {/* Upcoming Events Carousel */}
      <HomeCarousel />

      {/* Newsletter subscriptions  */}
      <Newsletter />
    </div>
  );
}

export default Home;
