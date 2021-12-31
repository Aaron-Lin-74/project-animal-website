import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { ImArrowUp } from 'react-icons/im'
import { useGlobalContext } from '../contexts/AppContext'

const Animals = () => {
  return (
    <div className='animals'>
      <Outlet />
    </div>
  )
}

export default Animals
