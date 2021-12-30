import React from 'react'
import AnimalTypeSection from './AnimalTypeSection'

const AllAnimals = () => {
  return (
    <div>
      <AnimalTypeSection type='mammals' />
      <AnimalTypeSection type='birds' />
      <AnimalTypeSection type='reptiles' />
      <AnimalTypeSection type='fish' />
      <AnimalTypeSection type='amphibians' />
      <AnimalTypeSection type='invertebrates' />
    </div>
  )
}

export default AllAnimals
