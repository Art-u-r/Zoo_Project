import React from 'react';

export default function OneAnimalPage({ animal }) {
  console.log(animal);
  return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={animal.mainImg} className="card-img-top" alt={animal.animalname} />
        <div className="card-body">
          <p className="card-text">{animal.animalname}</p>
        </div>
      </div>
  );
}
