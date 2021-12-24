import React, { useEffect } from 'react'
import { useGlobalContext } from '../contexts/AppContext'
import { useAuth } from '../contexts/AuthContext'
import Profile from '../Profile'

const Dashboard = () => {
  const { currentUser } = useAuth()
  const { scrollTop } = useGlobalContext()
  useEffect(() => {
    scrollTop()
  }, [])
  return (
    currentUser && (
      <div className='dashboard'>
        <Profile />
      </div>
    )
  )
}

export default Dashboard
