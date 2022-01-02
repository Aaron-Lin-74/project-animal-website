import React from 'react'
import { Outlet } from 'react-router-dom'

const Animals = () => {
  return (
    <main className='animals'>
      <Outlet />
    </main>
  )
}

export default Animals
