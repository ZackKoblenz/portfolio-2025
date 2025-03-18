import logo from '../assets/logo.png'
import github from '../assets/github-mark-white.svg'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Scrollbar from './Scrollbar.tsx'

function Navbar() {

    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setShowNavbar((prev) => {
        if (scrollTop < lastScrollY.current) {
          return true; // Show navbar when scrolling up
        } else if (scrollTop > lastScrollY.current && scrollTop > 50) {
          return false; // Hide navbar when scrolling down
        }
        return prev;
      });

      lastScrollY.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    
    <Scrollbar />
      <div className={`Navbar sticky top-0 h-82px left-0 w-full bg-black text-white p-4 z-0 
        transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
          <div>
            <img src={logo} width="50px" alt="Koblenz Media Logo" />
          </div>
          <nav>
            {/* <ul>
              <li><a>Home</a></li>
              <li><a>About Me</a></li>
              <li><a>Full Projects</a></li>
              <li><a>Small Projects</a></li>
            </ul> */}
          </nav>
          <div className="social-icons">
              <a href="https://github.com/ZackKoblenz/"><img src={github} className="h-5"></img></a>
          </div>
      </div>
    {/* <div ref={scrollBar} className="scroll-bar" id="scroll-bar"></div> */}
    
    </>
  )
}

export default Navbar
