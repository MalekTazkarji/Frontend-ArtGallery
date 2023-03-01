import React, { useState, useEffect } from "react";
// import sunflower from "../../Imgs/sf1.png";
import "./About.css";
import axios from "axios";
import Aboutmodule from "../../dashboardpages/About/AboutusModule";
export default function DashAbout() {
  const [About, setAbout] = useState([]);

  const sendrequest = async () => {
    try{
    const res = await axios.get(`${process.env.REACT_APP_FETCH}/aboutus`);
    const data = await res.data;
    setAbout(data.data);
    }catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    sendrequest();
  }, []);

  return (
    <>
    <div className="bg-img-aboutus">
      <div className="bnr">
      </div>
      <div className="abtcontainer">
        {About?.map((about, index) => {
          return (
            <Aboutmodule
              key={index}
              _id={about._id}
              aboutustext={about.aboutustext}
              visiontext={about.visiontext}
            />
          );
        })}
      </div>
      </div>
    </>
  );
}
