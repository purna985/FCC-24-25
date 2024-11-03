import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

// import logo from '../assets/fcc-logo-white.png'
import logo from '../assets/fcc-logo-blue-nograd.png'
import logofull from '../assets/fcc-logo-full.png'
import { Link } from "react-router-dom";

function Navbar() {

  const location = useLocation()
  const menuRef = useRef(null);
  const [open, changeState] = useState(false);

  useGSAP(() => {
    if (open === false) {
      gsap.to(menuRef.current, {
        left: "100%",
        duration: 0.3,
      })
    }
    else if (open === true) {
      gsap.to(menuRef.current, {
        left: "0%",
        duration: 0.3,
      })
    }
  }, [open])





  return (
    <div className=" container-fluid header flex font-semibold justify-center mt-4 pt-4 ">

      <header className="flex md:w-[90%] border-gray-700 bg-opacity-35 h-auto overflow-hidden items-center justify-between rounded-full py-3 px-10 md:bg-[#2C2B2B] bg-transparent mb-10"
      >
        <div className='md:pl-4 md:w-1/3 '>
          <Link to='/'
            className='inline-flex link-body-emphasis text-decoration-none items-center justify-evenly w-1/2'>
            <img src={logofull} alt='FCC' />
          </Link>
        </div>

        <ul className=' navlinks w-[50%] text-lg hidden lg:flex justify-between items-center pr-5'>
          <li><Link to='/'
            className={'nav-link  fs-5 head-navlink  cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/' ? ' border-solid border-[#1270ED] border-2 rounded-md text-[#1270ED] ' : '')}>Home</Link>
          </li>
          <li><Link to='/horizon'
            className={'nav-link  fs-5 head-navlink  cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/horizon' ? ' border-solid border-[#1270ED] border-2 rounded-md text-[#1270ED] ' : '')}>Horizon</Link>
          </li>
          <li><Link to='/schedule'
            className={'nav-link fs-5 head-navlink  cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/schedule' ? ' border-solid border-[#1270ED] border-2 rounded-md text-[#1270ED] ' : '')}>Events</Link>
          </li>
          <li><Link to='/resources'
            className={'nav-link  fs-5 head-navlink  cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/resources' ? ' border-solid border-[#1270ED] border-2 rounded-md text-[#1270ED] ' : '')}>Resources</Link>
          </li>
          <li><Link to='/team'
            className={'nav-link  fs-5 head-navlink  cursor-pointer px-3 py-2 fw-light ' + (location.pathname === '/team' ? ' border-solid border-[#1270ED] border-2 rounded-md text-[#1270ED] ' : '')}>Team</Link>
          </li>
        </ul>


        <button className='btn btn-primary lg:hidden' type='button' onClick={() => {
          changeState(true);
        }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-list'
            viewBox='0 0 16 16'>
            <path fillRule='evenodd'
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>

        <div className="fixed top-0 w-screen h-screen bg-black z-10 lg:hidden flex flex-col overflow-hidden left-[100%]"
          ref={menuRef}>
          <div className="flex justify-end bg-transparent w-full items-center px-[15%] p-[5%] cursor-pointer text-4xl mr-[2rem] ">
            <div
              onClick={() => {
                changeState(false)
              }}
            >X</div>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-[80%]  p-[10%] links ">
            <Link to="/"
              className={"text-4xl font-montserrat font-light" + (location.pathname === "/" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Home</Link>
            <Link to="/horizon"
              className={"text-4xl font-montserrat font-light" + (location.pathname === "/horizon" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Horizon</Link>
            <Link to="/schedule"
              className={"text-4xl font-montserrat font-light" + (location.pathname === "/schedule" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Events</Link>
            <Link to="/resources"
              className={"text-4xl font-montserrat font-light" + (location.pathname === "/resources" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Resources</Link>
            <Link to="/team"
              className={"text-4xl font-montserrat font-light" + (location.pathname === "/team" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Team</Link>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Navbar;