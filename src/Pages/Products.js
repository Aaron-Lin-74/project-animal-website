import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'

const Products = () => {
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [scrollTop])
  return (
    <main className='products'>
      <h1>Products</h1>
    </main>
  )
}

export default Products
