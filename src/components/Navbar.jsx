import { useState, useEffect } from "react";


import Logo from '../assets/fcc logo high res.png'

function Navbar() {
  const [pageState, setPageState] = useState(localStorage.getItem('pageState'))
  
  if (localStorage.getItem('pageState') !== window.location.pathname) {
    localStorage.setItem('pageState', window.location.pathname)
  }

  useEffect(() => {
    localStorage.setItem('pageState', pageState);
  }, [pageState]);

  const togglePage = (page) => {
    setPageState(page)
  }



  return (
    <nav className="sticky w-full h-[12vh] flex justify-between px-[4vw] z-50 bg-transparent">
      <div className=" h-full grid items-center">
        <img src={Logo} alt="FCC Logo" className="h-[3.5vw]" />
      </div>
      <ul className="links flex justify-between items-center gap-[2vw] text-[1vw] font-poppins font-light">
        <li><a onClick={() => togglePage("Home")}
               className={(pageState === "/" ? "text-blue-300" : "text-white")}
               href="/">Home</a></li>
        <li><a onClick={() => togglePage("Horizon")}
               className={(pageState === "/horizon" ? "text-blue-300" : "text-white")}
               href="/horizon">Horizon</a></li>
        <li><a onClick={() => togglePage("Schedule")}
               className={(pageState === "/schedule" ? "text-blue-300" : "text-white")}
               href="/schedule">Schedule</a></li>
        <li><a onClick={() => togglePage("Sponsors")}
               className={(pageState === "/sponsors" ? "text-blue-300" : "text-white")}
               href="/sponsors">Sponsors</a></li>
        <li><a onClick={() => togglePage("Team")}
               className={(pageState === "/team" ? "text-blue-300" : "text-white")}
               href="/team">Team</a></li>
      </ul>

    </nav>
  )
}

export default Navbar;
