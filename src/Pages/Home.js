import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import HeroSection from '../components/HeroSection'
import '../App.css'
import Cards from '../components/Cards'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'

const Home = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='home'>
      <HeroSection />
      <Gallery />
      <Cards />
      <Reviews />
    </main>
  )
}

export default Home
