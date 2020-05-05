import React, { useEffect, useState } from "react";
import { findsuggestions } from '../../../functions/fetch'

const Suggestions = ({onSubmit}) => {
  const [suggestions, setSuggestions] = useState(null);
  
  useEffect(() => {
    findsuggestions(setSuggestions)
    return () => {
      return null
    }
  }, []);

  if (suggestions) {
    return (
      <ul className="suggestions-list flex">
        {suggestions.map((zipcode) => {
          return (
            <li value={zipcode} key={zipcode} onClick={() => onSubmit(zipcode)}>
              {zipcode}
            </li>
          );
        })}
      </ul>
    );
  } else {
    
    return null;
  }
};

export default Suggestions;
