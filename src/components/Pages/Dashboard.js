import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Profile from '../Profile'

const Dashboard = () => {
  const { currentUser, logout } = useAuth()
  return (
    currentUser && (
      <>
        <Profile />
        <button onClick={logout}>Log Out</button>
      </>
    )
  )
}

export default Dashboard
