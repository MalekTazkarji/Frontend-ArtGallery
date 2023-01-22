import React from "react";
import "../../components/hero-image/heroImage.css";
import HeroImage from "../../components/hero-image/HeroContainer.js";
import Art from "../HomeBody/ArtContainer";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/Navbar";
const home = () => {
  return (<>
  <div className="bg-img">
  <Navbar/>
    <div>
      <div className="hero-carousel">
        <HeroImage />
      </div>
      <body>
        <Art/>
        </body>
        
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default home;


