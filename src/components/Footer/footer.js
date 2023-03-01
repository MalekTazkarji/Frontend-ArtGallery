import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    // <div className="footer">
    //   <ul className="social-icons">
    //     <li>
    //       <a className="fb" href="http://wwww.facebook.com">
    //         <FontAwesomeIcon icon={faFacebook} />
    //       </a>
    //     </li>
    //     <li className="insta">
    //       <a className="insta" href="http://wwww.Instagram.com">
    //         {" "}
    //         <FontAwesomeIcon icon={faInstagram} />{" "}
    //       </a>
    //     </li>
    //     <li >
    //       <a className="twit" href="http://wwww.twitter.com">
    //         <FontAwesomeIcon icon={faTwitter} />
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    // <div style={{backgroundColor:"red",height:"200px"}}>
    <footer className="footer" >
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
  
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="artists">Artists</a></li>
      <li className="menu__item"><a className="menu__link" href="/artworks">Artworks</a></li>
      <li className="menu__item"><a className="menu__link" href="/aboutus">Aboutus</a></li>
    </ul>
    <p style={{opacity: "0.75"}}>Sun Flower Gallery</p>
  </footer>
  // </div>
  );
};

export default Footer;
