import React from "react";
import "./sidebar.css";
// import { useState } from "react";
export default function SideBar() {
  return (
    <div className="SideBar">
      <h1 className="navbar-logo">
        Sun Flower Gallery<i className="fab fa-react"></i>
      </h1>
      <a href="/Dashboard" className="a">
        Home
      </a>

      <a href="/Dashboard/artworks" className="a">
        ArtWorks
      </a>

      <a href="/Dashboard/artists" className="a">
        Artists
      </a>

      <a href="/Dashboard/aboutus" className="a">
        Aboutus
      </a>
      <button className="logout" type="submit" onClick={() => {
        localStorage.clear()
        dispatchEvent({type:"CLEAR"})
      }}>
        Logout 
      </button>
    </div>
  );
}
