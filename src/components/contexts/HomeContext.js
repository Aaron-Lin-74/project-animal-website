import React, { useState, useContext } from 'react'

const HomeContext = React.createContext()

const HomeProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openModal = (ind) => {
    setIndex(ind)
    setIsModalOpen(true)
    document.body.style.position = 'fixed'
    document.getElementById('hero-video').pause()
  }
  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.position = ''
    document.getElementById('hero-video').play()
  }
  return (
    <HomeContext.Provider
      value={{ isModalOpen, openModal, closeModal, index, setIndex }}
    >
      {children}
    </HomeContext.Provider>
  )
}

// Use the custom hook to reduce the import
export const useHomeContext = () => {
  return useContext(HomeContext)
}
export { HomeProvider, HomeContext }
