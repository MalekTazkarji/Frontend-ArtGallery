import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-icons">
        <li>
          <a className="fb" href="http://wwww.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="insta">
          <a className="insta" href="http://wwww.Instagram.com">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
        </li>
        <li >
          <a className="twit" href="http://wwww.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
