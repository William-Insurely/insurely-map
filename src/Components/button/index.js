import React from "react";
import "./style.scss";
import Icon from "../../assets/icons";

const Button = ({ onSubmit = () => {}, onSubmitValue, text }) => {
  return (
    <div className="search flex">
      {/* <div className="search--icon" onClick={() => console.log('ping')}>
        <Icon type="chevron-arrow-up" size="20px" color="#156258"  />
      </div> */}
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
