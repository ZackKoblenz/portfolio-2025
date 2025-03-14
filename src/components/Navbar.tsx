import logo from '../assets/logo.png'
import React, { useCallback, useEffect, useRef, useState } from 'react'

function Navbar() {

  return (
    <>
      <div className="Navbar">
          <div>
            <img src={logo} width="50px" alt="Koblenz Media Logo" />
          </div>
          <nav>
            <ul>
              <li><a>Home</a></li>
              <li><a>About Me</a></li>
              <li><a>Projects</a></li>
            </ul>
          </nav>
          <div className="social-icons">
              <a href="#">🐦</a>
              <a href="#">🦋</a>
              <a href="#">▶️</a>
          </div>
      </div>
    <div className="scroll-bar" id="scroll-bar"></div>
    </>
  )
}

export default Navbar
