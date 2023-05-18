import React from 'react';

export default function OneAnimalPage({ animal }) {
  return (
      <div className="card" style={{ width: '18rem', margin:'5px'}}>
       <a href={`/gallery/${animal.id}`}><img src={animal.mainImg} className="card-img-top" alt={animal.animalname}/></a>
        <div className="card-body">
          <p className="card-text">{animal.animalname}</p>
        </div>
      </div>
  );
}
