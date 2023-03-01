import React from "react";
import SideBar from "../../components/dashboard-sidebar/sidebar";
import Axios from "axios";
import { useEffect, useState } from "react";
import Art from "./artworks-modules";

export default function Artworks() {
  const [listOfArt, setListOfArt] = useState([]);
  // const [filteredsearch, setfilteredsearch] = useState("");
  // const [searchparam] = useState(["arttitle"]);
  const sendRequest = async () => {
    const res = await Axios.get(`${process.env.REACT_APP_FETCH}/arts`).catch((err) =>
      console.log(err)
    );
    const data = await res.data;
    setListOfArt(data.data);
  };
  useEffect(() => {
    sendRequest();
  }, []);
  

  return (
    <>
      <SideBar />
      <div className="pls">
       
        <a href="/Dashboard/artworks/post" id="plus">Post
          <i className="fa fa-plus-circle"></i>
        </a>
      </div>
     
      <div className="cardss">
        {listOfArt.map((art, index) => {
          return (
            <Art
              key={index}
              _id={art._id}
              arttitle={art.arttitle}
              artimage={`${process.env.REACT_APP_FETCH}/${art.artimage}`}
              artprice={art.artprice}
              artdesc={art.artdesc}
              // artistid={art.artist._id}
            />
          );
        })}
      </div>
    </>
  );
}
