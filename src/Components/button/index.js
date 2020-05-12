import React from "react";
import "./style.scss";
// import { UseDataProvider } from '../../Components/functions/contextAPI/dataContext'

const Button = ({ onSubmit = () => {}, onSubmitValue, text }) => {
  // let { inputvalue } = UseDataProvider()
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
