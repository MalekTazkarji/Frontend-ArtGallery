import React, { useState } from "react";
// import SideBar from "../../components/dashboard-sidebar/sidebar";
// import Footer from "../../components/Footer/footer";

import axios from "axios";

export default function About({ aboutustext, visiontext, }) {
  const [abouttextt, setaboutustext] = useState(aboutustext);
  const [visiontextt, setvisiontext] = useState(visiontext);

  const [edit, setEdit] = useState(false);

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("aboutustext", abouttextt);
    data.append("visiontext", visiontextt);

    axios
      .put(`${process.env.REACT_APP_FETCH}/`, data,{headers: {authorization: `Bearer ${localStorage.getItem('token')}`}})
      .catch((err) => console.log(err));
  };
  return (
     
    <div className="about">
      
        <div className="aboutus">
          <h1 className="h">About Us</h1>
          <p className="at">{abouttextt}</p>
        </div>
        <div className="visiontxt">
        <h1 className="h">Our Vision</h1>
          <p className="at">{visiontextt}</p>
     
        </div>
    </div>
  );
}
