import React, { useState, useEffect } from "react";
// import sunflower from "../../Imgs/sf1.png";
import Navbar from "../../components/Navbar/Navbar";
import "./Aboutus.css";
import Footer from "../../components/Footer/footer";
import axios from "axios";
import Aboutmodule from "../../dashboardpages/About/AboutusModule";
export default function DashAbout() {
  const [About, setAbout] = useState([]);

  const sendrequest = async () => {
    const res = await axios
      .get("http://localhost:5000/aboutus")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendrequest().then((data) => setAbout(data));
  }, []);

  return (
    <>
    <div className="bg-img-aboutus">
      <Navbar />
      <div className="bnr">
      </div>
      <div className="abtcontainer">
        {About.map((about, index) => {
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
      <Footer />
      </div>
    </>
  );
}
