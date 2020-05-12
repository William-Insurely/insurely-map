import React, { useState } from "react";
import Suggestions from "./suggestions";
import Button from "../../button";
import Graph from "./companygraph";
import { stylingPostaldCode } from "../../functions/script";
import { UseDataProvider } from "../../functions/contextAPI/dataContext";
import Icon from '../../../assets/icons'
import Information from '../../information'

const Success = () => {
  let { loading, insurleyDataAPI, suggestionsAPI } = UseDataProvider();
  const [showInformation, SetShowInformation] = useState(false);

  return (
    <>
    { insurleyDataAPI && loading === false && (
      <div className="success">
      <Suggestions suggestions={suggestionsAPI} />

      <div style={{position:'relative'}} className="success--averageprice">
      <h2 className="success--averageprice__title">Genomsnittspris & Populäritet </h2>
        <p className="success--averageprice__text">
          
          Bästa postnummer-träff är: 
        </p>
        <h3 className="success--zipcode__title">
          {stylingPostaldCode(insurleyDataAPI.postalCode)}
        </h3>
        <div className="success--zipcode__text">
          <p>Genomsnittspris:</p>
          <h2>{insurleyDataAPI.averagePremium} sek/år</h2>
        </div>

        <div className="success--zipcode__information" onClick={() => SetShowInformation(true)} style={{position:'absolute', right:'9px', bottom:'2px'}}>
            <Icon type="information" size='20px' color='#156258'/>
        </div>
      </div>

      <Graph statistics={insurleyDataAPI.statistics} />
      <Button text="Jämför med din försäkring" />
    </div>
    )}
    {showInformation && <Information SetShowInformation={SetShowInformation}/>}
</>
  );
};

export default Success;
