import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './AppContext'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()
  const { serverUrl } = useGlobalContext()

  async function signUp(user) {
    // create a new user, this is the test api url
    try {
      const response = await fetch(`${serverUrl}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      if (!response.ok) {
        throw new Error('Network response was not OK')
      }
      const data = await response.json()
      setCurrentUser(data.user)
      localStorage.setItem('accessToken', data.accessToken)
      return data
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function login(user) {
    // create a new user, this is the test api url
    try {
      const response = await fetch(`${serverUrl}/api/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      if (!response.ok) {
        throw new Error('Network response was not OK')
      }
      const data = await response.json()
      setCurrentUser(data.user)
      localStorage.setItem('accessToken', data.accessToken)
      return data
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async function logout(user) {
    setCurrentUser(null)
    localStorage.removeItem('accessToken')

    // Replace the current location instead of push a new one onto the history stack
    navigate('/', { replace: true })
  }

  return (
    <AuthContext.Provider value={{ currentUser, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export function useAuth() {
  return useContext(AuthContext)
}
