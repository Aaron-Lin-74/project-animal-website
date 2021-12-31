import React from 'react'
import Button from './Button'
import './AnimalTypeSection.css'
import { VscFoldDown } from 'react-icons/vsc'
import { BsStarFill } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

import { useGlobalContext } from '../contexts/AppContext'

const AnimalTypeSection = ({ type, description }) => {
  const { premiumTypes, redirect } = useGlobalContext()
  return (
    <section
      className='animal-type-section'
      id='type'
      style={{ backgroundImage: `url('/images/${type}.jpg')` }}
    >
      <Fade bottom>
        <div className='animal-type-text'>
          <h1>{type}</h1>
          <p>{description}</p>
        </div>
      </Fade>
      <div className='animal-type-btns-container'>
        <Button path={`/animals/${type}`} buttonStyle='btn--outline'>
          Explore More{premiumTypes.includes(type) && <BsStarFill />}
        </Button>
        <Button
          onClick={() => redirect(`https://en.wikipedia.org/wiki/${type}`)}
        >
          Learn More
        </Button>
        <div className='animal-type-btn-down'>
          <VscFoldDown />
        </div>
      </div>
    </section>
  )
}

export default AnimalTypeSection
