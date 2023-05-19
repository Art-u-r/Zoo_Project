import React from 'react';
import IndividualGalleryPage from './IndividualGalleryPage';

export default function ModalPage({ photos, animals }) {
  // const [isHover, setIsHover] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // }

  return (

    <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div>
<dl className="row" style={{ marginTop: '50px', borderRadius:'10px'}}>
  <h3 className="col-sm-3">Вид</h3>
  <dd className="col-sm-9">{animals.animalname}</dd>

  <h5 className="col-sm-3">Описание</h5>
  <dd className="col-sm-9">
    <p>{animals.description}</p>
  </dd>
</dl>
    </div>

    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
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
    </div>
  );
}
