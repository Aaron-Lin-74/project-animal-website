import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const TermsOfUse = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='terms-of-use'>
      <h1>Terms of Use</h1>
    </main>
  )
}

export default TermsOfUse
