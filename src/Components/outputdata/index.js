import React, { useEffect, useState } from "react";
import Success from "./errorOrSuccess/success";
import Error from "./errorOrSuccess/error";
import errorhandler from "../functions/errorhandler";


const OutputData = ({ zipcode, onSubmit }) => {
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState(false);
  const [bigSearch, setbigSearch] = useState(false);

  let localStorageData = JSON.parse(localStorage.getItem("insurelydata"));
  const { isError, errorMesseges } = errorhandler(zipcode);

  const toggleSerachSize = () => {
    setbigSearch(!bigSearch)
  }

  useEffect(() => {
    setError(isError);
    setErrorMessege(errorMesseges);

    return () => {
      return null
    }
  }, [errorMesseges, isError]);


  return (
    <div className="outputdata-container">
      {error ? <Error errorMessege={errorMessege} /> : <Success data={localStorageData} onSubmit={onSubmit} />}
    </div>
  );
};

export default OutputData;
