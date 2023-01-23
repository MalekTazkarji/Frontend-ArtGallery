import React from "react";
import "../../components/hero-image/heroImage.css";
import HeroImage from "../../components/hero-image/HeroContainer.js";
import Art from "../HomeBody/ArtContainer";

const home = () => {
  return (<>
  <div className="bg-img">
    <div>
      <div className="hero-carousel">
        <HeroImage />
      </div>
      <body style={{backgroundColor:"rgb(225, 228, 232)"}}>
        <Art/>
        </body>
        
    </div>
        </div>
    </>
  );
};

export default home;


