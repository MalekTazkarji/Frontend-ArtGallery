import React from "react";
import { useState } from "react";
import { Dialog } from "@mui/material";
import "./artist.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import { margin } from "@mui/system";

export default function Artist({ image, bio, description, name ,_id ,}) {
  const [clicked, setclicked] = useState(false);
  const [arts,setArts]=useState([]);
  const [filterarts,setfilterarts]=useState([]);
 const getArts= async()=>{
const res=await axios.get(`${process.env.REACT_APP_FETCH}/arts`).catch((err)=>console.log(err))
const data= await res.data;
return data;
 }
useEffect(()=>{
  getArts().then((data)=>setArts(data))
},[])
function getartsid(){
  const batte5= arts.filter((items)=>items.artist._id === _id);
  setfilterarts(batte5);
  console.log(batte5);
  return batte5;
}

    return (<>
            <div className="page-container bg-image-artists" onClick={getartsid}>
        <div
          onClick={() => {
            setclicked(!clicked);
          }}
        >
          <img className="img" src={image} alt="kalb" />
        </div>

        <h3>{name}</h3>
     
      </div>
      
      <div className="Dialog">
        <Dialog
          open={clicked}
          onClose={() => {
            setclicked(!clicked);
          }}
        >
          {clicked && (
            <div className="dialog">
              <div>
                <button className="xbtn" onClick={()=>{setclicked(!clicked)}}>x</button>
                <img className="iimg" src={image} alt="artistimg" />
              </div>
              <h3 className="text">NAME:&ensp;{name}</h3>
             <h3 className="text">BIO:&ensp;{bio}</h3>
              <h3 className="text">DESCRIPTION:&ensp;{description}</h3>
          
            
            </div>)}
            <h2 style={{textDecoration:"underline",margin:"5px 0px 0px 10px",	color: "darkgoldenrod", font:" Times New Roman"}}>{name}'s Arts</h2>

            <div>
            {/* {arts && */}
            <div className="filtered Arts">

              {filterarts.map((art,index)=>{
                return(<div key={index}>

         <Link to="/artworks"> <img className="filteredimages" src={`${process.env.REACT_APP_FETCH}/${art.artimage}`}alt=".."/>  </Link>
                  <h1 className="filteredtitle"> {art.arttitle}</h1>
                </div>)
              })}
            </div>
            {/* } */}
            </div>
        </Dialog>
      </div>
    </>
  );
}
