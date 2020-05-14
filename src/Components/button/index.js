import React from "react";
import "./style.scss";
// import { UseDataProvider } from '../../Components/functions/contextAPI/dataContext'

export const Button = ({ onSubmit = () => {}, onSubmitValue, text, className }) => {
  
  return (
    <div className={className}  >
      <button onClick={() => onSubmit(onSubmitValue)}>
        {text}
      </button>
    </div>
  );
};


export const Href = () => {
  return (
    <div className='bottom-button'  >
      <a target="_blank" rel="noopener noreferrer" href="https://app.insurely.se/logga-in">
        Jämför med din försäkring
      </a>
    </div>
  );
}
