import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import OutputData from "./outputdata/index";
import Button from "./button";
import Icon from "../assets/icons";
import { UseDataProvider } from '../Components/functions/contextAPI/dataContext';
import Information from './information'
import { saveInsurleyDBtoLocalS, findSuggestionsFromApi } from "./functions/fetch";

const useStyles = makeStyles({
  loading: {
    color: "#156258",
  },
  FormControl: {
    margin: "10px 0 0 0",
    width: "90%",
    height: "auto",
    backgroundColor: "white",
    border: "2px solid #156258",
    borderRadius: "5px",
  },
  root: {
    background: "white",
    borderRadius: "4px",
  },
});

const Search = () => {
  const [formValue, setFormValue] = useState("");
  const [bigSearch, SetBigSearch] = useState(false);

  const classes = useStyles();
  let { loading, setLoading ,setInputvalue, inputvalue, setInsurelyDataAPI, setSuggestionsAPI } = UseDataProvider()
  

  const onSubmit = async (zipcode) => {
    SetBigSearch(true);
    let newPostalCode 
    await setLoading(true)
    await saveInsurleyDBtoLocalS(zipcode).then( (response) => { setInsurelyDataAPI(response.data);newPostalCode = response.data.postalCode });
    await findSuggestionsFromApi(newPostalCode).then((data) => { setSuggestionsAPI(data)})
    await setInputvalue(zipcode)
    await setLoading(false)

    
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onSubmit(formValue);
    } else if (e.keyCode === 8) {
      setInputvalue(null);
    }
  };
  if (inputvalue && formValue > inputvalue) {
    setInputvalue(null);
  }

  
  useEffect(() => {
    if(inputvalue){
      setFormValue(inputvalue)
    }
    return () => {
     return null
    }
  }, [inputvalue])

  return (
    
      <div
        className={` search-container ${
          bigSearch ? "search-container__big" : null
        }`}
      >
      <h1 className="search-container__title"> Sök efter postnummer</h1>
        <div className="flex">
          <TextField
            className={classes.FormControl}
            variant="filled"
            id="standard-number"
            label="Postnummer"
            type="number"
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
            onKeyDown={keyPress}
          />
        </div>

        {loading && (
          <div className="search-container__loader flex">
            <CircularProgress
              className={classes.loading}
              variant="indeterminate"
            />
          </div>
        )}
        { inputvalue && bigSearch ? (
          <OutputData />
        ) : (
          <Button
            className="justify-content"
            onSubmit={onSubmit}
            onSubmitValue={formValue}
            text="Sök"
          />
        )}
        <div
          style={{ position: "absolute", bottom: "70px", left: "46%" }}
          className="search--icon"
          onClick={() => SetBigSearch(!bigSearch)}
        >
         <Icon type={`${bigSearch ? "chevron-arrow-up": "chevron-arrow-down"}`} size="20px" color="#156258" /> 
        </div>
        
        
      </div>
  );
};

export default Search;
