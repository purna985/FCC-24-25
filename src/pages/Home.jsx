function Home() {
  return (
    <>
      <div className="w-full h-auto lg:pt-[3%] lg:pl-[4%] pt-0 mb-[10%] overflow-x-hidden ">
        <div className="container-fluid  maincard flex w-full justify-center items-end">
          <div className="subcard flex w-full h-full justify-between items-center">
            <div className="titlecard font-ikaros  w-1/2 h-full justify-between items-center">
              <div className="titles">
                <p
                  className="  text-body-light w-3/4 fcc-main-heading text-[#1270ed] text-[5.5rem] leading-normal">Finance
                  and Consulting Club</p>
                <p
                  className="  text-body-light lh-1 mb-3 iith-main-heading font-ikaros font-light text-[2.5rem] leading-normal">IIT
                  Hyderabad</p>
              </div>
              <div
                className="btn btn-primary btn-lg horizon-button w-1/2 text-[1rem] font-montserrat text-[#d9e9f1] bg-[##172eff] rounded-[1.5625rem]"
                style={{
                  border: "2px solid rgba(176, 174, 174, 0.6)",
                  boxShadow: "0px 0px 10px 2px rgba(112, 110, 110, 0.6)"
                }}>
                Horizon 24' <img src="src/assets/Double Alt Arrow Right.png" height="60" alt=""/>
              </div>
            </div>
            <div className="cardbox w-full sm:w-[45%] h-full flex justify-center self-end mx-auto">
              <div className="horizon-card m-auto p-[5%] sm:px-[20px] sm:pt-0 sm:pb-[20px] flex flex-col items-center justify-center font-ikaros w-[90%] h-full max-w-[420px] min-w-[300px] sm:min-w-[400px] h-[17rem] rounded-[2rem] border border-solid border-[#ffffff41] backdrop-blur-[36px]" style={{background:'background: linear-gradient(\n' +
                  '    180deg,\n' +
                  '    rgba(142, 141, 141, 0.5) -36.57%,\n' +
                  '    rgba(217, 217, 217, 0) 141.73%\n' +
                  '  );'}}>
                <div className="heading h-full flex items-center justify-between">
                  <div className="fs-4 text-[#acababad]">FCC, IIT Hyderabad</div>
                  <img className="horizon-logo " src="src/assets/HoRiZoN-logo-second-draft.png" alt="" width="60"
                       height="50"/>
                </div>
                <div className="horizon-title w-full flex items-center justify-between">
                  <h1 className="text-[10vw] sm:text-[4rem] bg-clip-text" style={{background: "linear-gradient(124deg, #1680e8 2%, #2bc9d3 133.32%)"}}>Horizon</h1>
                </div>
                <div className="timer w-100">
                  <div className="countdown-container flex justify-between w-full p-[2%]">
                    <div className="days fs-4"><span id="days"> 00</span> <br/><span>days</span></div>
                    <div className="hours fs-4"><span id="hours"> 00</span> <br/><span>hrs</span></div>
                    <div className="minutes fs-4"><span id="minutes"> 00</span><br/> <span>min</span></div>
                    <div className="seconds fs-4"><span id="seconds"> 00</span> <br/><span>sec</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="fixed left-[30vw] -z-10" src="src/assets/rupeeblur.svg" alt="" height="50" width="50"
           title="svg"/>
      <img className="fixed top-[50vh] right-[20vw] rotate-[60deg]" src="src/assets/rupeeblur.svg" alt="" height="70"
           width="70" title="svg"/>
      <img className="fixed right-[15vw] rotate-[20deg] -z-20" src="src/assets/rupeeblur.svg" alt="" height="40"
           width="40" title="svg"/>
      <div className="w-[60vw] h-[60vh] absolute top-[20%] left-[-10%] rounded-[100%] blur-[250px] z-[-1]"
           style={{background: "rgba(126, 71, 241, 0.4)"}}></div>
      <img className="absolute right-0 top-[80%] lg:right-1/2 lg:top-[80%] -z-10" src="src/assets/glowblocksmall.png"
           alt=""/>
      <img className="absolute right-[-4%] top-[60%] -z-10" width="200" height="200" src="src/assets/glowblocksmall.png"
           alt=""/>


      <div className="w-full h-auto mt-[15%] ml-auto mr-auto flex flex-col quote-span col-lg-6 py-[3%]">
        <div className="flex items-center justify-end w-[80%] absolute right-0 z-[-5]">
          <img className="arrowsvg" src="../assets/Vector.svg" alt="" height="90%" width="90%"/>
        </div>
        <p className=" text-left text-white font-ikaros text-[2.5rem] leading-normal pl-[2%]">Our mission</p>
        <div className="w-auto h-auto text-[10vw] leading-[80%] pl-[2%] col-lg-6  ">
          <p className="font-lato q1">TO PROVE</p>
          <p className="font-lato q2">THAT <br/></p>
          <p className="font-lato q3">ENGINEERS <br/></p>
          <p className="font-lato q4">CAN DO</p>
          <p className="font-lato q5" style={{color: "#1507E8"}}>NUMBERS</p>
        </div>
        <div className="m-auto pt-[2vw] -z-10">
          <video className="h-[95vh] w-[95vw]" autoPlay muted loop>
            <source src="src/assets/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4"/>
            ./images/y2mate.com - Horizon23 Event Highlights FCC IIT Hyderabad _1080p.mp4
          </video>
        </div>

      </div>
      <div
        className="relative w-full h-auto md:p-[1%] p-[2%] flex items-center justify-center flex-col overflow-hidden mix-blend-exclusion"
        style={{background: 'linear-gradient(#0f4693e5, #0f489399)'}}>
        <div className="absolute top-[-30px] right-[-50px] bg-white w-1/4 h-1/4 rounded-[100%] blur-[200px]"></div>
        <div className="absolute bottom-[-30px] left-0 bg-white w-1/4 h-1/4 rounded-[100%] blur-[200px]"></div>
        <div
          className="hidden md:flex items-baseline h-1/2 md:w-[90%] w-[80%] leading-[100%] text-left self-center font-ikaros font-medium md:text-[7vw] text-[8vw] pt-[2%] pl-[2%]  tracking-[200%]">So,<br/> Who
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


      <div className="h-auto w-full relative font-ikaros flex flex-col items-center justify-center  py-4 my-4 container-fluid" id="what-we-do">

        <div className="absolute top-[-30px] right-[-50px] bg-[#345bd8] h-[26%] w-[45%] rounded-[100%] blur-[300px]"></div>
        <div className="what-heading text-[3rem] md:text-[6.9vw] w-[85%] leading-[100%] md:pt-[3%] md:pb-[2%] p-[2%] md:text-start text-center">
          <p className="md:w-2/5 w-full">
            What Do We Do?
          </p>
        </div>
        <div className="what-cards md:w-[95%] w-[90%] h-auto flex md:justify-center md:flex-wrap md:flex-row flex-col justify-between items-center md:gap-0 gap-[30px]">
          <div className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto" id="card1">
            <img src="src/assets/finance.svg" className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]" width="110%" height="110%" alt=""/>
          </div>
          <div className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto" id="card2">
            <img src="src/assets/consulting.svg" className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]" width="110%" height="110%" alt=""/>
          </div>
          <div className="what-card flex justify-center items-center md:w-1/3 w-1/2 h-auto" id="card3">
            <img src="src/assets/prodman.svg" className="card-image duration-[0.4s] hover:cursor-pointer hover:-translate-y-5 hover:bg-[rgba(0,0,0,0.221)] hover:rounded-[3rem] hover:duration-[0.3s]" width="110%" height="110%" alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;