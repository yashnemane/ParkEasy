import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import RentToUs from '../components/Renttous';
import Maps from '../components/MapplsMaps';
import ParkingNearYou from '../components/ParkingNearYou';

export default function Homepage() {
  return (
    <div>
      <div>
        <PhotoGallery/>
        <RentToUs/>
        <Maps/>
        <ParkingNearYou/>
      </div>
    </div>
  );
};
