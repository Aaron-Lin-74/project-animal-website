import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const FAQ = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='faq'>
      <h1>FAQ</h1>
    </main>
  )
}

export default FAQ
