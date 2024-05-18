import Logo from '../assets/fcc logo high res.png'

function Navbar() {
  return (
    <nav className="fixed w-full h-[12vh] flex justify-between px-[4vw]">
      <div className=" h-full grid items-center">
        <img src={Logo} alt="FCC Logo" className="h-[3.5vw]" />
      </div>
      <ul className="flex justify-between items-center gap-[2vw] text-[1vw] font-poppins font-light">
        <li><a href="/">Home</a></li>
        <li><a href="/horizon">Horizon</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/team">Team</a></li>
      </ul>

    </nav>
  )
}

export default Navbar;