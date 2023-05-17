import React, { useState } from 'react'

export default function MainPage( {animals}) {
    const [animal, setAnimal] = useState(animals);
  return ( <ul>
      {animal.map((e) => ( <li > {e.animalname} </li> ))}
  </ul>
  )
}
