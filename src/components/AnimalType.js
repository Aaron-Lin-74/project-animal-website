import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGlobalContext } from './contexts/AppContext'
import AnimalCard from './AnimalCard'
import './AnimalType.css'

const AnimalType = () => {
  const { animalType } = useParams()
  const allTypes = [
    'Mammal',
    'Fish',
    'Bird',
    'Reptile',
    'Amphibian',
    'Invertebrate',
  ]
  let navigate = useNavigate()

  // If user types the wrong route instead of using menu, navigate to 404
  if (!allTypes.includes(animalType)) {
    navigate('/error')
  }
  // The number of record shown at first place
  const [limit, setLimit] = useState(3)

  // The url of the backend server, defined in the AppContext
  const { animals, loadAnimals, scrollTop } = useGlobalContext()
  const loadMoreRef = useRef(null)

  // Every time the animal type changes, scroll to the top
  useEffect(() => {
    scrollTop()
  }, [animalType])

  // Specify the type of the animal and number of animals to fetch
  useEffect(() => {
    loadAnimals(animalType, limit)
  }, [animalType, limit])

  // Load extra 3 records from the server when click load more
  const loadMore = () => {
    setLimit((limit) => limit + 3)
    if (limit > animals.length) {
      loadMoreRef.current.style.visibility = 'hidden'
    }
  }

  return (
    <main className='animals-container-flex'>
      {animals.map((animal) => {
        return <AnimalCard animal={animal} key={animal.name} />
      })}
      <button className='load-more' ref={loadMoreRef} onClick={loadMore}>
        Load more
      </button>
    </main>
  )
}

export default AnimalType
