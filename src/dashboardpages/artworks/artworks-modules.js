import React from "react";
import { useState } from "react";
import "./artworksDash.css";
import { Dialog } from "@mui/material";
import axios from "axios"
export default function Art({ arttitle, artimage, artprice, artdesc,_id,artistid }) {
  const handleDelete = async (id) => {
    await axios
        .delete(`${process.env.REACT_APP_FETCH}/arts/${id}`)
        .then((response) => response.data)
        .then((result) => window.location.reload())
        .catch((err) => console.log(err));
};

const [title, settitle] = useState(arttitle);
  const [price, setprice] = useState(artprice);
  const [description, setDescription] = useState(artdesc);
  const [image, setImage] = useState(artimage);
// const[artist,setartist]=useState(artistid);
const [edit, setEdit] = useState(false);

const handleSubmit = async (id) => {
    const data = new FormData();
    data.append("arttitle", title);
    data.append("artprice",price);
    data.append("artdesc",description)
    data.append("artimage", image);
    // data.append("artist",artist);

    axios.put(`${process.env.REACT_APP_FETCH}/arts/${id}`, data)
        .catch((err) => console.log(err));
};

  return (
    <>
      <div className="carde">
        <div
       
          className="carde-imagee"
        >
          <img src={artimage} alt="artImage" />
        </div>
        <div className="card-titlee">
          <h3>{arttitle}</h3>
          <h3>{artprice}
          <div>
              <div className="divicon">
                        <button id="icons"
                            onClick={() => {
                                setEdit(!edit);
                            }}
                        >edit
                            <i id="editt" className="singlePostIcon far fa-edit"></i>{" "}
                        </button>
                        <button  id="icons"
                            onClick={(e) => {
                                handleDelete(_id);
                            }}
                        >
                            <i id="editt" className="singlePostIcon far fa-trash-alt"></i>
                        </button>
                    </div></div></h3>
        </div>
      </div>
   
     
      <Dialog  open={edit} onClose={() => setEdit(!edit)}>
                {edit && (
                    <div className="editdiv">
                       
                        <form  onSubmit={(e) => handleSubmit(_id)}>
                           
                            
                            <div className="formm">

                            <img className="imgg" src={artimage} alt="artist" />
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
                                  defaultValue={arttitle}
                                  name="title"
                                  type="text"
                                  placeholder="TITLE"
                                  className="artprice"
                                  autoFocus={true}
                                  onChange={(e) => {
                                      settitle(e.target.value);
                                  }}
        />
                                <textarea
                            
                                rows={4}
                                    defaultValue={artprice}
                                    name="price"
                                    type="text"
                                    placeholder="PRICE"
                                    className="artprice"
                                    autoFocus={true}
                                    onChange={(e) => {
                                        setprice(e.target.value);
                                    }}
                                />
                              
                                <textarea
                                id="desc"
                                rows={4}
                                    defaultValue={artdesc}
                                    name="description"
                                    type="text"
                                    placeholder="Description"
                                    className="artdesc"
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
