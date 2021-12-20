import React, { useState, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { ImArrowUp } from 'react-icons/im'
import './Animals.css'

const Animals = () => {
  const scrollTopRef = useRef(null)

  // Add onscroll event listener determining to show the button or not
  useEffect(() => {
    scrollTop()
    window.addEventListener('scroll', showScrollBtn)

    // Always use a cleanup function to avoid the memery leak and overwritten issue
    return () => window.removeEventListener('scroll', showScrollBtn)
  }, [])

  // Scroll to the top of the page
  const scrollTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  // When the user scrolls down 20px from the top of the document, show the button
  const showScrollBtn = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (scrollTopRef.current) scrollTopRef.current.style.display = 'block'
    } else {
      scrollTopRef.current.style.display = 'none'
    }
  }

  return (
    <div>
      <Outlet />
      <button className='scroll-top' ref={scrollTopRef} onClick={scrollTop}>
        <ImArrowUp />
      </button>
    </div>
  )
}

export default Animals
