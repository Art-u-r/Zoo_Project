import React from 'react';

export default function IndividualGalleryPage({ photo, isActive, animal }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img src={photo.image} className="d-block w-100" alt={photo.image} style={{ height:'700px', objectFit: 'contain'}}/>
      <div className="carousel-caption d-none d-md-block" />
    </div>
  );
}
