import React from "react";

import { useState } from "react";
import axios from "axios";
import "./DashAbout.css";
import SideBar from "../../components/dashboard-sidebar/sidebar";
import About from "./AboutusModule";

export default function AboutusPost() {
  const [abouttextt, setaboutustext] = useState("");
  const [visiontextt, setvisiontext] = useState("");
  const [aboutUsID, setAboutUsID] = useState("");

  console.log("id", aboutUsID);
  const handleSubmit = async () => {
    console.log("from handle submit");
    // const data = new FormData();
    // data.append("aboutustext", abouttextt);
    // data.append("visiontext", visiontextt);
    const data = {
      aboutustext: abouttextt,
      visiontext: visiontextt,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_FETCH}/aboutus/629def19791a26a1b128a694`,
        requestOptions
      );
      const d = await response.json();
      console.log(d);
    } catch (err) {
      console.log(err);
    }
  };
  
  axios
    .get("http://localhost:5000/aboutus/629def19791a26a1b128a694")
    .then((res) => {
    
      setaboutustext(res.data[0].aboutustext);
      setvisiontext(res.data[0].visiontext);
      setAboutUsID(res.data[0]._id);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <div className="dashcontainer">
        <SideBar />
      

      <div className="thetext">
        <textarea
          type="string"
          placeholder="About Us..."
          className="abouttext"
          autoFocus={true}
          defaultValue={abouttextt}
          onChange={(e) => {
            setaboutustext(e.target.value);
          }}
        />
        
        <button className="abt-btn" type="submit" onClick={handleSubmit}>
          post
        </button>
 
        <textarea
          type="string"
          placeholder="Vision.."
          className="vision"
          autoFocus={true}
          defaultValue={visiontextt}
          onChange={(e) => {
            setvisiontext(e.target.value);
          }}
        />
        <button className="abt-btn" type="submit" onClick={handleSubmit}>
          post
        </button>
        </div>
      </div>
    </>
  );
}
