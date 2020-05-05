import React from "react";
import Suggestions from "./suggestions";
import Button from "../../button";
import Graph from "../companygraph";

const Success = ({data, onSubmit }) => {

  return (
    <div className="success">
      <Suggestions onSubmit={onSubmit} />
      <div className="success--averageprice">
      <h2 className="success--zipcode">{data.postalCode}</h2>
        <h2>Genomsnittspris:</h2>
        <p>{data.averagePremium} sek/år</p>
      </div>

      <Graph statistics={data.statistics} />

      <Button text="Jämför med din försäkring" />
    </div>
  );
};

export default Success;
