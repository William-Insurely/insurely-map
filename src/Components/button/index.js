import React from "react";
import "./style.scss";

const Button = ({ onSubmit = () => {}, onSubmitValue, text }) => {
  return (
    <div className="search flex">
      <button
        className="search--button"
        onClick={() => onSubmit(onSubmitValue)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
