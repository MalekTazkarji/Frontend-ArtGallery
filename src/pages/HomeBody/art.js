import React from "react";
import "../HomeBody/art.css"

export default function Art({ arttitle, artimage, artprice, artdesc }) {
  console.log("artimage: ", artimage);
  return (
    <div className="card">
      <div className="card-image">
        <img src={artimage} alt="artImage" />
      </div>
      <div className="card-title">
        <h3>{arttitle}</h3>
        <p>{artprice}</p>
        </div>
    </div>
  );
}
// card-descrition change to card-title
