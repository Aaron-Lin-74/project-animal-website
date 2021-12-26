import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Submenu.css'
import { useGlobalContext } from './contexts/AppContext'
import { BsStarFill } from 'react-icons/bs'

const Submenu = () => {
  const {
    location,
    isSubmenuOpen,
    closeSubmenu,
    largeScreenMode,
    closeMobileMenu,
  } = useGlobalContext()
  const submenuRef = useRef(null)

  useEffect(() => {
    if (largeScreenMode) {
      // Move the submenu to the bottom of the related main menu
      submenuRef.current.style.top = `90px`
      submenuRef.current.style.left = `${location.coorX}px`
    } else {
      submenuRef.current.style.top = `${location.coorY}px`
      submenuRef.current.style.left = '0'
    }
  }, [location])
  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={submenuRef}
      onMouseLeave={closeSubmenu}
    >
      <div
        className={`${
          largeScreenMode ? 'submenu-center col-3' : 'submenu-center'
        }`}
      >
        <Link to='/animals/mammal' onClick={closeMobileMenu}>
          <h4>Mammals</h4>
        </Link>

        <Link to='/animals/bird' onClick={closeMobileMenu}>
          <h4>Birds</h4>
        </Link>

        <Link to='/animals/reptile' onClick={closeMobileMenu}>
          <h4>
            Reptiles <BsStarFill />
          </h4>
        </Link>

        <Link to='/animals/fish' onClick={closeMobileMenu}>
          <h4>
            Fish
            <BsStarFill />
          </h4>
        </Link>

        <Link to='/animals/amphibian' onClick={closeMobileMenu}>
          <h4>
            Amphibians
            <BsStarFill />
          </h4>
        </Link>

        <Link to='/animals/invertebrate' onClick={closeMobileMenu}>
          <h4>
            Invertebrates <BsStarFill />
          </h4>
        </Link>
      </div>
    </aside>
  )
}

export default Submenu
