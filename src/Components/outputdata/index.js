import React, { useEffect, useState } from "react";
import Success from "./errorOrSuccess/success";
import Error from "./errorOrSuccess/error";
import errorhandler from "../functions/errorhandler";

import { UseDataProvider } from "../functions/contextAPI/dataContext";

const OutputData = ({ onSubmit }) => {
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState(false);
  let { inputvalue } = UseDataProvider();
  const { isError, errorMesseges } = errorhandler(inputvalue);

  // useEffect(() => {
  //   setError(isError);
  //   setErrorMessege(errorMesseges);

  //   return () => {
  //     return null;
  //   };
  // }, [errorMesseges, isError]);

  return (
    <div className="outputdata-container">
      <Success />
    </div>
  );
};

export default OutputData;
