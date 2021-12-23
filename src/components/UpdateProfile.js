import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

const UpdateProfile = () => {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  // aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { currentUser, updateUserProfile } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      const updatedUser = {}

      // const promises = []
      // Check whether the user name has been changed
      if (userNameRef.current.value !== currentUser.name) {
        //   promises.push(updateName(userNameRef.current.value))
        updatedUser.name = userNameRef.current.value
      }

      // Check whether the email has been changed
      if (emailRef.current.value !== currentUser.email) {
        // promises.push(updateEmail(emailRef.current.value))
        updatedUser.email = emailRef.current.value
      }

      // Check if the new password has been entered
      if (passwordRef.current.value) {
        // promises.push(updatePassword(passwordRef.current.value))
        updatedUser.password = passwordRef.current.value
      }
      // const result = await Promise.all(promises)
      const result = await updateUserProfile(updatedUser)
      console.log(result)
      if (!result) {
        showError('Failed to update the profile')
        return
      }
      navigate('/dashboard')
    } catch {
      showError('Failed to update the profile')
      setLoading(false)
    }
  }

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }

  return (
    <>
      {error && <div className='sign-up-error'>{error}</div>}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h3>Update Profile</h3>
        <label htmlFor='sign-up-username'>User Name</label>
        <input
          id='sign-up-username'
          type='text'
          ref={userNameRef}
          required
          defaultValue={currentUser.name}
        />

        <label htmlFor='sign-up-email'>Email</label>
        <input
          id='sign-up-email'
          type='email'
          ref={emailRef}
          required
          defaultValue={currentUser.email}
        />
        <label htmlFor='sign-up-password'>Password</label>
        <input
          id='sign-up-password'
          type='password'
          ref={passwordRef}
          placeholder='Leave blank to keep the same'
        />
        <label htmlFor='sign-up-password2'>Password Confirmation</label>
        <input
          id='sign-up-password2'
          type='password'
          placeholder='Leave blank to keep the same'
          ref={passwordConfirmRef}
        />
        <button disabled={loading} type='submit'>
          Update
        </button>
        <div className='switch'>
          <Link to='/dashboard'>Cancel</Link>
        </div>
      </form>
    </>
  )
}
export default UpdateProfile
