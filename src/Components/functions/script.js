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
      zoom = 14;
      break;
    case 4:
      geo = geozipcode4.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 13;
      break;
    case 3:
      geo = geozipcode3.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 12;
      break;
    case 2:
      geo = geozipcode2.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 10;

      break;
    case 1:
      geo = geozipcode1.features.find((i) => {
        return i.properties.class === zipcode;
      });
      zoom = 5;
      break;

    default:
      return null;
  }

  if (geo === undefined) {
    return {
      geo: null,
      latitude: 59.329323,
      longitude: 18.068581,
      zoom: 7,
    };
  } else {
    return {
      geo: geo,
      latitude: geo.geometry.geometries[0].coordinates[0][1][1],
      longitude: geo.geometry.geometries[0].coordinates[0][1][0],
      zoom,
    };
  }
};

export const stylingPostaldCode = (zipcode) => {
  let zipLength = zipcode.length;
  for (var i = zipLength; i < 5; i++) {
    zipcode = zipcode + "x";
  }
  zipcode = `${zipcode.slice(0, 3)}  ${zipcode.slice(3, 5)}`;
  
  return zipcode;
};
