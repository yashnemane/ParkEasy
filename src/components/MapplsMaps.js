import React, { useEffect } from 'react';
import '../assests/styles/homepage.css';
import {MAPPLE_MAPS_API_KEY} from '../config/constants.js'

export default function Maps() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://apis.mappls.com/advancedmaps/api/"+MAPPLE_MAPS_API_KEY+"/map_sdk?layer=vector&v=3.0&callback=initMap1";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    window.initMap1 = () => {
      const map = new window.mappls.Map('map', { center: [17.4065, 78.4772] });
    };

    return () => {
      document.body.removeChild(script);
      delete window.initMap1;
    };
  }, []);

  return (
    <div id="map"></div>
  );
};
