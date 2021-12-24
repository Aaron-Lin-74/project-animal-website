import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Profile from '../Profile'

const Dashboard = () => {
  const { currentUser } = useAuth()
  return (
    currentUser && (
      <div className='dashboard'>
        <Profile />
      </div>
    )
  )
}

export default Dashboard
