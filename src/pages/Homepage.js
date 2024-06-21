import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import RentToUs from '../components/Renttous';

export default function Homepage() {
  return (
    <div>
      <div>
        <PhotoGallery/>
        <RentToUs/>
      </div>
    </div>
  );
};
