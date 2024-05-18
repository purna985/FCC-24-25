import Logo from '../assets/fcc logo high res.png'

function Navbar() {
  return (
    <nav className="fixed w-full h-[20vh] bg-black">
      <div>
        <img src={Logo} alt="FCC Logo" />
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