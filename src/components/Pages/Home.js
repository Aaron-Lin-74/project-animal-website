import React from 'react'
import HeroSection from '../HeroSection'
import '../../App.css'
import Cards from '../Cards'
import Gallery from '../Gallery'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Gallery />
      <Cards />
    </div>
  )
}

export default Home
