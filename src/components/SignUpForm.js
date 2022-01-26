import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from './Button'

const SignUpForm = () => {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  // aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      const user = {
        name: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const result = await signUp(user)
      if (!result) {
        showError('Something went wrong, please try later.')
        return
      }
      navigate('/dashboard')
    } catch {
      showError('Failed to create an account, please try later.')
      setLoading(false)
    }
  }

  // The error notice will disappear after 5 seconds
  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }

  return (
    <>
      {error && <div className='sign-up-error'>{error}</div>}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor='sign-up-username'>User Name</label>
        <input
          id='sign-up-username'
          type='text'
          ref={userNameRef}
          placeholder='user name'
          required
        />

        <label htmlFor='sign-up-email'>Email</label>
        <input
          id='sign-up-email'
          type='email'
          ref={emailRef}
          placeholder='example@example.com'
          required
        />
        <label htmlFor='sign-up-password'>Password</label>
        <input
          id='sign-up-password'
          type='password'
          ref={passwordRef}
          placeholder='password'
          required
        />
        <label htmlFor='sign-up-password2'>Password Confirmation</label>
        <input
          id='sign-up-password2'
          type='password'
          placeholder='password'
          ref={passwordConfirmRef}
          required
        />
        <div className='btn-wrap'>
          <Button disabled={loading} type='submit' buttonStyle='btn--submit'>
            Sign Up
          </Button>
        </div>
        <div className='switch'>
          Already have an account? <Link to='/login'>Log In</Link>
        </div>
      </form>
    </>
  )
}

export default SignUpForm
