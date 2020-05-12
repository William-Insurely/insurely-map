import React, { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [loadingValue, setLoadingValue] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [suggestionsValue, setSuggestionsValue] = useState(null);
  const [insurleyValue, setInsurleyValue] = useState(
      {
    postalCode: "0",
    averagePremium: null,
    statistics: []
  }
  );

  return(
  <DataContext.Provider value={{
 loading: loadingValue,
 setLoading: (newValue) => {setLoadingValue(newValue)},

 inputvalue: inputValue,
 setInputvalue: (newValue) => {setInputValue(newValue)},

 insurleyDataAPI: insurleyValue,
 setInsurelyDataAPI: (newValue) => {setInsurleyValue(newValue)},

 suggestionsAPI: suggestionsValue,
 setSuggestionsAPI: (newValue) => {setSuggestionsValue(newValue)},



  }}
  >
    {children}
  </DataContext.Provider>
)}

export const UseDataProvider = () => useContext(DataContext)