import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../artists/artistpost.css";
// import Artistss from "../artists/artists-module";

export default function ArtworkPost() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setartist] = useState("");
  const [image, setImage] = useState(null);
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("arttitle", title);
    data.append("artprice", price);
    data.append("artdesc", description)
    data.append("artimage", image);
    data.append("artist", artist);

    axios.post("http://localhost:5000/arts", data)
      .catch(err => console.log(err));
    navigate("/Dashboard/artworks");
  };

  const func = (e) => {
    setartist(e.target.value)
  }

  const getArtists = async () => {
    const res = await axios.get("http://localhost:5000/artists");
    const resJson = await res.data;
    setArtists(resJson);
  }

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="main">
      {image && (
        <img className="postImg" src={URL.createObjectURL(image)} alt="imagess" />
      )}
      <form onSubmit={handleSubmit}>

        <div className="cont">
          <label for="artist">Choose a artist:</label>

          <select name="artist" id="artist" onChange={func}>
            {artists && artists.map((e, i) => <option key={i} value={e._id}>{e.name}</option>)}
          </select>

          <input name="file" type="file" id="fileInput" onChange={(e) => { setImage(e.target.files[0]) }} />
          <input
            required
            name="name"
            type="text"
            placeholder="name"
            className="name"
            autoFocus={true}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <textarea
            rows={4}
            required
            name="bio"
            type="text"
            placeholder="bio"
            className="bio"
            autoFocus={true}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
          <textarea
            rows={4}

            required
            name="description"
            type="text"
            placeholder="description"
            className="description"
            autoFocus={true}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <button className="submitbutton" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
