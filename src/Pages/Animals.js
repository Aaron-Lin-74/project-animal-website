import React from 'react'
import { Outlet } from 'react-router-dom'

const Animals = () => {
  return (
    <div className='animals'>
      <Outlet />
    </div>
  )
}

export default Animals
