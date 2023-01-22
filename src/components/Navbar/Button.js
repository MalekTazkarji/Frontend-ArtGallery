import React from "react";
import "./Button.css";

const Button = () => {
  const STYLES = ['btn--primary", "btn--oultine'];
  const SIZES = ['btn--medium", "btn--large'];
  let  type, onClick, buttonStyle, buttonSize;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      Search
    </button>
  );
};

export default Button;

 