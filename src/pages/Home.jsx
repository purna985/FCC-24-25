function Home() {
  return (
    <div className=" overflow-x-hidden ">

      <div className="w-full h-auto lg:pt-[3%] lg:pl-[4%] pt-0 mb-[10%] overflow-x-hidden ">
        <div className="flex w-full justify-center items-end">

          <div className="flex md:flex-row flex-col w-full h-full justify-between items-center">

            <div className="font-ikaros  md-1:w-auto lg:w-1/2 w-full text-center self-center h-full justify-between items-center">
              <div className="titles">
                <p
                  className="text-[#1270ed] text-[6rem] md-1:text-[4rem] sm:text-[2.5rem] leading-100p md:text-start text-center">Finance
                  and Consulting Club</p>
                <p
                  className="font-ikaros font-light sm:text-[1.5rem] text-[2.5rem] leading-normal text-start md-1:text-center">IIT
                  Hyderabad</p>
              </div>
              <div
                className="shadow-[0_0_12px_rgba(69,115,213,0.6)] hover:shadow-[0_0_25px_rgba(69,115,213,0.6)] w-4/6 mt-20 text-[2.2rem] text-white bg-[#172eff] rounded-[1.5625rem] flex justify-center items-center"
              >
                Horizon 24' <img src="src/assets/home/Double Alt Arrow Right.png" height={"30"} alt="" />
              </div>
            </div>

            <div className="cardbox w-full sm:w-[45%] h-full flex justify-center self-end mx-auto">
              <div className="horizon-card m-auto p-6 sm:px-[20px] sm:pt-0 sm:pb-[20px] flex flex-col items-stretch justify-between font-ikaros w-[90%] max-w-[420px] min-w-[300px] sm:min-w-[400px] h-[17rem] rounded-[2rem] border border-solid border-[#ffffff41] bg-gray-500 "
                style={{ background: "linear-gradient(180deg, rgba(142, 141, 141, 0.5) -36.57%, rgba(217, 217, 217, 0) 141.73%)", backdropFilter: "blur(36px)" }}
              >
                <div className="heading h-fit w-full flex items-center justify-between">
                  <div className="fs-4 text-[#acababad] text-3xl ">FCC, IIT Hyderabad</div>
                  <img className="horizon-logo " src="src/assets/home/HoRiZoN-logo-second-draft.png" alt="" width="60"
                       height="50" />
                </div>
                <div className="horizon-title h-fit w-fit flex items-center justify-between">
                  <div className="text-[4vw] sm:text-[4rem] bg-clip-text text-transparent bg-horizonText">Horizon</div>
                </div>
                <div className="timer h-fit w-full">
                  <div className="countdown-container flex justify-between w-full p-[2%]">
                    <div className="days font-roboto text-[#acababad]"><span id="days"> 00</span> <br /><span>days</span></div>
                    <div className="hours font-roboto text-[#acababad]"><span id="hours"> 00</span> <br /><span>hrs</span></div>
                    <div className="minutes font-roboto text-[#acababad]"><span id="minutes"> 00</span><br /> <span>min</span></div>
                    <div className="seconds font-roboto text-[#acababad]"><span id="seconds"> 00</span> <br /><span>sec</span></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <img className="fixed left-[30vw] -z-10" src="src/assets/home/rupeeblur.svg" alt="" height="50" width="50"
           title="svg" />
      <img className="fixed top-[50vh] right-[20vw] rotate-[60deg]" src="src/assets/home/rupeeblur.svg" alt="" height="70"
           width="70" title="svg" />
      <img className="fixed right-[15vw] rotate-[20deg] -z-20" src="src/assets/home/rupeeblur.svg" alt="" height="40"
           width="40" title="svg" />
      <div className="w-[60vw] h-[60vh] absolute top-[20%] left-[-10%] rounded-[100%] blur-[250px] z-[-1]"
        style={{ background: "rgba(126, 71, 241, 0.4)" }}></div>
      <img className="absolute right-0 top-[80%] lg:right-1/2 lg:top-[80%] -z-10" src="src/assets/home/glowblocksmall.png"
        alt="" />
      <img className="absolute right-[-4%] top-[60%] -z-10" width="200" height="200" src="src/assets/home/glowblocksmall.png"
        alt="" />


      <div className="w-full h-auto mt-[15%] ml-auto mr-auto flex flex-col quote-span col-lg-6 py-[3%]">
        <div className="flex items-center justify-end w-[80%] absolute right-0 z-[-5]">
          <img className="arrowsvg" src="src/assets/home/Vector.svg" alt="" height="90%" width="90%" />
        </div>
        <p className=" text-left text-white font-ikaros text-[2.5rem] leading-normal pl-[2%]">Our mission</p>
        <div className="w-auto h-auto text-[10vw] leading-[80%] pl-[2%] col-lg-6  ">
          <p className="font-lato q1">TO PROVE</p>
          <p className="font-lato q2">THAT <br /></p>
          <p className="font-lato q3">ENGINEERS <br /></p>
          <p className="font-lato q4">CAN DO</p>
          <p className="font-lato q5" style={{ color: "#1507E8" }}>NUMBERS</p>
        </div>
      </div>

        <div className="m-auto py-[2vw] my-5 z-10">
          <video className="h-[95vh] w-[95vw]" autoPlay muted loop>
            <source src="src/assets/home/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4" />
            ./images/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4
          </video>
        </div>

      <div
        className="relative w-full h-auto md:p-[1%] p-[2%] flex items-center justify-center flex-col overflow-hidden mix-blend-exclusion"
        style={{ background: 'linear-gradient(#0f4693e5, #0f489399)' }}>

        <div className="absolute top-[-30px] right-[-50px] bg-white w-1/4 h-1/4 rounded-[100%] blur-[200px]"></div>
        <div className="absolute bottom-[-30px] left-0 bg-white w-1/4 h-1/4 rounded-[100%] blur-[200px]"></div>

        <div
          className=" font-ikaros  hidden md:flex items-baseline h-1/2 md:w-[90%] w-[80%] leading-[100%] text-left self-center  font-medium md:text-[7vw] text-[8vw] pt-[2%] pl-[2%]  tracking-[200%]">So,<br /> Who
          are we?
        </div>

        <div
          className="md:hidden flex md:items-baseline items-center justify-center h-1/2 md:w-[90%] w-[80%] leading-[100%] text-left self-center font-ikaros font-medium md:text-[7vw] text-[8vw] pt-[2%] pl-[2%]  tracking-[200%]">
          <p>So, Who are we?</p></div>
        <div
          className="md:w-[90%] w-[70%] h-auto text-[f2f2f2] md:text-[2.75vw] text-[5vw] font-ikaros font-light leading-normal p-[2%] md:text-left text-center tracking-[200%]">The
          Finance and Consulting Club at IIT Hyderabad is a student-led organization
          fostering finance and consulting interests. At FCC IITH, students are driven by their passion for finance,
          consulting, product management and continual progress. Their dedicated team plans a variety of events, such
          as stimulating lectures, engaging workshops, impactful projects, rigorous competitions, and more, all geared
          toward achieving their mission of equipping students with useful skills and real-world knowledge in the
          finance, consulting, and product management domains.
        </div>
      </div>


      <div className="h-auto w-full relative font-rosario flex flex-col items-center justify-center  py-4 my-4 container-fluid" id="what-we-do">

        <div className="absolute top-[-30px] right-[-50px] bg-[#345bd8] h-[26%] w-[45%] rounded-[100%] blur-[300px]"></div>
        <div className="what-heading md:w-[95%] w-[90%] text-[3rem] md:text-[6.9vw] leading-[100%] md:pt-[3%] md:pb-[2%] p-[2%] md:text-start text-center">
          <p className="md:w-2/5 w-full">
            What Do We Do?
          </p>
        </div>
        <div className="what-cards md:w-[95%] w-[90%] h-auto flex md:justify-center md:flex-wrap md:flex-row flex-col justify-between items-center md:gap-0 gap-[30px]">
          <div className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto p-8" id="card1">
            <img src="src/assets/home/finance.svg" className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]" width="100%" height="100%" alt="" />
          </div>
          <div className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto p-8" id="card2">
            <img src="src/assets/home/consulting.svg" className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]" width="100%" height="100%" alt="" />
          </div>
          <div className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto p-8" id="card3">
            <img src="src/assets/home/prodman.svg" className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]" width="100%" height="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;