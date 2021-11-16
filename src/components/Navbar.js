import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar,setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)
  
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <a to="/" className="navbar-logo" onClick={closeMobileMenu}>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/#" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#o-nas"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                O Nas
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#menu"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#godziny-otwarcia"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Godziny Otwarcia
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
