import React from "react";

const error = ({errorMessege}) => {
  console.log(errorMessege)
  return <div style={{color:'white'}}>{errorMessege}</div>;
};

export default error;
