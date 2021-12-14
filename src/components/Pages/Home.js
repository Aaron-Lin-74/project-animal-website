import React from 'react'
import HeroSection from '../HeroSection'
import '../../App.css'
import Cards from '../Cards'
import Gallery from '../Gallery'
import Reviews from '../Reviews'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Gallery />
      <Cards />
      <Reviews />
    </div>
  )
}

export default Home
