import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../contexts/AppContext'
import { useAuth } from '../contexts/AuthContext'
import AnimalCard from './AnimalCard'
import useFetch from '../hooks/useFetch'
import Loading from './Loading'
import './AnimalList.css'

const AnimalList = () => {
  const { animalType } = useParams()

  // Change the animal type from plural to single
  const type = animalType.endsWith('s') ? animalType.slice(0, -1) : animalType

  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // The number of record shown at first place
  const [limit, setLimit] = useState(3)

  // The url of the backend server, defined in the AppContext
  const { scrollTop, allTypes, searchTerm } = useGlobalContext()
  const loadMoreRef = useRef()

  // Store the url as a state, update url when the type or limit changed
  const [url, setUrl] = useState(`/api/animals/${type}?limit=${limit}`)
  const [withToken, setWithToken] = useState(false)
  const { data: animals, isLoaded } = useFetch(url, withToken)

  useEffect(() => {
    // Every time the animal type changes, scroll to the top
    scrollTop()

    // If user types the wrong route instead of using menu, navigate to error page
    if (!allTypes.includes(type)) {
      navigate('/error', { replace: true })
      return
    }

    // Only Mammal and Bird are public, the rest types need log in
    if (!currentUser && type !== 'mammal' && type !== 'bird') {
      navigate('/login', { replace: true, path: location.pathname })
      return
    }

    // If user has logged in, access private route with token
    if (currentUser && type !== 'mammal' && type !== 'bird') {
      setWithToken(true)
    }
  }, [type, currentUser, scrollTop, allTypes, navigate, location.pathname])

  // Specify the type of the animal and number of animals to fetch
  useEffect(() => {
    setUrl(`/api/animals/${type}?limit=${limit}&search=${searchTerm}`)
  }, [type, limit, searchTerm])

  // Load extra 3 records from the server when click load more
  const loadMore = () => {
    setLimit((limit) => limit + 3)
    if (limit > animals.length) {
      loadMoreRef.current.style.visibility = 'hidden'
    }
  }

  // Show the loading component before the data is fetched
  if (!isLoaded) {
    return <Loading />
  }

  // Show the notice when there is no result
  if (animals.length < 1) {
    return (
      <h2 className='section-title'>No animal matched your search criteria.</h2>
    )
  }
  return (
    <article className='animals-container-flex'>
      {animals.map((animal) => {
        return <AnimalCard key={animal._id} {...animal} />
      })}
      <button className='load-more' ref={loadMoreRef} onClick={loadMore}>
        Load more
      </button>
    </article>
  )
}

export default AnimalList
