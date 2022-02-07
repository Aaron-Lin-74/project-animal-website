import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import AboutSection from '../components/AboutSection'

const About = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return <AboutSection />
}

export default About
