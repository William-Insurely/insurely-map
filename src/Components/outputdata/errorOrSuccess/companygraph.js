import React, { useEffect, useState } from "react";

const Graph = ({ statistics }) => {
  const time = statistics.length === 1 ? 0 : 500;
  const data = () => {
    let sortdata
    if (statistics.length > 5) {
      sortdata = statistics
      .sort((a, b) => a.percentageOfMarket - b.percentageOfMarket)
      .reverse().slice(0, 5);
    } else {
      sortdata = statistics
      .sort((a, b) => a.percentageOfMarket - b.percentageOfMarket)
      .reverse();
    }

  
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
    <div style={{position:'relative'}} className="--popularcompanys">
    <h2>Vanligaste försäkringarna</h2>


      <div className={chartData.length !== 1 ? "chart" : null}>
      {/* <h4 style={{position:'absolute', right:'180px', top:'-10px', margin:'0'}}> Populäritet </h4>
    <h4 style={{position:'absolute', right:'60px', top:'-10px', margin:'0'}}> Pris </h4> */}

    
    <div >
      <div className="chart__bar">
        <div className="chart__bar-label" />
        <h4 className="chart__bar-mark"
            style={{ backgroundColor: "transparent", width: `75%` , marginBottom:'0'}}
            > Populäritet 
        </h4>
        <h4 style={{margin:'0', position:'absolute', right:'0'}} className="chart__bar-value ">Pris</h4>
      </div>
    </div>

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
                  style={{ backgroundColor: "#E2F3ED", width: `75%` }}
                >
                  <div
                    className="chart__bar-mark"
                    style={{
                      width: `calc(${d.percentageOfMarket}% )`,
                      margin: "0",
                    }}
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
    </div>
  );
};

export default Graph;
