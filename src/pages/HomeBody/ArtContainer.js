import Axios from "axios";
import { useEffect, useState } from "react";
import Art from "./art";
import "../HomeBody/art"
export default function ArtContainer() {
  const [listOfArt, setListOfArt] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_FETCH}/arts`).then((res) =>
      setListOfArt(res.data).catch((err) => console.log(err))
    );
  }, []);
  //console.log("HOnnn listofart : ",listOfArt[0]&& listOfArt[0].artimage);
  console.log("listof arts: ", listOfArt);
  console.log("list of arts [0]", listOfArt);

  return (
    <>
      <div className="cards">
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
    </>
  );
}
