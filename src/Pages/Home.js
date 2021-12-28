import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import HeroSection from '../components/HeroSection'
import '../App.css'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import { HomeProvider } from '../contexts/HomeContext'

const Home = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
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
