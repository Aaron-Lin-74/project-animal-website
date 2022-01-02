import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const AboutUs = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='about-us'>
      <h1>About Us</h1>
    </main>
  )
}

export default AboutUs
