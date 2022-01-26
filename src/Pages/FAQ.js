import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import FaqAccordion from '../components/FaqAccordion'

const FAQ = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='faq'>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className='faq-img-container'>
        <img src='/images/dog.png' alt='cat' />
      </div>
      <FaqAccordion />
    </main>
  )
}

export default FAQ
