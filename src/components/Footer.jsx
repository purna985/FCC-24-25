import grp31 from "/src/assets/Group_31.svg";
import msg201SVG from "/src/assets/home/messgae_1.svg";
import logo from "/fcc-logo-new.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  return (
    <div
  className="flex flex-col justify-center w-full min-h-screen max-w-screen-2xl font-ikaros relative overflow-hidden
    pt-20 pb-20 px-[10%] gap-16 border-t-2 border-t-[#292929]
    sm:px-6 sm:pt-14 sm:pb-14"
  id="footer"
>
  <footer className="flex flex-col w-full justify-center max-w-7xl gap-6 sm:gap-8">
    <div className="flex flex-wrap w-full justify-between gap-10 sm:flex-col">
      
      {/* Logo + Description + Social */}
      <div className="flex flex-col gap-6 w-[40%] min-w-[250px] sm:w-full">
        <div className="flex gap-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="FCC Logo" className="w-10 sm:w-8" />
            <div>
              <p className="text-base font-Body-3-fontFamily font- font-semibold bg-[#EBEBEB] bg-clip-text">Finance & Consulting Club</p>
              <p className="text-xs text-[#EBEBEB] font-Body-3-fontFamily font-Weights-Regular">IIT Hyderabad</p>
            </div>
          </a>
        </div>
        <p className="text-sm font-Body-3-fontFamily text-[#A2A2A2] leading-relaxed">
          Empowering tomorrow's finance leaders and consultants through hands-on projects, insights, and global exposure.
        </p>
        <div className="flex gap-4">
          
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/fcc-iith/" className="bg-white border-2 border-[#EBEBEB] rounded-full w-7 h-7 flex items-center justify-center">
              <FaLinkedin style={{fill:'#000000'}}  className="text-black w-5 h-5" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fcc_iith" className="bg-white border-2 border-[#EBEBEB] rounded-full w-7 h-7 flex items-center justify-center">
              <FaInstagram style={{fill:'#000000'}}  className="text-black w-5 h-5" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@fcciith" className="bg-white border-2 border-[#EBEBEB] rounded-full w-7 h-7 flex items-center justify-center">
              <FaYoutube style={{fill:'#000000'}}  className="text-black w-5 h-5" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://fcc-iith.medium.com/" className="bg-white border-2 border-[#EBEBEB] rounded-full w-7 h-7 flex items-center justify-center">
              <FaMedium style={{fill:'#000000'}}  className="text-black w-5 h-5" />
            </a>
          
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-6 w-[20%] min-w-[180px] sm:w-full">
        <p className="text-[#CDFE64] font-Heading-H3-fontFamily text-Heading-H4-fontSize tracking-Heading-H4-letterSpacing font-bold">Quick Links</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <a href="/events" className="text-[#A2A2A2] font-Body-3-fontFamily font-Weights-Regular text-Body-2-fontSize">Events</a>
            <a href="/events" className="bg-[#3E5B01] border border-[#CDFE64] text-xs font-Body-3-fontFamily px-2 py-0.5 rounded-md font-semibold text-white">
              Horizon
            </a>
          </div>
          <a href="/projects" className="text-[#A2A2A2] font-Body-3-fontFamily font-Weights-Regular text-Body-2-fontSize">Projects</a>
          <a href="/blog" className="text-[#A2A2A2] font-Body-3-fontFamily font-Weights-Regular text-Body-2-fontSize">Blogs</a>
          <a href="/aboutUs" className="text-[#A2A2A2] font-Body-3-fontFamily font-Weights-Regular text-Body-2-fontSize">About Us</a>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="flex flex-col gap-4 w-[30%] min-w-[240px] sm:w-full">
        <p className="text-[#4E56D3] font-Heading-H3-fontFamily text-Heading-H4-fontSize tracking-Heading-H4-letterSpacing font-bold">Get in Touch</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33366 2.93457C4.98785 2.93457 3.77087 3.27093 2.88754 4.09115C1.99584 4.91917 1.54199 6.14878 1.54199 7.72624V13.5596C1.54199 15.1371 1.99584 16.3667 2.88754 17.1947C3.77087 18.0149 4.98785 18.3512 6.33366 18.3512H14.667C16.0128 18.3512 17.2298 18.0149 18.1131 17.1947C19.0048 16.3667 19.4587 15.1371 19.4587 13.5596V7.72624C19.4587 6.14878 19.0048 4.91917 18.1131 4.09115C17.2298 3.27093 16.0128 2.93457 14.667 2.93457H6.33366ZM16.5241 7.61149C16.7972 7.40044 16.8475 7.00792 16.6364 6.73479C16.4254 6.46164 16.0329 6.41132 15.7597 6.62238L11.1372 10.1942C10.7621 10.4842 10.2385 10.4842 9.86332 10.1942L5.24082 6.62238C4.96768 6.41132 4.57518 6.46164 4.36412 6.73479C4.15306 7.00792 4.20338 7.40044 4.47653 7.61149L9.09907 11.1834C9.92441 11.8211 11.0762 11.8211 11.9015 11.1834L16.5241 7.61149Z" fill="#CDFE64"/>
          </svg>
            <p className="text-Body-2-fontSize font-Body-3-fontFamily font-Weights-Regular text-[#A2A2A2] break-words">fcc.gymkhana.iith.ac.in</p>
          </div>
          <div className="flex items-start gap-3">
            <svg width="21" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.26807C6.46438 6.26807 5.625 7.10744 5.625 8.14307C5.625 9.17869 6.46438 10.0181 7.5 10.0181C8.53562 10.0181 9.375 9.17869 9.375 8.14307C9.375 7.10744 8.53562 6.26807 7.5 6.26807ZM7.5 11.2681C5.77437 11.2681 4.375 9.86932 4.375 8.14307C4.375 6.41682 5.77437 5.01807 7.5 5.01807C9.22563 5.01807 10.625 6.41682 10.625 8.14307C10.625 9.86932 9.22563 11.2681 7.5 11.2681ZM7.5 0.643066C3.35813 0.643066 0 4.00119 0 8.14307C0 11.2793 6.25313 20.6499 7.5 20.6431C8.7275 20.6499 15 11.2368 15 8.14307C15 4.00119 11.6419 0.643066 7.5 0.643066Z" fill="#CDFE64"/>
          </svg>
            <p className="text-Body-2-fontSize font-Body-3-fontFamily font-Weights-Regular text-[#A2A2A2] break-words">IIT Hyderabad, Sangareddy, Telangana, India - 502285</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full border-t border-[#414141] mt-10" />

    {/* Footer bottom */}
    <div className="flex justify-center">
      <p className="text-sm text-[#A2A2A2] text-center">© 2024 Copyright: FCC IIT Hyderabad</p>
    </div>
  </footer>
</div>

  );
}

export default Footer;
