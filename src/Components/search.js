import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import OutputData from "./outputdata/index";
import Button from "./button";
import Icon from "../assets/icons";

import { saveInsurleyDBtoLocalS } from "./functions/fetch";

const useStyles = makeStyles({
  loading: {
    color: "#156258",
  },
  FormControl: {
    // color: "green",
    margin: "30px 0 0 0",
    width: "90%",
    height: "auto",
    backgroundColor: "white",
    border: "2px solid #156258",
    // border:'none',
    borderRadius: "5px",
    // Focused: { backgroundColor: "white" },
  },
  root: {
    background: "white",
    borderRadius: "4px",
  },
});

const Search = ({ findstation, loading }) => {
  const [submitvalue, setSubmitvalue] = useState(null);
  const [formValue, setFormValue] = useState("");
  const [bigSearch, SetBigSearch] = useState(false);
  const classes = useStyles();

  const onSubmit = (zipcode) => {
    saveInsurleyDBtoLocalS(zipcode);
    setSubmitvalue(zipcode);
    setFormValue(zipcode);
    findstation(zipcode);
    SetBigSearch(true);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onSubmit(formValue);
    } else if (e.keyCode === 8) {
      setSubmitvalue(null);
    }
  };
  if (submitvalue && formValue > submitvalue) {
    setSubmitvalue(null);
  }

  console.log(bigSearch);
  return (
    
      <div
        className={` search-container ${
          bigSearch ? "search-container__big" : null
        }`}
      >
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
        {submitvalue && bigSearch && loading !== true ? (
          <OutputData zipcode={submitvalue} onSubmit={onSubmit} />
        ) : (
          <Button
            className="justify-content"
            onSubmit={onSubmit}
            onSubmitValue={formValue}
            text="Sök Postnummer"
          />
        )}
        <div
          style={{ position: "absolute", bottom: "70px", left: "46%" }}
          className="search--icon"
          onClick={() => SetBigSearch(!bigSearch)}
        >
          <Icon type="chevron-arrow-up" size="20px" color="#156258" />
        </div>
      </div>
  );
};

export default Search;
