import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const About = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <section className='about-section'>
      <h1 className='section-title'>About Us</h1>
    </section>
  )
}

export default About
