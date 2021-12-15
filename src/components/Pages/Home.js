import React from 'react'
import HeroSection from '../HeroSection'
import '../../App.css'
import Cards from '../Cards'
import Gallery from '../Gallery'
import Reviews from '../Reviews'
import { HomeProvider } from '../contexts/HomeContext'

const Home = () => {
  return (
    <div>
      <HomeProvider>
        <HeroSection />
        <Gallery />
        <Cards />
        <Reviews />
      </HomeProvider>
    </div>
  )
}

export default Home
