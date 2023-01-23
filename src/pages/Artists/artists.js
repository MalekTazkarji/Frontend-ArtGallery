import { useState, useEffect } from "react";
import Axios from "axios";
import Artist from "./artistmodule";
import "./artist.css";
import axios from "axios";

export default function Artists() {
  const [listOfArtists, setListOfArtists] = useState([]);
  const [filterArtists, setfilterArtists] = useState([]);
  const [arts, setArts] = useState([]);
  const getArts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_FETCH}/arts`);
      const data = await res.data;
      console.log(data);
      setArts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const sendRequest = async () => {
    const res = await Axios.get(`${process.env.REACT_APP_FETCH}/artists`).catch((err) =>
      console.log(err)
    );
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    getArts();
    sendRequest().then((data) => setListOfArtists(data));
  }, []);

  function getartist(letter) {
    const byName = listOfArtists?.filter((artist) =>
      artist.name.toUpperCase().startsWith(letter)
    );
    console.log(byName);
    setfilterArtists(byName);
    return byName;
  }

  return (
    <div className="myDiv">
      <div className="bg-img-artists">
        <div className="letters">
          <button className="button" onClick={(e) => getartist("A")}>
            A
          </button>
          <button className="button" onClick={(e) => getartist("B")}>
            B
          </button>
          <button className="button" onClick={(e) => getartist("C")}>
            C
          </button>
          <button className="button" onClick={(e) => getartist("D")}>
            D
          </button>
          <button className="button" onClick={(e) => getartist("E")}>
            E
          </button>
          <button className="button" onClick={(e) => getartist("F")}>
            F
          </button>
          <button className="button" onClick={(e) => getartist("G")}>
            G
          </button>
          <button className="button" onClick={(e) => getartist("H")}>
            H
          </button>
          <button className="button" onClick={(e) => getartist("I")}>
            I
          </button>
          <button className="button" onClick={(e) => getartist("J")}>
            J
          </button>
          <button className="button" onClick={(e) => getartist("K")}>
            K
          </button>
          <button className="button" onClick={(e) => getartist("L")}>
            L
          </button>
          <button className="button" onClick={(e) => getartist("M")}>
            M
          </button>
          <button className="button" onClick={(e) => getartist("N")}>
            N
          </button>
          <button className="button" onClick={(e) => getartist("O")}>
            O
          </button>
          <button className="button" onClick={(e) => getartist("P")}>
            P
          </button>
          <button className="button" onClick={(e) => getartist("Q")}>
            Q
          </button>
          <button className="button" onClick={(e) => getartist("R")}>
            R
          </button>
          <button className="button" onClick={(e) => getartist("S")}>
            S
          </button>
          <button className="button" onClick={(e) => getartist("T")}>
            T
          </button>
          <button className="button" onClick={(e) => getartist("U")}>
            U
          </button>
          <button className="button" onClick={(e) => getartist("E")}>
            E
          </button>
          <button className="button" onClick={(e) => getartist("W")}>
            W
          </button>
          <button className="button" onClick={(e) => getartist("X")}>
            X
          </button>
          <button className="button" onClick={(e) => getartist("Y")}>
            Y
          </button>
          <button className="button" onClick={(e) => getartist("Z")}>
            Z
          </button>
        </div>
        <div className="artistlists">
          {filterArtists?.map((artist,index) => {
            return (
              <Artist
              arts={arts}
              key={index}
              _id={artist._id}
                name={artist.name}
                image={`${process.env.REACT_APP_FETCH}/${artist.image}`}
                bio={artist.bio}
                description={artist.description}
              />
            );
          })}
        </div>

        <div className="artistlists">
          {listOfArtists.map((artist,index) => {
            return (
              <Artist
              arts={arts}
                key={index}
                _id={artist._id}
                name={artist.name}
                image={`${process.env.REACT_APP_FETCH}/${artist.image}`}
                bio={artist.bio}
                description={artist.description}
              />
            );
          })}
        </div>
    
      </div>
     
      </div>  );
}
