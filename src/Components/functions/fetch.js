import axios from "axios";

export const saveInsurleyDBtoLocalS = (zipcode) => {
  axios
    .get(`/insurance-map/${zipcode}`)
    .then((response) => {
      // handle succes
        localStorage.setItem("insurelydata", JSON.stringify(response.data));
        localStorage.setItem("userinput", JSON.stringify(zipcode));
      
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const findsuggestions = (setState) => {
  let currentzipcode = JSON.parse(localStorage.getItem("insurelydata")).postalCode;
  currentzipcode = Number(currentzipcode);

  let suggestion1 = currentzipcode + 1;
  let suggestion2 = currentzipcode - 1;
  let suggestion3 = currentzipcode + 2;
  let suggestion4 = currentzipcode - 2;

  const requestOne = axios.get(`/insurance-map/${suggestion1}`);
  const requestTwo = axios.get(`/insurance-map/${suggestion2}`);
  const requestThree = axios.get(`/insurance-map/${suggestion3}`);
  const requestFour = axios.get(`/insurance-map/${suggestion4}`);

  axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.postalCode;
        const responseTwo = responses[1].data.postalCode;
        const responesThree = responses[2].data.postalCode;
        const responesFour = responses[3].data.postalCode;

        setState([responseOne, responseTwo, responesThree, responesFour]);
      })
    )
    .catch((errors) => {
      console.log(errors);
    });
};
