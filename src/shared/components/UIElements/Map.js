import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ location, onChange, className, style }) {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidmJndWFyZCIsImEiOiJjazdzMzkxdWswa3dtM25xdGp6amYzOHJnIn0.8hm8rW7bT6ftV34a65XGWQ";
    const initializeMap = ({ setMap, mapContainer}) => {

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [location.lng, location.lat],
        zoom: location.zoom
      });
      
      map.on("move", () => {
        setMap(map);
        console.log('map :', map);
        // map.resize()
      });
    }

    if (!map) initializeMap({ setMap, mapContainer })
  }, [location.lat, location.lng, location.zoom, map]);

  return (
    <div className={`map ${className}`} style={style} ref={el => (mapContainer.current = el)} />
  );
}

export default Map;
