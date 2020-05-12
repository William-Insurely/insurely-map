import axios from "axios";

export const saveInsurleyDBtoLocalS = async (zipcode) => {

  try {
    return axios
      .get(`/insurance-map/${zipcode}`);
  }
  catch (error) {
    // handle error
    console.log(error);
  }
};



// export const findsuggestions = (setState) => {


//   let currentzipcode = JSON.parse(localStorage.getItem("insurelydata")).postalCode;
//   currentzipcode = Number(currentzipcode);

//   let suggestion1 = currentzipcode + 1;
//   let suggestion2 = currentzipcode - 1;
//   let suggestion3 = currentzipcode + 2;
//   let suggestion4 = currentzipcode - 2;

//   const requestOne = axios.get(`/insurance-map/${suggestion1}`);
//   const requestTwo = axios.get(`/insurance-map/${suggestion2}`);
//   const requestThree = axios.get(`/insurance-map/${suggestion3}`);
//   const requestFour = axios.get(`/insurance-map/${suggestion4}`);

//   return axios
//     .all([requestOne, requestTwo, requestThree, requestFour])
//     .then(
//       axios.spread((...responses) => {
//         const responseOne = responses[0].data.postalCode;
//         const responseTwo = responses[1].data.postalCode;
//         const responesThree = responses[2].data.postalCode;
//         const responesFour = responses[3].data.postalCode;

//         setState([responseOne, responseTwo, responesThree, responesFour]);
        
//       })
//     )
    
//     .catch((errors) => {
//       console.log(errors);
//     });
    
// };


export const findSuggestionsFromApi = (zipcode) => {
zipcode = Number(zipcode)

  let suggestion1 = zipcode + 1;
  let suggestion2 = zipcode - 1;
  let suggestion3 = zipcode + 2;
  let suggestion4 = zipcode - 2;

  const requestOne = axios.get(`/insurance-map/${suggestion1}`);
  const requestTwo = axios.get(`/insurance-map/${suggestion2}`);
  const requestThree = axios.get(`/insurance-map/${suggestion3}`);
  const requestFour = axios.get(`/insurance-map/${suggestion4}`);

  return axios
    .all([requestOne, requestTwo, requestThree, requestFour])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.postalCode;
        const responseTwo = responses[1].data.postalCode;
        const responesThree = responses[2].data.postalCode;
        const responesFour = responses[3].data.postalCode;

        const arr = [responseOne, responseTwo, responesThree, responesFour]

        // removes duplicates values
        return Array.from(new Set(arr));        
      })
    )
    
    .catch((errors) => {
      console.log(errors);
    });
    
};
