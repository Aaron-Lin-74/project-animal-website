import React from 'react'
import { useAuth } from './contexts/AuthContext'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { currentUser } = useAuth()
  return (
    <div>
      <h1>Profile</h1>
      <h2>{currentUser.name}</h2>
      <h2>{currentUser.email}</h2>
      <Link to='/update-profile'>Update Profile</Link>
    </div>
  )
}

export default Profile
