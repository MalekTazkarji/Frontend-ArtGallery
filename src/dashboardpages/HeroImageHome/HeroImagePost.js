import Axios  from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/dashboard-sidebar/sidebar";
import "./heroDash.css"

export default function HeroImagePost() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("heroimg", image);

    Axios.post(`${process.env.REACT_APP_FETCH}/hero/post`, data).catch((err) =>
    //   console.log(err);
      console.log("data: ", data)
    );
    navigate("/dashboard");
  };

  return (
      <>
      <SideBar/>
    <div>
    {image && (
    <img className="postImgg" src={URL.createObjectURL(image)} alt="postHeroImg" />
      )}
      <form onSubmit={handleSubmit} className="formHero">
          <div className="cont">
          <h2 className="small-text"> Add a new Hero Image</h2>
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"> Add Image</i>
        </label>
        <input name="file"type="file"id="fileInput"style={{display:"none"}} onChange={(e)=>{setImage(e.target.files[0])}}/>
        <button type="submit" className="submitBtn"> Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}
