import { useState, useEffect } from "react";
import Axios from "axios";
import HeroImage from "./HeroImage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  "./heroImage.css"

export default function HeroContainer() {
  const [heroImage, setHeroImage] = useState([]);
  
  const Request = async () => {
    try{
    const response = await Axios.get(`${process.env.REACT_APP_FETCH}/heroAll`);
    const res = await response.data;
    setHeroImage(res.data);
    }catch(err){
      console.log(err);
    }
   }
  useEffect(() => {
    Request()
  }, []);
  return (
    <div>
      <Carousel
       autoPlay="true"
       interval="3000" 
       transitionTime="1000" 
       className="hero-carousel">
      {heroImage?.map((image,index) => {
        return <HeroImage 
        key={index}
        _id={image._id}
        image={`${process.env.REACT_APP_FETCH}/${image.heroimg}`} />;
      })}
      </Carousel>
    </div>
  );
}
