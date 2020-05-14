import React, { useEffect, useState } from "react";
import Success from "./errorOrSuccess/success";
import Error from "./errorOrSuccess/error";


import { UseDataProvider } from "../functions/contextAPI/dataContext";

const OutputData = () => {
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState(false);
  let { inputvalue } = UseDataProvider();

  useEffect(() => {
    if (inputvalue <= 0) {
      setError(true);
      setErrorMessege('Fel postnummer, vänligen försök igen med ett annat postnummer')
    }
    return () => {
      return null;
    };
  }, [inputvalue]);

  return (
    <div className="outputdata-container">
      { error ? <Error errorMessege={errorMessege} /> : <Success />}
    </div>
  );
};

export default OutputData;
