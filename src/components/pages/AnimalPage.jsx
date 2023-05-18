import React from 'react'
import OneAnimalPage from './OneAnimalPage'

export default function AnimalPage({ animals }) {
  return (
    <div> 
      {animals.map((e) => <OneAnimalPage key={e.id} animal = {e}/> )}
  </div>
  )
}
