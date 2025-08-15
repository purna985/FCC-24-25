import { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileText, Link as LinkIcon, Lightbulb, BriefcaseBusiness, Brain, Sparkles, BookMarkedIcon, BookHeadphones } from "lucide-react";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { ChevronDown } from "lucide-react"; // add this with your other imports


const Navbar = ({
  items,
  animationTime = 600,
  particleCount = 20,
  particleDistances = [120, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const [dropdownCloseTimeout, setDropdownCloseTimeout] = useState(null);

  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(() => {
    const currentPath = location.pathname;
    const foundIndex = items.findIndex((item) => item.href === currentPath);
    return foundIndex !== -1 ? foundIndex : 0;
  });

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (
    distance,
    pointIndex,
    totalPoints
  ) => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };
  const createParticle = (
    i,
    t,
    d,
    r
  ) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };
  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // do nothing
          }
        }, t);
      }, 30);
    }
  };
  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };
  const handleDropdownClick = (e, index, subItem) => {
    e.stopPropagation();
    if (subItem.href === "#") return;
    setActiveIndex(index);
  };
  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };
  const handleKeyDown = (
    e,
    index
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          { currentTarget: liEl },
          index
        );
      }
    }
  };
  // This useEffect will react to changes in the React Router location.pathname
  useEffect(() => {
    // Recalculate active index whenever the route changes
    const currentPath = location.pathname;
    const newActiveIndex = items.findIndex((item) => item.href === currentPath);

    // Only update if the new index is different from the current activeIndex
    // This prevents unnecessary re-renders or animation re-triggers if the route hasn't genuinely changed active item
    if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    } else if (newActiveIndex === -1 && currentPath === "/" && activeIndex !== 0) {
      // Special case for root path if it's not explicitly in items or doesn't match exactly
      setActiveIndex(0);
    }

    // --- Existing logic for positioning the active indicator ---
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex]; // Use activeIndex from state
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    // Resize Observer for responsive positioning
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex, location.pathname, items]); // Dependencies: activeIndex for visual updates, location.pathname for route changes, items if they can change dynamically

  return (
    <>
      {/* This effect is quite difficult to recreate faithfully using Tailwind, so a style tag is a necessary workaround */}
      <style>
        {`
          :root {
            --color-1: #2A2A72; 
            --color-2: #6A05A1; 
            --color-3: #9966CC; 
            --color-4: #ffffff; 

            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
          }
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.text {
            color: white;
            transition: color 0.3s ease;
          }
          .effect.text.active {
            color: black;
          }
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: lighten;
          }
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: black;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease 1 -350ms;
          }
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) ease 1 -350ms;
          }
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          li.active {
            color: black;
            text-shadow: none;
          }
          li.active::after {
            opacity: 1;
            transform: scale(1);
          }
          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: white;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
        `}
      </style>
      <div className="relative px-2" ref={containerRef}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-4">
          <Link to="/" className="cursor-pointer flex items-center gap-2">
            <img src="fcc-logo-new.png" alt="Logo" className="h-8 w-auto" />
            <div className="text-center md:text-left leading-tight text-white text-sm">
              <div className="font-semibold font-Label-Label-3-fontFamily">Finance & Consulting Club</div>
              <div className="font-Body-3-fontFamily">IIT Hyderabad</div>
            </div>
          </Link>

          <nav className="flex relative mt-2 md:mt-0">
            <ul
              ref={navRef}
              className="flex flex-wrap justify-center gap-4 md:gap-8 list-none p-0 px-4 m-0 relative z-[3] text-white font-schibsted"
              style={{ textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)" }}
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`py-2 px-4 rounded-full relative cursor-pointer transition duration-300 ease text-white ${activeIndex === index ? "active" : ""}`}
                  onClick={(e) => !item.subItems && handleClick(e, index)}
                  onMouseEnter={() => {
                    if (item.subItems) {
                      // Clear any pending close timeout
                      if (dropdownCloseTimeout) {
                        clearTimeout(dropdownCloseTimeout);
                        setDropdownCloseTimeout(null);
                      }
                      setHoveredDropdown(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.subItems) {
                      // Set a timeout before closing
                      const timeout = setTimeout(() => {
                        setHoveredDropdown(null);
                      }, 300); // 300ms delay before closing
                      setDropdownCloseTimeout(timeout);
                    }
                  }}
                >
                  {item.subItems ? (
                    <div className="relative flex items-center">
                      <span
                        className={`font-schibsted font-semibold text-[14px] tracking-[0.2px] leading-100p px-2 py-1 rounded-full transition-colors duration-200 ${activeIndex === index ? "text-[#4e56d3]" : "text-white"
                          }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`ml-1 cursor-pointer bg-transparent-800 px-1 py-1 rounded-full transition-all duration-300 ease-in-out transform ${hoveredDropdown === index ? "rotate-180" : "rotate-0"
                          } ${(activeIndex === index || hoveredDropdown === index) ? "text-[#4e56d3]" : "text-white"
                          } hover:bg-gray-800`}
                        onMouseEnter={() => setHoveredDropdown(index)}
                        onMouseLeave={() => setHoveredDropdown(null)}
                      />

                      {hoveredDropdown === index && (
                        <div
                          className="absolute left-0 top-full mt-3 min-w-[200px] bg-black/95 border border-gray-800 rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-sm"
                          onMouseEnter={() => {
                            // Keep open when mouse enters dropdown
                            if (dropdownCloseTimeout) {
                              clearTimeout(dropdownCloseTimeout);
                              setDropdownCloseTimeout(null);
                            }
                          }}
                          onMouseLeave={() => {
                            // Close when mouse leaves dropdown
                            const timeout = setTimeout(() => {
                              setHoveredDropdown(null);
                            }, 200);
                            setDropdownCloseTimeout(timeout);
                          }}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className={`block px-5 py-3 font-schibsted text-sm text-gray-300 transition-all duration-200 ease-out hover:bg-gray-800 hover:text-white ${location.pathname === subItem.href ? "bg-gray-800 text-white" : ""
                                }`}
                              onClick={(e) => handleDropdownClick(e, index, subItem)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-schibsted font-semibold outline-none  text-[14px] tracking-[0.2px] leading-100p px-2 py-1 rounded-full transition-colors duration-200 ${activeIndex === index ? "text-[#4e56d3]" : "text-white"
                        }`}
                      aria-current={activeIndex === index ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default Navbar;