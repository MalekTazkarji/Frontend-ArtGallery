import React from "react";
import "./heroImage.css"

export default function HeroImage({ image }) {
  console.log(image);
  return (
    <div>
      <div>
        <img src={image} alt="heroImage" className="hero-carousel fade" />
      </div>
    </div>
  );
}
