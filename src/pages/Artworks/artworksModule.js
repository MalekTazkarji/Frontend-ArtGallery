import React from "react";
import { useState } from "react";
import "./artworks.css";
import { Dialog } from "@mui/material";

export default function Art({ arttitle, artimage, artprice, artdesc }) {
  const [click, setclick] = useState(false);
  return (
    <>
      <div className="cardz">
        <div
          onClick={() => {
            setclick(!click);
          }}
          className="card-imagez"
        >
          <img className="imgonboard" src={artimage} alt="artImage" />
        </div>
        <div className="card-titlez">
          <h3 className="h33">{arttitle}</h3>
          <h3 className="h33">{artprice}</h3>
        </div>
      </div>
   
     
        <Dialog
          open={click}
          onClose={() => {
            setclick(!click);
          }}
        >
           {click && ( <div className="pagez">
            <div className="dialog">
              <div>
                <button
                  className="xbtn"
                  onClick={() => {
                    setclick(!click);
                  }}
                >
                  x
                </button>
                <img className="imgart" src={artimage} alt="artImg" />
              </div>
              <h3 className="text">TITLE:&ensp;{arttitle}</h3>
              <h3 className="text">PRICE:&ensp;{artprice}</h3>
             <div className="desc"><h3 className="text">DESCRIPTION:&ensp;{artdesc}</h3></div>
            </div>
            </div>   )}
        </Dialog>
    
    </>
  );
}
