import {useLocation} from "react-router-dom";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";

import gsap from "gsap";

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
    <div className="container-fluid header flex  justify-center p-10">
      <header className="flex w-[100%] h-auto overflow-hidden items-center justify-between bg-gradient-to-t from-blue-700 to-blue-500 rounded-[300px] px-[2%]">


        <div className=''>
          <a href='index.html'
             className='inline-flex link-body-emphasis text-decoration-none items-center justify-evenly'>
            <img src='src/assets/fcc logo high res.png' alt='FCC' width='40' height='40'/>
          </a>
        </div>

        <ul className=' navlinks w-[50%] text-xl hidden lg:flex justify-between items-center '>
          <li><a href='/'
                 className={'nav-link  fs-5 head-navlink font-montserrat cursor-pointer px-3 fw-light ' + (location.pathname === '/' ? ' border-solid border-2 rounded-[300px]' : '')}>Home</a>
          </li>
          <li><a href='/horizon'
                 className={'nav-link  fs-5 head-navlink font-montserrat cursor-pointer px-3 fw-light ' + (location.pathname === '/horizon' ? ' border-solid border-2 rounded-[300px]' : '')}>Horizon</a>
          </li>
          <li><a href=''
                 className={'nav-link fs-5 head-navlink font-montserrat cursor-pointer px-3 fw-light ' + (location.pathname === '/events' ? ' border-solid border-2 rounded-[300px]' : '')}>Events</a>
          </li>
          <li><a href=''
                 className={'nav-link  fs-5 head-navlink font-montserrat cursor-pointer px-3 fw-light ' + (location.pathname === '/resources' ? ' border-solid border-2 rounded-[300px]' : '')}>Resources</a>
          </li>
          <li><a href=''
                 className={'nav-link  fs-5 head-navlink font-montserrat cursor-pointer px-3 fw-light ' + (location.pathname === '/speakers' ? ' border-solid border-2 rounded-[300px]' : '')}>Speakers</a>
          </li>
          <li><a href=''
                 className={'nav-link  fs-5 head-navlink font-montserrat cursor-pointer px-3 fw-light ' + (location.pathname === '/teams' ? ' border-solid border-2 rounded-[300px]' : '')}>Team</a>
          </li>
        </ul>


        <button className='btn btn-primary lg:hidden' type='button' onClick={() => {
          changeState(true);
        }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-list'
               viewBox='0 0 16 16'>
            <path fillRule='evenodd'
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>

        <div className="fixed top-0 w-screen h-screen bg-black z-10 lg:hidden flex flex-col overflow-hidden left-[100%]"
             ref={menuRef}>
          <div className="flex justify-end bg-transparent w-full h-[20%] items-center p-[5%] cursor-pointer"
               onClick={() => {
                 changeState(false)
               }}>
            <div>X</div>
          </div>
          <div className="flex flex-col items-center justify-between w-full h-[80%]  p-[10%] links ">
            <a href="/"
               className={"text-5xl font-montserrat font-light" + (location.pathname === "/" ? " text-blue-300" : " text-white hover:text-blue-300")}>Home</a>
            <a href="/horizon"
               className={"text-5xl font-montserrat font-light" + (location.pathname === "/horizon" ? " text-blue-300" : " text-white hover:text-blue-300")}>Horizon</a>
            <a href=""
               className={"text-5xl font-montserrat font-light" + (location.pathname === "/schedule" ? " text-blue-300" : " text-white hover:text-blue-300")}>Schedule</a>
            <a href=""
               className={"text-5xl font-montserrat font-light" + (location.pathname === "/sponsors" ? " text-blue-300" : " text-white hover:text-blue-300")}>Sponsors</a>
            <a href=""
               className={"text-5xl font-montserrat font-light" + (location.pathname === "/team" ? " text-blue-300" : " text-white hover:text-blue-300")}>Team</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar;