import React from "react";
import Icon from "../../assets/icons";

const Information = ({SetShowInformation}) => {
  return (
    <div className="information" >
      <div className="information--popup">
        <div onClick={() => SetShowInformation(false)} className="information--icon">
          <Icon type="close" size="20px" />
        </div>
        <div className="information--content">
        <h2>Information</h2>
            <p>
              Priset är ett genomsnittligt pris per bolag baserat på våra
              användares försäkringspremier för bostadsrätter och hyresrätter i
              hela Sverige. Informationen är därmed baserad på tusentals
              personers försäkringar.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Information;
