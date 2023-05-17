import React from 'react'
import OneAnimalPage from './OneAnimalPage'

export default function AnimalPage({ animals, setAnimals }) {
  return (
    <ul>
      {animals.map((e) => ( <OneAnimalPage key={e.id} animal = { e } /> ))}
  </ul>
  )
}
