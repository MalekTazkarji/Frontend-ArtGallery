import axios from "axios";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import "./artistsdash.css";



export default function Artistss(props) {
    const handleDelete = async (id) => {
        await axios
            .delete(`http://localhost:5000/artists/${id}`)
            .then((response) => response.data)
            .then((result) => window.location.reload())
            .catch((err) => console.log(err));
    };

    const [name, setName] = useState(props.name);
    const [bio, setBio] = useState(props.bio);
    const [description, setDescription] = useState(props.description);
    const [image, setImage] = useState(props.image);
    const [edit, setEdit] = useState(false);

    const handleSubmit = async (id) => {
        const data = new FormData();
        data.append("name", name);
        data.append("bio", bio);
        data.append("description", description);
        data.append("image", image);

        axios
            .put(`http://localhost:5000/artists/${id}`, data)
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className="artistsContainer">
                <img className="img1" src={props.image} alt="artist" />

                <h1 className="zbele-edit">
                    name:{props.name}
                    <div className="icn"> 
                        <button id="icons"
                            onClick={() => {
                                setEdit(!edit);
                            }}
                        >
                            <i id="editt" className="singlePostIcon far fa-edit"></i>{" "}
                        </button>
                        <button id="icons"
                            onClick={() => {
                                handleDelete(props._id);
                            }}
                        >
                            <i id="editt" className="singlePostIcon far fa-trash-alt"></i>{" "}
                        </button>
                    </div>
                </h1>

            </div>
            <Dialog  open={edit} onClose={() => setEdit(!edit)}>
                {edit && (
                    <div className="editdiv">
                        {/* {image && (
                            <img
                                className="postImg"
                                src={`http:localhost:5000/${props.image}`}
                                alt="imagess"
                            />
                        )} */}
                        <form  onSubmit={(e) => handleSubmit(props._id)}>
                           
                            
                            <div className="formm">

                            <img className="imgg" src={props.image} alt="artist" />
                                <label htmlFor="fileInput"/>
                                   
                
                                <input
                                    name="file"
                                    type="file"
                                    id="fileInput"
                                    style={{ right: "0px" }}
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                    }}
                                />
                                 <input
                                  defaultValue={props.name}
                                  name="names"
                                  type="text"
                                  placeholder="Name"
                                  className="names"
                                  autoFocus={true}
                                  onChange={(e) => {
                                      setName(e.target.value);
                                  }}
        />
                                <textarea
                            
                                rows={4}
                                    defaultValue={props.bio}
                                    name="bio"
                                    type="text"
                                    placeholder="Bio"
                                    className="bios"
                                    autoFocus={true}
                                    onChange={(e) => {
                                        setBio(e.target.value);
                                    }}
                                />
                              
                                <textarea
                                id="desc"
                                rows={4}
                                    defaultValue={props.description}
                                    name="description"
                                    type="text"
                                    placeholder="Description"
                                    className="descriptions"
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
                )}
            </Dialog>
        </>
    );
}
