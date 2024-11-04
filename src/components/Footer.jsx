import grp31 from "/src/assets/Group_31.svg";
import msg201SVG from "/src/assets/home/messgae_1.svg";
import logo from "../assets/fcc-white.svg";

function Footer() {
  return (
    <div
      className="footer m-auto font-ikaros relative overflow-hidden container-fluid  "
      id="footer"
    >
      <div className="bg-white h-24 w-20 z-10  rounded-full blur-[3rem] absolute bottom-0 right-0"></div>
      <div className="bg-white h-24 w-20 z-10  rounded-full blur-[3rem] absolute top-0 left-0"></div>
      <footer
        className="flex flex-col md:flex-row justify-center items-center px-[4%] pb-[2%]  "
        style={{ backgroundColor: "rgb(15, 70, 144)" }}
      >
        <div className="w-full md:w-1/2 flex-col flex justify-between items-start mt-7">
          <a
            href="/"
            className="flex items-center mb-3 "
          >
            <img src={logo} className="w-20 h-20 md:w-28 md:h-28" alt="" />
          </a>
          <p className="text-[1rem] w-auto">© 2024 Copyright: FCC IIT Hyderabad</p>
        </div>

        <div className=" mt-7 w-[80%] md:w-full flex justify-center md:justify-end gap-10 mx-auto " >
          <div className="w-auto md:w-fit flex-col flex gap-3">
            <h3 className="text-2xl font-semibold">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-1 text-[1rem]">
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                <a href="/" className="font-light text-md">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                <a
                  href="/horizon"
                  className="font-light text-md"
                  target="_blank"
                >
                  Horizon
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                <a
                  href="resources"
                  className="font-light text-md"
                  target="_blank"
                >
                  Resources
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                <a
                  href="/schedule"
                  className="font-light text-md"
                  target="_blank"
                >
                  Events
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                <a href="/team" className="font-light text-md">Team</a>
              </li>
            </ul>
          </div>

          <div className="w-fit md:w-fit flex-col flex gap-3">
            <h3 className="text-2xl font-semibold">
              Contact
            </h3>
            <ul className="flex flex-col gap-1 text-[1rem]">
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300   ">
                Address : 
                <address className="nav-link font-rosario p-0 text-white">
                  IIT Hyderabad, Sangareddy, Telangana, India - 502285
                </address>
              </li>
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300   align-middle">
                Email :
                <a
                  href="mailto:fcc@gymkhana.iith.ac.in"
                  className="nav-link text-body-light flex flex-row items-center sm:text-[4vw]"
                >
                  <img src={msg201SVG} alt="" />
                  &nbsp;fcc@gymkhana.iith.ac.in
                </a>

              </li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
