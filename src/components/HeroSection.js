import React from 'react'
import Button from './Button'
import { FaPlayCircle } from 'react-icons/fa'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/animals.mp4' autoPlay loop muted />
      <h1>Adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/sign-up'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='/'
        >
          WATCH <FaPlayCircle />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
