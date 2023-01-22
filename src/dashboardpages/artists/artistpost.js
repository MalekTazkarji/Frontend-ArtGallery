import React from "react";
import "./artistpost.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function ArtistPost() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
const navigate=useNavigate();
 
  const handleSubmit = async () => {
      const data = new FormData();
      data.append("name", name);
      data.append("bio",bio);
      data.append("description",description)
      data.append("image", image);

       axios.post("http://localhost:5000/artists",data)
       .catch(err=>console.log(err));
       navigate("/Dashboard/artists");
  };


  return (
    <div className="main">
      {image && (
        <img className="postImg" src={URL.createObjectURL(image)} alt="imagess" />
      )}
      <form onSubmit={handleSubmit}>
     
        <div className="cont">
          
          <input name="file"type="file"id="fileInput" onChange={(e)=>{setImage(e.target.files[0])}}/>
          <input
          required
            name="name"
            type="text"
            placeholder="name"
            className="name"
            autoFocus={true}
            onChange={(e) => {
              setName(e.target.value);
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
              setBio(e.target.value);
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
