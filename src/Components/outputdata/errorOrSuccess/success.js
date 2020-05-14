import React, { useState } from "react";
import Suggestions from "./suggestions";
import { Button, Href }from "../../button";
import Graph from "./companygraph";
import { stylingPostaldCode } from "../../functions/script";
import { UseDataProvider } from "../../functions/contextAPI/dataContext";
import Icon from "../../../assets/icons";
import Information from "../../information";
import MobileGraf from "../../mobileGraf";

const Success = () => {
  let { loading, insurleyDataAPI, suggestionsAPI } = UseDataProvider();
  const [showInformation, SetShowInformation] = useState(false);
  const [showMobileChart, SetShowMobileChart] = useState(false);

  const isDesktop = window.innerWidth > 768;
  console.log(showMobileChart);
  return (
    <>
      {insurleyDataAPI && loading === false && (
        <div className="success">
          <Suggestions suggestions={suggestionsAPI} />

          <div className="success--averageprice">
            {/* <h2 className="success--averageprice__title">Genomsnittspris & Populäritet </h2> */}
            <p className="success--averageprice__text">
              Bästa postnummer-träff är:
            </p>
            <h3 className="success--zipcode__title">
              {stylingPostaldCode(insurleyDataAPI.postalCode)}
            </h3>
            <div className="success--zipcode__text">
              <p>Genomsnittspris för området:</p>
              <h2>{insurleyDataAPI.averagePremium} sek/år</h2>
            </div>

            <div
              className="success--zipcode__information"
              onClick={() => SetShowInformation(true)}
              style={{ position: "absolute", right: "9px", bottom: "2px" }}
            >
              <Icon type="information" size="20px" color="#156258" />
            </div>
          </div>

          {isDesktop ? (
            <Graph statistics={insurleyDataAPI.statistics} />
          ) : (
            <div onClick={() => SetShowMobileChart(true)}>
              <Button className="chart-button" text="Se populära företag" />
            </div>
          )}
          {showMobileChart && (
            <MobileGraf
              statistics={insurleyDataAPI.statistics}
              SetShowMobileChart={SetShowMobileChart}
            />
          )}
          {/* <Button className="bottom-button" text="Jämför med din försäkring" /> */}
          <Href/>
        </div>
      )}
      {showInformation && (
        <Information SetShowInformation={SetShowInformation} />
      )}
    </>
  );
};

export default Success;
