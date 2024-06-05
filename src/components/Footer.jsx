function Footer() {
  return (
    <div className="footer m-auto font-ikaros relative overflow-hidden container-fluid  " id="footer">
      <div className="bg-white h-[30%] w-[30%] rounded-[100%] blur-[200px] absolute bottom-[30px] right-[-20px]"></div>
      <div className="bg-white h-[30%] w-[30%] rounded-[100%] blur-[200px] absolute top-0 left-[-200px]"></div>
      <footer className="flex flex-wrap pt-[4%] px-[4%] pb-[2%]" style={{backgroundColor: "rgb(15, 70, 144)"}}>
        <div className="w-full md:w-1/5 flex-col flex justify-between py-7">
          <a href="index.html" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src="src/assets/Group 31.svg" width="60%" height="60%" alt=""/>
          </a>
          <p className="">© 2024 Copyright: FCC IIT Hyderabad</p>
        </div>
        <div className="w-full md:w-1/5 flex-col flex justify-between gap-3">
          <h3 className="text-[4vh] md:text-[1.5vw]">About Us</h3>
          <ul className="flex flex-col gap-1">
            <li className="nav-item mb-2"><a href="pages/Comingsoon.html" className="nav-link p-0 text-body-light"
                                         target="_blank">FCC Leadership</a></li>
            <li className="nav-item mb-2"><a href="pages/Comingsoon.html" className="nav-link p-0 text-body-light"
                                         target="_blank">Blogs</a></li>
            <li className="nav-item mb-2"><a href="pages/Comingsoon.html" className="nav-link p-0 text-body-light"
                                         target="_blank">Gallery</a></li>
            <li className="nav-item mb-2"><a href="#footer" className="nav-link p-0 text-body-light" target="_blank">Contact
              Us</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"></a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 flex-col flex justify-between gap-3">
          <h3 className="text-[4vh] md:text-[1.5vw]">Useful Links</h3>
          <ul className="flex flex-col gap-1">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light">Home</a></li>
            <li className="nav-item mb-2"><a href="pages/Horizon.html" className="nav-link p-0 text-body-light"
                                         target="_blank">Horizon</a></li>
            <li className="nav-item mb-2"><a href="pages/Sponsors.html" className="nav-link p-0 text-body-light"
                                         target="_blank">Sponsors</a></li>
            <li className="nav-item mb-2"><a href="pages/Events.html" className="nav-link p-0 text-body-light"
                                         target="_blank">Workshops</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"></a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 flex-col flex justify-between gap-3">
          <h3 className="text-[4vh] md:text-[1.5vw]">Socials</h3>
          <ul className="flex flex-col gap-1">
            <li className="nav-item mb-2"><a href="https://www.instagram.com/fcc_iith/" className="nav-link p-0 text-body-light"
                                         target="_blank">Instagram</a></li>
            <li className="nav-item mb-2"><a href="https://www.linkedin.com/company/fcc-iith/"
                                         className="nav-link p-0 text-body-light" target="_blank">LinkedIn</a></li>
            <li className="nav-item mb-2"><a href="https://fcc-iith.medium.com/" className="nav-link p-0 text-body-light"
                                         target="_blank">Medium</a></li>
            <li className="nav-item mb-2"><a href="https://www.youtube.com/@fcciith" className="nav-link p-0 text-body-light"
                                         target="_blank">Youtube</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"></a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 flex-col flex justify-between gap-3">
          <h3 className="text-[4vh] md:text-[1.5vw]">Contact</h3>
          <ul className="flex flex-col gap-1">
            <li className="nav-item mb-2"><p className="nav-link p-0 text-white" >IIT Hyderabad, Sangareddy,
              Telangana, India - 502285</p></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"><img src="src/assets/messgae 1.svg"
                                                                                            alt=""/> fcc@gymkhana.iith.ac.in</a>
            </li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"></a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"></a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light"></a></li>
          </ul>
        </div>
      </footer>
    </div>
)
}

export default Footer;