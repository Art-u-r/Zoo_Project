import React from 'react'
import OneAnimalPage from './OneAnimalPage'

export default function AnimalPage({ animals }) {
  return (
    <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop:'60px'}}> 
      {animals?.map((e) => <OneAnimalPage key={e.id} animal = {e}/> )}
  </div>
  )
}
