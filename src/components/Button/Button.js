import React from "react";
import "./Button.css";
import { useState } from "react";
import axios from "axios";

const Button = (props, { setDataToNav }) => {
  const STYLES = ['btn--primary", "btn--oultine'];
  const SIZES = ['btn--medium", "btn--large'];
  const [data, setData] = useState([]);

  let  type, onClick, buttonStyle, buttonSize;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const fetchArtist = () => {
    console.log("clicked search");
    if (props.name.trim() === "") alert("Please enter a name");
    else {
      axios
        .get(`http://localhost:5000/artists/search/${props.name}`)

        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .then(async (json) => {
          console.log("fetna 3al async json");
          await setData(json);
          console.log("json", json);
          // console.log("props.func: ", props.func(json));
        });
    }
  };
  setDataToNav = data;
  console.log("SetBatata: ", setDataToNav);

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={() => {
        fetchArtist();
      }}
    >
      Search
    </button>
  );
};

export default Button;

