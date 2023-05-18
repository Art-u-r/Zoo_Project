import React from 'react';
import IndividualGalleryPage from './IndividualGalleryPage';

export default function ModalPage({ photos, animals }) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <h4>{animals.description}</h4>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
           />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
           />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
           />
        </div>
        <div className="carousel-inner">
          {photos.map((item, index) => (
            <IndividualGalleryPage key={item.id} photo={item} isActive={index === 0 && true} animal={animals}/>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}
