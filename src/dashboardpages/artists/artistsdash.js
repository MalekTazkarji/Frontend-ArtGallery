import React from "react";
import Axios from "axios";
import "./artistsdash.css";
import Artistss from "./artists-module";
import { useEffect, useState } from "react";
import SideBar from "../../components/dashboard-sidebar/sidebar";

export default function DashArtists() {
  const [Artists, setArtists] = useState([]);
  const sendRequest = async () => {
    const res = await Axios.get(`${process.env.REACT_APP_FETCH}/artists`).catch(
      (err) => {
        console.log(err);
      }
    );
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setArtists(data));
  }, []);



  return (
    <>
      <SideBar />
      <div className="pls">
      <a href="/Dashboard/artists/post" id="plus"> Post
       <i className="fa fa-plus-circle"></i>
        </a>
        
      </div>
      <div className="eachArtist">
        {Artists.map((artist, index) => {
          return (
            <Artistss
              key={index}
              _id={artist._id}
              name={artist.name}
              image={`${process.env.REACT_APP_FETCH}/${artist.image}`}
              bio={artist.bio}
              description={artist.description}
              collection={Artists._id}
            />
          );
        })}
      </div>
    </>
  );
}
