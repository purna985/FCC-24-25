import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import closeIcon from "@/assets/home/closeIcon.svg";
import logofull from "../assets/fcc-logo-full.png";

function Navbar() {
  const location = useLocation();
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useGSAP(() => {
    gsap.to(menuRef.current, {
      left: isMenuOpen ? "0%" : "100%",
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    {
      path: "/horizon",
      label: "Horizon",
      subLinks: [
        { path: "/horizon/", label: "About" },
        { path: "/horizon/schedule", label: "Schedule" },
        { path: "/horizon/partners", label: "Partners" },
      ],
    },
    {
      path: "/schedule",
      label: "Events",
    },
    {
      path: "/resources",
      label: "Resources",
      subLinks: [
        { path: "/resources/", label: "All Resources" },
        { path: "/resources/newsletters", label: "Newsletters" },
        { path: "/resources/finance-resources", label: "Finance" },
        { path: "/resources/consulting-resources", label: "Consulting" },
        { path: "/resources/product-resources", label: "Product Management" },
      ],
    },
    { path: "/team", label: "Team" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative container-fluid header flex justify-center z-[100]">
      <header className="flex w-full bg-opacity-35 h-auto items-center justify-between py-5 px-10 bg-transparent mb-10 shadow-sm shadow-slate-700">
        {/* Logo */}
        <div className="md:pl-4 md:w-[40%]">
          <Link to="/" className="inline-flex items-center justify-evenly w-1/2 md:w-1/3">
            <img src={logofull} alt="FCC Logo" className="w-full" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="navlinks w-[50%] text-md hidden lg:flex justify-between items-center pr-5">
          {navLinks.map((link, index) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`nav-link fs-5 head-navlink cursor-pointer px-3 py-2 fw-light ${
                  isActive(link.path)
                    ? "border-solid border-[#21A1F2] border-2 rounded-md text-[#21A1F2]"
                    : "text-white hover:text-[#21A1F2]"
                }`}
                onClick={() => toggleDropdown(index)}
              >
                {link.label}
              </Link>
              {/* Dropdown for Desktop */}
              {link.subLinks && (
                <ul className="absolute w-48 mt-2 top-full left-0 bg-[#131313] p-2 rounded-md shadow-lg hidden group-hover:block border-[1px] border-blue-500">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.path}>
                      <Link
                        to={subLink.path}
                        className="w-full block px-4 py-2 text-white hover:text-[#21A1F2] hover:bg-[#1a1a1a] rounded-md"
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="btn btn-primary lg:hidden"
          type="button"
          onClick={handleMenuToggle}
          aria-label="Open Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
            </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className="fixed top-0 left-[100%] w-screen h-screen bg-black z-[120] lg:hidden flex flex-col items-center justify-center"
          ref={menuRef}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          {/* Close Button */}
          <div className="absolute top-5 right-5 cursor-pointer text-4xl">
            <button onClick={handleMenuToggle} aria-label="Close Menu">
              <img src={closeIcon} alt="Close Menu" className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center justify-center gap-10 w-full h-full">
            {navLinks.map((link, index) => (
              <div key={link.path} className="text-center">
                <Link
                  to={link.path}
                  className={`text-3xl ${
                    isActive(link.path) ? "text-blue-300" : "text-white hover:text-blue-300"
                  }`}
                  onClick={() => {
                    if (!link.subLinks) {
                      handleMenuToggle();
                    } else {
                      toggleDropdown(index);
                    }
                  }}
                  role="menuitem"
                >
                  {link.label}
                </Link>
                {/* Dropdown for Mobile */}
                {link.subLinks && openDropdown === index && (
                  <ul className="mt-2">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.path}>
                        <Link
                          to={subLink.path}
                          className="block text-xl text-white hover:text-blue-300 py-1"
                          onClick={handleMenuToggle}
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;