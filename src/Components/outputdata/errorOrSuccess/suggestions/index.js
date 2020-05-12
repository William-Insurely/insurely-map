import React from "react";
import { saveInsurleyDBtoLocalS, findSuggestionsFromApi } from '../../../functions/fetch'
import { stylingPostaldCode } from '../../../functions/script'
import { UseDataProvider } from '../../../functions/contextAPI/dataContext'

const Suggestions = ({ suggestions}) => {
  const {setLoading, setInsurelyDataAPI, setSuggestionsAPI, setInputvalue } = UseDataProvider()

  const onClick = async(zipcode) => {
    let newPostalCode 
    await setLoading(true)
    await saveInsurleyDBtoLocalS(zipcode).then( (response) => { setInsurelyDataAPI(response.data) ;newPostalCode = response.data.postalCode });
    await findSuggestionsFromApi(newPostalCode).then((data) => { setSuggestionsAPI(data); console.log(data)})
    await setInputvalue(zipcode)
    await setLoading(false)
  }

  if (suggestions) {
    return (
      <>
      <ul className="suggestions-list flex">
        {suggestions.map((zipcode) => {
          return (
            <li value={zipcode} key={zipcode} onClick={() => onClick(zipcode)}>
              {stylingPostaldCode(zipcode)}
            </li>
          );
        })}
      </ul>
      <p>Jämför även gärna med andra postnummer</p>
      </>
    );
  } else {
    
    return null;
  }
};

export default Suggestions;
