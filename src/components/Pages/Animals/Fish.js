import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '../../contexts/AppContext'
import { ImArrowUp } from 'react-icons/im'
import AnimalCard from '../../AnimalCard'
import './Animals.css'

const Fish = () => {
  // The number of record shown at first place
  const [limit, setLimit] = useState(3)

  // The url of the backend server, defined in the AppContext
  const { animals, loadAnimals } = useGlobalContext()
  const loadMoreRef = useRef(null)
  const scrollTopRef = useRef(null)

  // Specify the type of the animal and number of animals to fetch
  useEffect(() => {
    loadAnimals('Fish', limit)
  }, [limit])

  // Add onscroll event listener determining to show the button or not
  useEffect(() => {
    window.addEventListener('scroll', showScrollBtn)

    // Always use a cleanup function to avoid the memery leak and overwritten issue
    return () => window.removeEventListener('scroll', showScrollBtn)
  }, [])

  // Load extra 3 records from the server when click load more
  const loadMore = () => {
    setLimit((limit) => limit + 3)
    if (limit > animals.length) {
      loadMoreRef.current.style.visibility = 'hidden'
    }
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
        return <AnimalCard animal={animal} key={animal.name} />
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

export default Fish
