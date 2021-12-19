import React, { useState, useEffect, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const serverUrl = 'http://localhost:5000'
  // Small large screen break point is 960px
  const screenBreakPoint = 960
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  // use click state to control the appearance of sidebar menu button
  const [isSidebarClicked, setIsSidebarClicked] = useState(false)

  // We set 960px to be the break point of large screen and small screen
  const [largeScreenMode, setLargeScreenMode] = useState(true)

  // location is an object that has the coordinate (x, y) properties
  const [location, setLocation] = useState({})

  const openSubmenu = (page, coordinate) => {
    setLocation(coordinate)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }
  // The break point we set is 960px
  const checkScreenSize = () => {
    if (window.innerWidth <= screenBreakPoint) {
      setLargeScreenMode(false)
    } else {
      setLargeScreenMode(true)
    }
  }
  const toggleSidebar = () => setIsSidebarClicked(!isSidebarClicked)

  // When close mobile menu, close the submenu as well
  const closeMobileMenu = () => {
    setIsSidebarClicked(false)
    closeSubmenu()
  }
  useEffect(() => {
    // Check the small large screen break point
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <AppContext.Provider
      value={{
        serverUrl,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        toggleSubmenu,
        location,
        setLocation,
        largeScreenMode,
        setLargeScreenMode,
        screenBreakPoint,
        isSidebarClicked,
        toggleSidebar,
        closeMobileMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
