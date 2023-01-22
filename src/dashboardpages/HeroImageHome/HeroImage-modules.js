import Axios  from "axios";
import React from "react";
import SideBar from "../../components/dashboard-sidebar/sidebar";
import "./heroDash.css";

export default function HeroImageD(props) {
  const handleDelete = async (id) => {
    await Axios.delete(`http://localhost:5000/hero/delete/${id}`)
      .then((response) => response.data)
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <>
    <SideBar/>
    <div className="postPlus">
      <a href="Dashboard/home/hero/post" id="plus">
          <i className="fa fa-plus-circle"></i>
        </a>
      </div>
      <div>
        <img src={props.image} alt="heroImage" className="imgHero" />
        <div>
          <button className="btnDelete"
            onClick={() => {
              handleDelete(props._id);
            }}
          >
            <i className="singlePostIcon far fa-trash-alt"></i>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
