import React from "react";
import Suggestions from "./suggestions";
import Button from '../button'

const Success = ({ randomNumer, company, zipcode, suggestions, onSubmit }) => {
  return (
    <div className="success">
      <Suggestions suggestionsFromDB={suggestions} onSubmit={onSubmit} />
      <h2 className="success--zipcode">{zipcode}</h2>
      <div className="success--averageprice">
        <h2>Genomsnittpris:</h2>
        <p>{randomNumer(250, 150)} sek / Månad</p>
      </div>

      <div className="success--popularcompanys">
        <h2>Populärast försäkring: </h2>
        <p>{company.name}</p>
      </div>
      <Button text='Byt Din Försäkring!'/>
    </div>
  );
};

export default Success;
