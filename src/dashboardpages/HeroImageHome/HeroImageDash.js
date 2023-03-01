import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "../../components/dashboard-sidebar/sidebar";
import HeroImageD from "./HeroImage-modules";
import "./heroDash.css";
import VisitorsCount from "./visitorscount";

export default function DashHeroImage() {
  const [HeroImage, setHeroImage] = useState([]);

  const sendRequest = async () => {
    const res = await Axios.get(`${process.env.REACT_APP_FETCH}/heroAll`).catch(
      (err) => {
        console.log(err);
      }
    );
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setHeroImage(data.data));
  }, []);

  return (
    <>
      <SideBar />
      <div className="visitors">
      <VisitorsCount />
      </div>

      <div className="eachHero">
        {HeroImage.map((heroimg, index) => {
          return (
            <HeroImageD
              key={index}
              _id={heroimg._id}
              image={`${process.env.REACT_APP_FETCH}/${heroimg.heroimg}`}
            />
          );
        })}
      </div>
    </>
  );
}
