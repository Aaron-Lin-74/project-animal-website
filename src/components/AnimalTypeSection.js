import React from 'react'
import Button from './Button'
import './AnimalTypeSection.css'
import { VscFoldDown } from 'react-icons/vsc'
import { BsStarFill } from 'react-icons/bs'

import { useGlobalContext } from '../contexts/AppContext'

const AnimalTypeSection = ({ type }) => {
  const { premiumTypes } = useGlobalContext()
  return (
    <section
      className='animal-type-section'
      style={{ backgroundImage: `url('/images/${type}.jpg')` }}
    >
      <div className='animal-type-text'>
        <h1>{type}</h1>
      </div>
      <div className='animal-type-btns-container'>
        <Button path={`/animals/${type}`} buttonStyle='btn--outline'>
          Explore More{premiumTypes.includes(type) && <BsStarFill />}
        </Button>
        <div className='animal-type-btn-down'>
          <VscFoldDown />
        </div>
      </div>
    </section>
  )
}

export default AnimalTypeSection
