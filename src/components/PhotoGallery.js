import React from 'react';
import '../assests/styles/header.css';
//import parkingImage1 from '../assests/images/homepagelist4.jpg'
import {PARKING_APP_NAME} from '../config/constants'
import '../assests/styles/homepage.css'

export default function PhotoGallery () {
  return (
    <div className='below-header'>
    <h2>Welcome to <span class="italic">{PARKING_APP_NAME}</span></h2>
    <div className="title-line">
      <p>Trusted by parking operators across the biryani capital.</p>
    </div>
    </div>
  );
};

/*<div className="image-list">
        <img src={parkingImage1} alt="Parking Spot 1" />
      </div>
      <h2>Welcome to <span class="italic">{PARKING_APP_NAME}</span></h2>
      */