import { Link } from "react-router-dom";

import rupeeBlur from "/src/assets/home/rupeeblur.svg";
import rightArrow from "/src/assets/home/Double Alt Arrow Right.png";
// import glowBlockSmall from "/src/assets/home/glowblocksmall.png"
import aboutSVG from "/src/assets/home/Vector.svg";
// import glimpseVideo from "/src/assets/home/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4"
import financeSVG from "/src/assets/home/finance.svg";
import consultingSVG from "/src/assets/home/consulting.svg";
import prodmanSVG from "/src/assets/home/prodman.svg";
import horizonLogo from "../assets/home/HoRiZoN-logo-second-draft.png";

import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className=" overflow-x-hidden ">
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
        <div className="font-rosario  md-1:w-auto lg:w-1/2 w-full text-center self-center h-1/2 justify-between items-center">
          <div className="titles  ">
            <p className="text-[#1270ed] text-[5.5rem] md-1:text-[4rem] sm:text-[2.5rem] leading-100p text-center  mb-5">
              Finance and Consulting Club
            </p>
            <p className="font-rosario font-light  text-[2.5rem] leading-normal text-center">
              IIT Hyderabad
            </p>
          </div>
          <Link
            to="/horizon"
            className="shadow-[0_0_12px_rgba(69,115,213,0.6)] hover:shadow-[0_0_25px_rgba(69,115,213,0.6)] w-fit md:w-1/2 my-10 text-3xl  md:text-[2.2rem] text-white bg-[#172EFF] rounded-xl flex justify-center items-center px-5 mx-auto"
          >
            Horizon 25&apos;{" "}
            <img src={rightArrow} className=" md:w-20 md:h-20" alt="" />
          </Link>
          {/* <img className="absolute top-[80vh] left-0 rotate-[60deg]" src={glowBlockSmall} alt="" height="70" width="70" title="svg" /> */}
        </div>

        {/* Horizon Timer Card */}
        <div className="cardbox w-full md:w-1/2 h-1/4 md:h-full flex justify-center mx-auto">
          <div
            className="horizon-card  p-6 md:p-10 md:px-[20px] md:pt-0 md:pb-[20px] flex flex-col justify-center font-rosario w-[70%] md:w-[90%] md:max-w-[420px] md:min-w-[300px] h-auto md:h-[17rem] rounded-[2rem] border border-solid border-[#ffffff41] bg-gray-500 "
            style={{
              background:
                "linear-gradient(180deg, rgba(142, 141, 141, 0.5) -36.57%, rgba(217, 217, 217, 0) 141.73%)",
              backdropFilter: "blur(36px)",
            }}
          >
            <div className="heading h-fit w-full flex items-center justify-between">
              <div className="fs-4 text-[#acababad] md:text-2xl ">
                FCC IIT Hyderabad
              </div>
              <img
                className="horizon-logo w-15 h-10 md:w-16 md:h-12 "
                src={horizonLogo}
                alt=""
              />
            </div>
            <div className="horizon-title h-fit w-fit flex items-center justify-between">
              <div className="md:text-[5rem] text-[2.2rem] bg-clip-text text-[#1270ED] t">
                Horizon
              </div>
            </div>
            <div className="timer h-fit w-full">
              <div className="countdown-container flex justify-between w-full p-[2%]">
                <div className="days font-roboto text-[#acababad]">
                  <span id="days"> 00</span> <br />
                  <span>days</span>
                </div>
                <div className="hours font-roboto text-[#acababad]">
                  <span id="hours"> 00</span> <br />
                  <span>hrs</span>
                </div>
                <div className="minutes font-roboto text-[#acababad]">
                  <span id="minutes"> 00</span>
                  <br /> <span>min</span>
                </div>
                <div className="seconds font-roboto text-[#acababad]">
                  <span id="seconds"> 00</span> <br />
                  <span>sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bg Elements */}
      {/*
      <img className="fixed right-[15vw] rotate-[20deg] -z-20" src={rupeeBlur} alt="" height="40"
        width="40" title="svg" />
      <div className="w-[60vw] h-[60vh] absolute top-[20%] left-[-10%] rounded-[100%] blur-[250px] z-[-1]"
        style={{ background: "rgba(126, 71, 241, 0.4)" }}></div>
      <img className="absolute right-0 top-[80%] lg:right-1/2 lg:top-[80%] -z-10" src={glowBlockSmall}
        alt="" />
      <img className="absolute right-[-4%] top-[60%] -z-10" width="200" height="200" src={glowBlockSmall}
        alt="" /> */}

      {/* Our Mission */}
      <div className="w-full h-auto mt-5 mx-auto hidden md:flex flex-col py-[3%]">
        <div className="w-full absolute right-0 ">
          <img
            className="arrowsvg"
            src={aboutSVG}
            alt=""
            height="90%"
            width="100%"
          />
        </div>
        <p className=" text-left text-white font-rosario text-xl md:text-[4.5vw] leading-normal pl-[5%] my-3 font-medium">
          Our mission :
        </p>
        <div className="w-auto h-auto  text-[9vw] leading-[80%] pl-[5%] col-lg-6 ">
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
      </div>

      {/* Who are we/ About us section */}
      <div
        className="relative w-full h-auto md:h-auto md:p-[1%] flex items-center justify-center flex-col overflow-hidden mix-blend-exclusion"
        style={{ background: "linear-gradient(#0f4693e5, #0f489399)" }}
      >
        {/* bg gradients */}
        <div className="absolute top-[-30px] right-[-50px] bg-white w-1/4 h-1/4 rounded-[100%] blur-[200px]"></div>
        <div className="absolute bottom-[-30px] left-0 bg-white w-1/4 h-1/4 rounded-[100%] blur-[200px]"></div>

        <div className="flex font-rosario md:w-[90%] md:px-[2%] text-[3rem] md:text-[5rem] text-center md:text-start w-full mt-3 mx-auto md:mx-none h-auto">
          <p className="mx-auto md:mx-0">
            So, <br className="hidden md:flex" /> Who are we?
          </p>
        </div>
        <div className="w-[90%] h-auto text-[f2f2f2] md:text-[2.2rem] text-lg font-rosario font-light leading-normal p-[2%] tracking-[200%]">
          <p className="text-left pb-5">
            The Finance and Consulting Club at IIT Hyderabad is a student-led
            organization fostering finance and consulting interests. At FCC
            IITH, students are driven by their passion for finance, consulting,
            product management and continual progress.
          </p>
          <p className="text-left pb-5">
            Our dedicated team plans a variety of events, such as stimulating
            lectures, engaging workshops, impactful projects, rigorous
            competitions, and more, all geared toward achieving their mission of
            equipping students with useful skills and real-world knowledge in
            the finance, consulting, and product management domains.
          </p>
        </div>
      </div>

      {/* Horizon glimpse video */}
      {/* <div className="m-auto py-[2vw] my-5 z-10">
        <video className="h-[95vh] w-[95vw]" autoPlay muted loop>
          <source src={glimpseVideo} />
          ./images/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4
        </video>
      </div> */}

      {/* What we do cards */}
      <div
        className="h-auto w-full flex flex-col items-center justify-center font-rosario  py-4 my-4 container-fluid"
        id="what-we-do"
      >
        <div className="absolute right-[0] bg-[#345bd8] h-[26%] w-[45%] rounded-[100%] blur-[300px] "></div>
        <div className="what-heading w-full text-[3rem] md:text-[6.9vw] leading-[100%] md:pt-[3%] md:pb-[2%] p-[2%] md:text-start text-center">
          <p className="w-full">What Do We Do?</p>
        </div>
        <div className="what-cards md:w-[95%] w-[90%] h-auto flex md:justify-center flex-wrap  justify-between items-center ">
          <div
            className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto "
            id="card1"
          >
            <img
              src={financeSVG}
              className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div
            className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto "
            id="card2"
          >
            <img
              src={consultingSVG}
              className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div
            className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto "
            id="card3"
          >
            <img
              src={prodmanSVG}
              className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default Home;
