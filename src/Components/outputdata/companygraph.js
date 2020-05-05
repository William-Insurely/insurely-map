import React, { useEffect, useState } from "react";

const Graph = ({ statistics }) => {
  const time = statistics.length === 1 ? 0 : 500;
  const data = () => {
    if (statistics.length > 5) {
      statistics = statistics.slice(0, 5);
    }

    let sortdata = statistics
      .sort((a, b) => a.percentageOfMarket - b.percentageOfMarket)
      .reverse();
    let zero = sortdata.map((i) => {
      return { ...i, percentageOfMarket: 0 };
    });
    return { sortdata, zero };
  };

  const [chartData, setChartData] = useState(data().zero);

  useEffect(() => {
    setTimeout(() => {
      setChartData(data().sortdata);
    }, time);
    return () => {
      return null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="--popularcompanys">
    <h2 style={{ textTransform: "capitalize" }}>Populärst hemförsäkring</h2>
    <div className={chartData.length !== 1 ? "chart" : null}>
      {chartData.map((d) =>
        chartData.length === 1 ? (
          <div key={d.companyName}>
            <p style={{ textTransform: "capitalize" }}>{d.companyName}</p>
            <p>{d.percentageOfMarket} %</p>
            <p>{d.averagePremium} sek/år</p>
          </div>
        ) : (
          <div key={d.companyName}>
          
          <div className="chart__bar">
          
            <div
              style={{ textTransform: "capitalize" }}
              className="chart__bar-label"
            >
              {d.companyName}
            </div>
            
              <div
                className="chart__bar-mark"
                style={{ backgroundColor:'#E2F3ED', width: `75%` }}
              >
              <div
                className="chart__bar-mark"
                style={{ width: `calc(${d.percentageOfMarket}% )` , margin:'0'}}
              />
              </div>

              
              <p className="chart__bar-value chart__bar-value--absolute">
                 {d.averagePremium} sek/år
              </p>
  
          </div>
          </div>
          
        )
      )}
    </div>
    <p>Priset är ett genomsnittligt pris per bolag baserat på våra användares försäkringspremier för bostadsrätter och hyresrätter i hela Sverige. Informationen är därmed baserad på tusentals personers försäkringar.</p>
    </div>
  );
};

export default Graph;
