import { useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import closeIcon from '@/assets/home/closeIcon.svg'
import logofull from '../assets/fcc-logo-full.png'

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
    <div className="relative container-fluid header flex justify-center mt-4 z-[100]   ">

      <header className="flex w-full  bg-opacity-35 h-auto overflow-hidden items-center justify-between py-3 px-10  bg-transparent mb-10  shadow-sm shadow-slate-700 "
      >
        <div className='md:pl-4 md:w-[40%] '>
          <Link to='/'
            className='inline-flex link-body-emphasis text-decoration-none items-center justify-evenly w-1/2 md:w-1/3'>
            <img src={logofull} alt='FCC' />
          </Link>
        </div>

        <ul className=' navlinks w-[50%] text-md hidden lg:flex justify-between items-center pr-5'>
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

        <div className="fixed top-0 w-screen h-screen bg-black z-[120] lg:hidden justify-center flex flex-col overflow-hidden left-[100%]"
          ref={menuRef}>

          <div className="fixed top-0 flex justify-end bg-transparent w-full items-center px-[15%] pt-[10%] cursor-pointer text-4xl mr-[2rem] ">
            <div
              onClick={() => {
                changeState(false)
              }}
            >
              <img src={closeIcon} alt="" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 w-full h-[60%]  p-[10%] links ">
            <Link to="/"
              className={"text-3xl" + (location.pathname === "/" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Home</Link>
            <Link to="/horizon"
              className={"text-3xl" + (location.pathname === "/horizon" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Horizon</Link>
            <Link to="/schedule"
              className={"text-3xl" + (location.pathname === "/schedule" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Events</Link>
            <Link to="/resources"
              className={"text-3xl" + (location.pathname === "/resources" ? " text-blue-300" : " text-white hover:text-blue-300")}
              onClick={() => {
                changeState(false)
              }}
            >Resources</Link>
            <Link to="/team"
              className={"text-3xl" + (location.pathname === "/team" ? " text-blue-300" : " text-white hover:text-blue-300")}
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