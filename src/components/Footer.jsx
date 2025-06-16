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
      className="flex flex-col m-auto w-full min-h-screen max-w-screen-2xl font-ikaros relative overflow-hidden
            pt-20 pb-20 px-[124px] gap-[62px] border-t-2 border-t-[#292929]
            md:px-[80px] sm:px-6 sm:pt-16 sm:pb-16 sm:h-auto"
      id="footer"
    >
      
      <footer
        className="flex flex-col w-full justify-center max-w-[1271px] h-[374px] gap-[26px] 
            sm:h-auto sm:gap-4 "
      >
        <div id="footer contents" className="flex w-full max-w-[1271px] h-[214px] gap-[77px] 
            sm:h-auto sm:gap-6">
          <div id="logo and social media links conntainer" className="w-full max-w-[466px] h-[199.84px] gap-[55px] 
              sm:h-auto sm:gap-6 flex flex-col">
              <div id="logo and desc container" className="w-full max-w-[489px] h-[116.84px] gap-[7px] 
            sm:h-auto sm:gap-2 flex flex-col">

              <a href="/" className="w-full max-w-[267.53px] h-[65.84px] px-[9px] py-[12px] gap-[11px] 
            sm:h-auto sm:gap-2 flex">

                <img src={logo} className="w-[36.45px] h-[41.84px] sm:w-[28px] sm:h-auto" alt="" />
                <div className="w-[202.08px] h-[31.03px] sm:w-full sm:h-auto">

                  <p className="w-[202px] h-[20px]
            font-Label-Label-3-fontFamily font-semibold text-[16.08px] leading-[100%] tracking-[0%]
            bg-[#EBEBEB] bg-clip-text">
                    Finance &
                    Consulting Club
                  </p>
                  <p className="w-[64px] h-[13px]
            font-Body-3-fontFamily font-normal text-[9.94px] leading-[100%] tracking-[0%]
            bg-[#EBEBEB] bg-clip-text">IIT Hyderabad</p>

                </div>
              </a>
              <p className="font-Body-3-fontFamily font-Weights-Regular text-Label-Label-1-fontSize leading-Label-Label-1-lineHeight tracking-Heading-H3-letterSpacing
              w-full max-w-[489px] h-[44px] sm:h-auto">
                Empowering tomorrow's finance leaders and consultants through hands-on projects, insights, and global exposure.
              </p>
              </div>
              <div id="social media lines container" className="flex w-full max-w-[160.06px] h-[28px] gap-[16.02px] sm:h-auto sm:gap-3">
                <a href="#" className="border-[#EBEBEB] bg-white overflow-hidden  border-2 rounded-full w-7 flex items-center justify-center">
                  <FaLinkedin style={{fill:"#000000"}} className="w-5 h-5 rounded-full"/>
                </a>
                <a href="#"  className="border-[#EBEBEB] bg-white overflow-hidden border-2 rounded-full w-7 flex items-center justify-center">
                  <FaInstagram style={{fill:"#000000"}} className="w-5 h-5"/>
                </a>
                <a href="#" className="border-[#EBEBEB] bg-white  border-2 rounded-full w-7 flex items-center justify-center">
                  <FaYoutube style={{fill:"#000000"}} className="w-5 h-5"/>
                </a>
                <a href="#" className="border-[#EBEBEB] bg-white border-2 rounded-full w-7 flex items-center justify-center">
                  <FaMedium style={{fill:"#000000"}} className="w-5 h-5"/>
                </a>
              </div>
        </div>
        <div id="quick links container" className="w-[178px] h-[214px] gap-[26px] flex flex-col">
          <p className="w-[178px] h-[24px] text-[#CDFE64] font-Heading-H3-fontFamily font-Weights-Bold text-Heading-H4-fontSize 
          tracking-Heading-H4-letterSpacing ">
            Quick Links
          </p>
          <div className="w-[100px] h-[140px] gap-[16px] sm:w-[119px] sm:h-[164px] sm:gap-[20px] flex flex-col">
            <div id="events" className="w-[100px] h-[22px] gap-[10px] sm:w-[118.21px] sm:h-[26px] sm:gap-[13px] flex items-center">
              <a href="/events" className="w-[48px] h-[22px] gap-[10px] sm:w-[54px] sm:h-[26px] sm:gap-[13px] flex items-center font-Body-3-fontFamily
              font-Weights-Regular text-Body-2-fontSize text-[#A2A2A2]">Events</a>
              <div className=" w-[51px] h-[18px] gap-[5px] p-[3px]
                sm:w-[51.21px] sm:h-[21px] sm:gap-[6.84px] sm:p-[4.11px]
                border-[0.68px] rounded-[6.84px]
                bg-[#3E5B01] border-[#CDFE64]
                flex items-center">
                <a className="font-Body-3-fontFamily font-semibold text-[12px] leading-4" href="/events">Horizon</a>
              </div>
            </div>
            <a href="/projects" className="w-[65px] h-[22px] gap-[10px] sm:w-[54px] sm:h-[26px] sm:gap-[13px] flex items-center font-Body-3-fontFamily
            font-Weights-Regular text-Body-2-fontSize text-[#A2A2A2]">Projects</a>
            <a href="/blog" className="w-[44px] h-[22px] gap-[10px] sm:w-[54px] sm:h-[26px] sm:gap-[13px] flex items-center font-Body-3-fontFamily
            font-Weights-Regular text-Body-2-fontSize text-[#A2A2A2]">Blogs</a>
            <a href="/aboutUs" className="w-[73px] h-[22px] gap-[10px] sm:w-[54px] sm:h-[26px] sm:gap-[13px] flex  font-Body-3-fontFamily
            font-Weights-Regular text-Body-2-fontSize text-[#A2A2A2]">About Us</a>
            
          </div>
        </div>
        <div id="get in rough container" className="w-[320px] h-[100px] gap-[20px] sm:w-[400px] sm:h-[110px] md:w-[473px] md:h-[122px] md:gap-[26px] flex flex-col">
          <p className="font-Body-3-fontFamily text-Heading-H4-fontSize font-Weights-Bold tracking-Heading-H4-letterSpacing
          w-[320px] h-[20px] sm:w-[400px] sm:h-[22px] md:w-[473px] md:h-[24px] text-[#4E56D3]">Get in Touch</p>
          <div className="w-[320px] h-[60px] gap-[16px] sm:w-[400px] sm:h-[66px] sm:gap-[18px] md:w-[473px] md:h-[72px] md:gap-[20px] flex flex-col">
            <div id="email container" className="w-[320px] h-[22px] gap-[16px] sm:w-[400px] sm:h-[24px] sm:gap-[18px] md:w-[473px] md:h-[26px] md:gap-[20px] flex items-center">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33366 2.93457C4.98785 2.93457 3.77087 3.27093 2.88754 4.09115C1.99584 4.91917 1.54199 6.14878 1.54199 7.72624V13.5596C1.54199 15.1371 1.99584 16.3667 2.88754 17.1947C3.77087 18.0149 4.98785 18.3512 6.33366 18.3512H14.667C16.0128 18.3512 17.2298 18.0149 18.1131 17.1947C19.0048 16.3667 19.4587 15.1371 19.4587 13.5596V7.72624C19.4587 6.14878 19.0048 4.91917 18.1131 4.09115C17.2298 3.27093 16.0128 2.93457 14.667 2.93457H6.33366ZM16.5241 7.61149C16.7972 7.40044 16.8475 7.00792 16.6364 6.73479C16.4254 6.46164 16.0329 6.41132 15.7597 6.62238L11.1372 10.1942C10.7621 10.4842 10.2385 10.4842 9.86332 10.1942L5.24082 6.62238C4.96768 6.41132 4.57518 6.46164 4.36412 6.73479C4.15306 7.00792 4.20338 7.40044 4.47653 7.61149L9.09907 11.1834C9.92441 11.8211 11.0762 11.8211 11.9015 11.1834L16.5241 7.61149Z" fill="#CDFE64"/>
              </svg>

              <p className="text-[#A2A2A2] font-Weights-Regular text-Body-2-fontSize font-Body-3-fontFamily
              w-[140px] h-[22px] sm:w-[160px] sm:h-[24px] md:w-[187px] md:h-[26px]">fcc.gymkhana.iith.ac.in</p>

            </div>
            <div id="location container" className="w-[320px] h-[22px] gap-[16px] sm:w-[400px] sm:h-[24px] sm:gap-[18px] md:w-[473px] md:h-[26px] md:gap-[20px] flex items-center">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.33366 2.93457C4.98785 2.93457 3.77087 3.27093 2.88754 4.09115C1.99584 4.91917 1.54199 6.14878 1.54199 7.72624V13.5596C1.54199 15.1371 1.99584 16.3667 2.88754 17.1947C3.77087 18.0149 4.98785 18.3512 6.33366 18.3512H14.667C16.0128 18.3512 17.2298 18.0149 18.1131 17.1947C19.0048 16.3667 19.4587 15.1371 19.4587 13.5596V7.72624C19.4587 6.14878 19.0048 4.91917 18.1131 4.09115C17.2298 3.27093 16.0128 2.93457 14.667 2.93457H6.33366ZM16.5241 7.61149C16.7972 7.40044 16.8475 7.00792 16.6364 6.73479C16.4254 6.46164 16.0329 6.41132 15.7597 6.62238L11.1372 10.1942C10.7621 10.4842 10.2385 10.4842 9.86332 10.1942L5.24082 6.62238C4.96768 6.41132 4.57518 6.46164 4.36412 6.73479C4.15306 7.00792 4.20338 7.40044 4.47653 7.61149L9.09907 11.1834C9.92441 11.8211 11.0762 11.8211 11.9015 11.1834L16.5241 7.61149Z" fill="#CDFE64"/>
              </svg>

              <p className="text-[#A2A2A2] font-Weights-Regular text-Body-2-fontSize font-Body-3-fontFamily
              w-[300px] h-[22px] sm:w-[380px] sm:h-[24px] md:w-[433px] md:h-[26px]">
                IT Hyderabad, Sangareddy, Telangana, India - 502285
              </p>
            </div>
          </div>
        </div>
        </div>

        <div id="line" className="w-full max-w-[1271px] border-[0.97px] border-[#414141]"></div>
      <div className="flex justify-center w-full">
        <p className="text-[#A2A2A2] font-Body-3-fontFamily font-Weights-Regular text-Body-2-fontSize">
          © 2024 Copyright: FCC IIT Hyderabad
        </p>
      </div>
      </footer>
    </div>
  );
}

export default Footer;
