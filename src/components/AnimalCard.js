import React from 'react'
import { FcSpeaker } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Button from './Button'

const AnimalCard = ({
  _id,
  name,
  imageUrl,
  population,
  life,
  weight,
  length,
  link,
  desc,
}) => {
  // Pronounce the name of the animal
  const speak = (name) => {
    let utterance = new SpeechSynthesisUtterance(name)
    utterance.rate = 0.75
    speechSynthesis.speak(utterance)
  }

  return (
    <div className='animal-card' key={_id}>
      <div className='animal-img-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <aside className='animal-info'>
        <div className='animal-name'>
          <h3>{name}</h3>
          <button onClick={() => speak(name)}>
            <FcSpeaker />
          </button>
        </div>
        <Button path={`/animal/${_id}`}>Learn more</Button>
      </aside>
    </div>
  )
}

export default AnimalCard
