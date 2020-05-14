import React from "react";
import Icon from "../../assets/icons";
import Graf from "../outputdata/errorOrSuccess/companygraph";
import { Href }from '../button'

const MobileGraf = ({ SetShowMobileChart, statistics }) => {
  return (
    <div className="MobileGraf">
      <div
        className="MobileGraf--icon"
        onClick={() => SetShowMobileChart(false)}
      >
        <Icon type="close" size="25px" />
      </div>
      {/* <h2 className="MobileGraf--title"> Popläraste försäkringar</h2> */}
      <div className="MobileGraf--graf">
        <Graf statistics={statistics} />
      </div>
      <Href/>
    </div>
  );
};

export default MobileGraf;
