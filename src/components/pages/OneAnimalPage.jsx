import React from 'react';

export default function OneAnimalPage({ animal }) {

  return (
      <div className="card" style={{ width: '18rem', margin:'5px'}}>
        <img src={animal.mainImg} style={{cursor: 'pointer'}} className="card-img-top" alt={animal.animalname} />
       <a href={`/gallery/${animal.id}`}><img src={animal.mainImg ? animal.mainImg : 'https://avatars.mds.yandex.net/i?id=e4df47ca8f1ed330867e2a54202e68a4-4793210-images-thumbs&n=13'} className="card-img-top" alt=""/></a>
        <div className="card-body">
          <p className="card-text">{animal.animalname}</p>
        </div>
      </div>
  );
}
