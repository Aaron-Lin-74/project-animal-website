import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useGlobalContext } from '../../contexts/AppContext'
import { FcSpeaker } from 'react-icons/fc'
import { ImArrowUp } from 'react-icons/im'
import './Animals.css'

const Birds = () => {
  // The number of record shown at first place
  const [limit, setLimit] = useState(3)

  // The animals data fetched from the server
  const [animals, setAnimals] = useState([])

  // The url of the backend server, defined in the AppContext
  const { serverUrl } = useGlobalContext()
  const loadMoreRef = useRef(null)
  const scrollTopRef = useRef(null)

  useEffect(() => {
    loadAnimals()
  }, [limit])

  // Add onscroll event listener determining to show the button or not
  useEffect(() => {
    window.addEventListener('scroll', showScrollBtn)

    // Always use a cleanup function to avoid the memery leak and overwritten issue
    return () => window.removeEventListener('scroll', showScrollBtn)
  }, [])

  const loadAnimals = async () => {
    try {
      // Use query string to set the type and limit
      const response = await axios.get(
        `${serverUrl}/animals?type=Bird&limit=${limit}`
      )
      setAnimals(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  // Pronounce the name of the animal
  const speak = (name) => {
    let utterance = new SpeechSynthesisUtterance(name)
    utterance.rate = 0.75
    speechSynthesis.speak(utterance)
  }

  // Load extra 3 records from the server
  const loadMore = () => {
    setLimit((limit) => limit + 3)
    if (limit + 3 > animals.length) {
      loadMoreRef.current.style.visibility = 'hidden'
    }
  }

  // Redirect to the wiki in a new tab
  const redirect = (link) => {
    window.open(link, '_blank')
  }

  // Scroll to the top of the page
  const scrollTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  // When the user scrolls down 20px from the top of the document, show the button
  const showScrollBtn = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopRef.current.style.display = 'block'
    } else {
      scrollTopRef.current.style.display = 'none'
    }
  }

  return (
    <main className='animals-container-flex'>
      {animals.map((animal) => {
        return (
          <div className='animal-card' key={animal._id}>
            <div className='animal-img-container'>
              <img src={animal.imageUrl} alt={animal.name} />
            </div>
            <aside className='animal-info'>
              <div className='animal-name'>
                <h3>{animal.name}</h3>
                <button onClick={() => speak(animal.name)}>
                  <FcSpeaker />
                </button>
              </div>
              <h4>Population: {animal.population}</h4>
              <h4>Life span: {animal.life}</h4>
              <h4>Weight: {animal.weight}</h4>
              <h4>Length: {animal.length}</h4>
              <button
                className='learn-more'
                onClick={() => redirect(animal.link)}
              >
                Learn more
              </button>
            </aside>
            <article className='animal-desc'>
              <p>{animal.desc}</p>
            </article>
          </div>
        )
      })}
      <button className='load-more' ref={loadMoreRef} onClick={loadMore}>
        Load more
      </button>
      <button className='scroll-top' ref={scrollTopRef} onClick={scrollTop}>
        <ImArrowUp />
      </button>
    </main>
  )
}

export default Birds
