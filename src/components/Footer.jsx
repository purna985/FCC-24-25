import grp31 from "/src/assets/Group_31.svg";
import msg201SVG from "/src/assets/home/messgae_1.svg";
import logo from "../assets/fcc-white.svg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

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
        <div className="w-full md:w-1/2 flex-row flex items-center md:items-start mt-7">
          <a href="/" className="flex items-center mb-3 ">
            <img src={logo} className="w-16 h-16 md:w-28 md:h-28" alt="" />
          </a>
          <p className="ml-6 font-medium">
            <p className="text-xl md:text-2xl leading-snug">
              Finance &
              <br />
              Consulting Club
            </p>
            <p className="text-xl md:text-2xl mt-2">IIT Hyderabad</p>
          </p>
        </div>

        <div className=" mt-7 w-[80%] md:w-full flex justify-center md:justify-end gap-10 mx-auto md-4:flex-col md-4:items-center">
          <div className="w-auto md:w-fit flex-col flex gap-3">
            <ul className="flex flex-col gap-5 text-[1rem] mt-2 mx-6 md-4:flex-row">
              <li className="nav-item mb-2 hover:scale-110 transition-all duration-300  ">
                <a href="https://www.instagram.com/fcc_iith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <FaInstagram className="w-8 h-8" />
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-110 transition-all duration-300  ">
                <a href="https://www.linkedin.com/company/fcc-iith/">
                  <FaLinkedin className="w-8 h-8" />
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-110 transition-all duration-300  ">
                <a href="https://fcc-iith.medium.com/">
                  <FaMedium className="w-8 h-8" />
                </a>
              </li>
              <li className="nav-item mb-2 hover:scale-110 transition-all duration-300  ">
                <a href="https://www.youtube.com/@fcciith">
                  <FaYoutube className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex md-4:flex-row gap-10">
            <div className="w-auto md:w-fit flex-col flex gap-3">
              <h3 className="text-2xl font-semibold">About Us</h3>
              <ul className="flex flex-col gap-1 text-[1rem]">
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md">
                    FCC Leadership
                  </a>
                </li>
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md" target="_blank">
                    FCC Blogs
                  </a>
                </li>
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md" target="_blank">
                    Gallery
                  </a>
                </li>
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md" target="_blank">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-auto md:w-fit flex-col flex gap-3">
              <h3 className="text-2xl font-semibold">Useful Links</h3>
              <ul className="flex flex-col gap-1 text-[1rem]">
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a
                    href="/horizon"
                    className="font-medium text-md"
                    target="_blank"
                  >
                    Horizon
                  </a>
                </li>
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md" target="_blank">
                    Sponsers
                  </a>
                </li>
                <li className="nav-item mb-2 hover:scale-105 transition-all duration-300  ">
                  <a href="/" className="font-medium text-md" target="_blank">
                    Workshop
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-fit md:w-fit flex-col flex gap-3">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <ul className="flex flex-col gap-1 text-[1rem]">
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300   ">
                {/* Address :  */}
                <address className="nav-link font-rosario p-0 text-white">
                  IIT Hyderabad, Sangareddy, Telangana, India - 502285
                </address>
              </li>
              <li className="nav-item mb-2 hover:scale-105 transition-all duration-300   align-middle">
                {/* Email : */}
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
      <p
        className="text-xl w-auto flex justify-center font-light font-roboto pb-2"
        style={{ backgroundColor: "rgb(15, 70, 144)" }}
      >
        © 2024 Copyright: FCC IIT Hyderabad
      </p>
    </div>
  );
}

export default Footer;
