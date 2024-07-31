import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="footer " >
      <div className="flex bg-[#0a3b83] p-6 ">

        {/* Logo */}
        <div className="flex w-1/4">
          <img className="w-1/3" src="" alt="" />
          <div className="w-2/3" >
            <h1>Finance & Consulting Club</h1>
            <h2>IIT Hyderabad</h2>
          </div>
        </div>

        {/* Socials */}
        <div className="w-1/5 flex flex-col ">
          <Link to='/' >Insta</Link>
          <Link to='/' >Insta</Link>
          <Link to='/' >Insta</Link>
          <Link to='/' >Insta</Link>
        </div>
        <div className="w-1/5">
          <h1>About Us</h1>
          <ul>
            <li>FCC</li>
            <li>FCC</li>
            <li>FCC</li>
            <li>FCC</li>
            <li>FCC</li>
          </ul>
        </div>
        <div className="w-1/5">
          <h1>Useful Links</h1>
          <ul>
            <li>FCC</li>
            <li>FCC</li>
            <li>FCC</li>
            <li>FCC</li>
            <li>FCC</li>
          </ul>
        </div>

        <div className="w-1/5" >
          <h1>Contact Us</h1>
          <p>IIT Hyderabad, sangareddy,
            Telangana, India - 502285</p>
            <a>fcc@gymkhana.iith.ac.in</a>
        </div>
      </div>
      <div>@2024 Copyright </div>
    </div>
  )
}

export default Footer;