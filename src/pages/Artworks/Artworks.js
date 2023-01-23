import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import Art from "../Artworks/artworksModule";
import "./bodyArtworks.css"

export default function Artworks() {
  const [listOfArt, setListOfArt] = useState([]);
  const[filterart,setfilterart]=useState([])
  const sendRequest = async () => {
    const res = await Axios.get(`${process.env.REACT_APP_FETCH}/arts`).catch((err) =>
      console.log(err)
    );
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setListOfArt(data));
  }, []);
function getArt(letter){
  const getbytitle=listOfArt?.filter((art)=>
    art.arttitle.toUpperCase().startsWith(letter)
  )
  setfilterart(getbytitle);
  return getbytitle;
}




  return (
    <>
    <div className="overfloww">
    <div className="background"> </div>
    <div className="bg-img-artworks">    
    <div className="letters">
          <button className="button" onClick={(e) => getArt("A")}>
            A
          </button>
          <button className="button" onClick={(e) => getArt("B")}>
            B
          </button>
          <button className="button" onClick={(e) => getArt("C")}>
            C
          </button>
          <button className="button" onClick={(e) => getArt("D")}>
            D
          </button>
          <button className="button" onClick={(e) => getArt("E")}>
            E
          </button>
          <button className="button" onClick={(e) => getArt("F")}>
            F
          </button>
          <button className="button" onClick={(e) => getArt("G")}>
            G
          </button>
          <button className="button" onClick={(e) => getArt("H")}>
            H
          </button>
          <button className="button" onClick={(e) => getArt("I")}>
            I
          </button>
          <button className="button" onClick={(e) => getArt("J")}>
            J
          </button>
          <button className="button" onClick={(e) => getArt("K")}>
            K
          </button>
          <button className="button" onClick={(e) => getArt("L")}>
            L
          </button>
          <button className="button" onClick={(e) => getArt("M")}>
            M
          </button>
          <button className="button" onClick={(e) => getArt("N")}>
            N
          </button>
          <button className="button" onClick={(e) => getArt("O")}>
            O
          </button>
          <button className="button" onClick={(e) => getArt("P")}>
            P
          </button>
          <button className="button" onClick={(e) => getArt("Q")}>
            Q
          </button>
          <button className="button" onClick={(e) => getArt("R")}>
            R
          </button>
          <button className="button" onClick={(e) => getArt("S")}>
            S
          </button>
          <button className="button" onClick={(e) => getArt("T")}>
            T
          </button>
          <button className="button" onClick={(e) => getArt("U")}>
            U
          </button>
          <button className="button" onClick={(e) => getArt("E")}>
            E
          </button>
          <button className="button" onClick={(e) => getArt("W")}>
            W
          </button>
          <button className="button" onClick={(e) => getArt("X")}>
            X
          </button>
          <button className="button" onClick={(e) => getArt("Y")}>
            Y
          </button>
          <button className="button" onClick={(e) => getArt("Z")}>
            Z
          </button>
        </div>
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
        {listOfArt.map((art) => {
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
