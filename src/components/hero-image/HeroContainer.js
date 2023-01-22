import { useState, useEffect } from "react";
import Axios from "axios";
import HeroImage from "./HeroImage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  "./heroImage.css"

export default function HeroContainer() {
  const [heroImage, setHeroImage] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/heroAll").then((res) =>
      setHeroImage(res.data).catch((err) => console.log(err))
    );
  }, []);
 
  return (
    <div>
      <Carousel
       autoPlay="true"
       interval="3000" 
       transitionTime="1000" 
       className="hero-carousel">
      {heroImage.map((image,index) => {
        return <HeroImage 
        key={index}
        _id={image._id}
        image={`http://localhost:5000/${image.heroimg}`} />;
      })}
      </Carousel>
    </div>
  );
}
