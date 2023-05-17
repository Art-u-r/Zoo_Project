import React from 'react'
import AnimalPage from './AnimalPage'

export default function OneAnimalPage({ animal }) {
  return (
    <>
    <img src={animal.mainImg} alt="" />
    <div><a href={`/gallery/${animal.id}`}>{animal.animalname}</a></div>
    <div>{animal.description}</div>
    </>
  )
}
