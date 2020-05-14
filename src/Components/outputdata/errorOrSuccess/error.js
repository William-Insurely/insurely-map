import React from "react";
import Icon from "../../../assets/icons";

const error = ({ errorMessege }) => {
  return (
    <>
      <div className="error--icon flex">
        <Icon type="warning" size="80px" color="#af2e10"/>
      </div>
      <div className="error"> {errorMessege}</div>
    </>
  );
};

export default error;
