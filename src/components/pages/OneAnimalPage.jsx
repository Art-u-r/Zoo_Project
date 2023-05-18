import React, { useState } from 'react';

export default function OneAnimalPage({ animal }) {
  const [modal, setMaodal] = useState(false);
const submitHandler = () => {
  setMaodal(true)
}
  return (
      <div className="card" style={{ width: '18rem', margin:'5px'}}>
        <img src={animal.mainImg} style={{cursor: 'pointer'}} className="card-img-top" alt={animal.animalname} onClick={submitHandler}/>
        <div className="card-body">
          <p className="card-text">{animal.animalname}</p>
        </div>
        {
        (modal)}
      </div>
  );
}


