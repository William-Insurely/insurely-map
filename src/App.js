import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Search from "./Components/search";
import { filterGeojson } from "./Components/functions/script";
// import Icon from "./assets/icons";
import "./Components/scss/main.scss";
import { UseDataProvider } from './Components/functions/contextAPI/dataContext'

const App = () => {
  const [geojson, setGeojson] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 59.329323,
    longitude: 18.068581,
    zoom: 7,
  });
  const { insurleyDataAPI } = UseDataProvider() 

  
  useEffect(() => {
    const { latitude, longitude, geo, zoom } = filterGeojson(insurleyDataAPI.postalCode);
    setGeojson(geo);
    setViewport({
      width: "100vw",
      height: "100vh",
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
    });
    return () => {
      return null
    }
  }, [insurleyDataAPI])
  
  
  return (
    <div className="main-container">
      <Search/>
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1Ijoid2lsbGlhbWluc3VyZWx5IiwiYSI6ImNrN2xvejhwMzA2eWEzbW1rOG5jbjl4amUifQ.7Gf8x82h2ss94p3u0igG0w"
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        // mapbox://styles/mapbox/outdoors-v11
        // mapbox://styles/williaminsurely/ck7nc5lw30zjd1jrx38nluek9
        {...viewport}
        onViewportChange={setViewport}
      >
        <Source id="oregonjson" type="geojson" data={geojson} />
        <Layer
          id="areas"
          type="fill"
          source="oregonjson"
          paint={{
            "fill-color": "#152946",
            "fill-opacity": 0.3,
          }}
        />

        {/* {station && (
          <Marker
            value={station.zipcode}
            latitude={station.latitude}
            longitude={station.longitude}
          >
            {station.zipcode.length > 3 && (
              <Icon type="gps-icon" size="26px" color="#152946" />
            )}
          </Marker>
        )} */}
      </ReactMapGL>
    </div>
  );
};

export default App;
