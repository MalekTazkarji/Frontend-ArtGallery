import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Art from "../Artworks/artworksModule";
import "./bodyArtworks.css"

export default function Artworks() {
  const [listOfArt, setListOfArt] = useState([]);
  const[filterart,setfilterart]=useState([])
  const sendRequest = async () => {
    try{
    const res = await Axios.get(`${process.env.REACT_APP_FETCH}/arts`);
    const data = await res.data;
    setListOfArt(data.data)
    return data;
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest()
  }, []);

  return (
    <>
    <div className="overfloww">
    <div className="background"> </div>
    <div className="bg-img-artworks">    

    <div className="cardzz">
        {filterart?.map((art) => {
          return (
            <Art
              key={art._id}
              arttitle={art.arttitle}
              artimage={`http://localhost:5000/${art.artimage}`}
              artprice={art.artprice}
              artdesc={art.artdesc}
            />
          );
        })}
      </div>
      <div className="cardzz">
        {listOfArt?.map((art) => {
          return (
            <Art
              key={art._id}
              arttitle={art.arttitle}
              artimage={`${process.env.REACT_APP_FETCH}/${art.artimage}`}
              artprice={art.artprice}
              artdesc={art.artdesc}
            />
          );
        })}
      </div>
    
      </div>
      </div>
    </>
  );
}
