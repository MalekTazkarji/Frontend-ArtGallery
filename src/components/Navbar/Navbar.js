
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "./Button";
import "./Navbar.css";


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  // const [data, setData] = useState([]);


// const pull_data_button = (json)=> {
//   console.log("from button: " , pull_data_button)
// }


// const btn_data = (data_btn) => {
//   console.log("data_btn: ", data_btn)
// };
  


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
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>


    </nav>
  );
};

export default Navbar;
