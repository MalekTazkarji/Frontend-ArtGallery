
import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [clicked, setClicked] = useState(false);

const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <div className="react-title">
        <h1 className="navbar-logo">
          Sun Flower Gallery<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <ul className={clicked ? "nav-menu-active" : "nav-menu"}>
            <li>
            <NavLink
              to={"/"} 
              exact="true"

              className={({ isActive }) =>
                isActive ? "active-link" : "not-active"
              }
              end
            >
              <a>  Home</a>
            </NavLink>
            </li>
            <li>
            <NavLink
              to={"/artists"} 
              exact="true"

              className={({ isActive }) =>
                isActive ? "active-link" : "not-active"
              }
              end
            >
              <a>
              Artists
              </a>
            </NavLink>
            </li>
            <li>
            <NavLink
              to={"/artworks"} 
              exact="true"

              className={({ isActive }) =>
                isActive ? "active-link" : "not-active"
              }
              end
            >
              <a>
              Artworks
              </a>
            </NavLink>
            </li>
            <li>
            <NavLink
              to={"/aboutus"} 
              exact="true"

              className={({ isActive }) =>
                isActive ? "active-link" : "not-active"
              }
              end
            >
              <a>
              Aboutus
              </a>
            </NavLink>
            </li>
      </ul>


    </nav>
  );
};

export default Navbar;
