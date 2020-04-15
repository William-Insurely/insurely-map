import React from "react";

const Suggestions = ({ suggestionsFromDB, onSubmit }) => {
  if (suggestionsFromDB) {
    return (
      <ul className="suggestions-list flex">
        {suggestionsFromDB.map((zipcode) => {
          return (
            <li value={zipcode} key={zipcode} onClick={() => onSubmit(zipcode)}>
              {zipcode}
            </li>
          );
        })}
      </ul>
    );
  } else {
    console.log("hittar inga förslag");
    return null;
  }
};

export default Suggestions;
