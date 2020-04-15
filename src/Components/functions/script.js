import { geozipcode5 } from "../../zipcodeDB/geozipcode5";
import { geozipcode4 } from "../../zipcodeDB/geozipcode4";
import { geozipcode3 } from "../../zipcodeDB/geozipcode3";
import { geozipcode2 } from "../../zipcodeDB/geozipcode2";
import { geozipcode1 } from "../../zipcodeDB/geozipcode1";


export const filterGeojson = (zipcode) => {
  let geo;
  let zoom;
  switch (zipcode.toString().length) {
    case 5:
      geo = geozipcode5.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 14
      break;
    case 4:
      geo = geozipcode4.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 13
      break;
    case 3:
      geo = geozipcode3.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 12
      break;
    case 2:
      geo = geozipcode2.features.find((i) => {
        return i.properties.class === zipcode;
      });
      (zoom = zipcode === '11' ? 10 : 6 )
    
      break;
    case 1:
      geo = geozipcode1.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 5
      break;

    default:
      return null;
  }


  if (geo === undefined) {
    return {
      insurelydata: null,
      geo: null,
      latitude: 59.329323,
      longitude: 18.068581,
      suggestions: findsuggestions(zipcode),
      zoom:7
    };
  } else {
    return {
      insurelydata: true,
      geo: geo,
      latitude: geo.geometry.geometries[0].coordinates[0][1][1],
      longitude: geo.geometry.geometries[0].coordinates[0][1][0],
      suggestions: findsuggestions(zipcode),
      zoom,
    };
  }
  
};

// FUNCTION THAT FIND OTHER SUGGESTION FOR ZIPCODES

export const findsuggestions = (zipcode) => {
  let suggestionsArr = [];
  let arr5
  let arr4
  let arr3
  let arr2
  let arr1

  switch (zipcode.toString().length) {

    case 5:      
      arr5 = filtergeozipcode(geozipcode5, Number(zipcode) +1,Number(zipcode) -1)
      arr4 = filtergeozipcode(geozipcode4, Math.floor(zipcode / 10),0)
      suggestionsArr = [...arr5, ...arr4];
      break;

      case 4:      
      arr4 = filtergeozipcode(geozipcode4, Number(zipcode) +1,Number(zipcode) -1)
      arr3 = filtergeozipcode(geozipcode3, Math.floor(zipcode / 10),0)
      suggestionsArr = [...arr4,...arr3];
      break;

      case 3:      
      arr3 = filtergeozipcode(geozipcode3, Number(zipcode) +1,Number(zipcode) -1)
      arr2 = filtergeozipcode(geozipcode2, Math.floor(zipcode / 10),0)
      suggestionsArr = [...arr3,...arr2];
      break;

      case 2:      
      arr2 = filtergeozipcode(geozipcode2, Number(zipcode) +1,Number(zipcode) -1)
      arr1 = filtergeozipcode(geozipcode1, Math.floor(zipcode / 10),0)
      suggestionsArr = [...arr2,...arr1];
      break;

      case 1:      
      arr1 = filtergeozipcode(geozipcode1, Number(zipcode) +1,Number(zipcode) -1)
      suggestionsArr = [...arr1];
      break;

    default:
      return null;
  }
  return suggestionsArr;
};

const filtergeozipcode = (geodb,zipcode1,zipcode2 ) => {
  return(
  geodb.features
  .filter(
    (i) =>
      i.properties.class === zipcode1.toString() ||
      i.properties.class === zipcode2.toString()
  )
  .map((zip) => zip.properties.class)
  )
}

// export const setZoomLevel = (insurelydata, zipcode) => {
//   if(insurelydata !== true){
//     return 7
//   }
//   //ZOOMS OUT IF NOT RECIVING DATA
//   switch (zipcode.toString().length) {
//     case 5: 
//     break;

//     default:
//       return 14
//   }
 


//   if(zipcode.length < 2){
//     return 8
//   }else if(zipcode.length === 1){
//     return 6
//   } else if(zipcode.length < 4){
//     return 12
//   } else {
//     return 14
//   }
// }