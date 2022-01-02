import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const Services = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='services'>
      <h1>Services</h1>
    </main>
  )
}

export default Services
