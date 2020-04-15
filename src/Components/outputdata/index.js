import React, { useEffect, useState } from "react";
import { filterGeojson } from "../functions/script";
import Success from "./success";
import Error from "./error";

const InsuranceComapnys = [
  {
    name: "Trygg Hansa",
    img:
      "https://www.bilcentersyd.se/wp-content/uploads/2018/09/Trygg-Hansa.png",
  },
  {
    name: "Länsförsäkringar",
    img: "https://www.stickpng.com/assets/images/5a27cf3852b1cc0d022e6d68.png",
  },
  {
    name: "If Försäkring",
    img:
      "https://via.tt.se/data/images/00158/5069fd52-cadf-4576-b267-b5dc79da2b69.png",
  },
  {
    name: "Hedvig",
    img:
      "https://fatcamp.io/xn--frskring-2za1p.se/images/company-logos/hedvig-forsakring-logotyp.png",
  },
];

const OutputData = ({ zipcode,onSubmit }) => {
  const [company, setCompany] = useState(null);
  const [data, setData] = useState(null);
  const randomNumer = (max, min) => {
    return Math.floor(Math.random() * max) + min;
  };

  useEffect(() => {
    setData(filterGeojson(zipcode));
    setCompany(InsuranceComapnys[randomNumer(4, 0)]);
  }, [zipcode]);

  return (
    <div className="outputdata-container">
      {company && data.insurelydata ? (
        <>
          <Success
            randomNumer={randomNumer}
            company={company}
            zipcode={zipcode}
            suggestions={data.suggestions}
            onSubmit={onSubmit}
          />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default OutputData;
