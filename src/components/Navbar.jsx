import Logo from '../assets/fcc logo high res.png'

function Navbar() {
  return (
    <nav className="fixed w-full h-[10vh] flex justify-between px-[2vw]">
      <div className=" h-full">
        <img src={Logo} alt="FCC Logo" className="h-full" />
      </div>
      <ul>
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