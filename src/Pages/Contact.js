import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const Contact = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])

  return (
    <main className='contact'>
      <h1>Contact</h1>
    </main>
  )
}

export default Contact
