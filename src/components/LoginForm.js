import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

const LoginForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')
  // aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      // await signup(emailRef.current.value, passwordRef.current.value)
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const result = await login(user)
      if (!result) {
        showError('Failed to login to account')
        return
      }
      navigate('/dashboard')
    } catch {
      showError('Failed to login to account')
    } finally {
      setLoading(false)
    }
  }

  // async function login(user) {
  //   // create a new user, this is the test api url
  //   try {
  //     const response = await fetch('http://localhost:5000/api/auth', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(user),
  //     })
  //     if (!response.ok) {
  //       throw new Error('Network response was not OK')
  //     }
  //     const data = await response.json()
  //     return data
  //   } catch (err) {
  //     console.error(err)
  //     return false
  //   }
  // }

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }

  return (
    <>
      {error && <div className='login-error'>{error}</div>}

      <form className='login-form' onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label htmlFor='login-email'>Email</label>
        <input
          id='login-email'
          type='email'
          placeholder='example@example.com'
          ref={emailRef}
          required
        />

        <label htmlFor='login-password'>Password</label>
        <input
          id='login-password'
          type='password'
          placeholder='password'
          ref={passwordRef}
          required
        />

        <button disabled={loading} type='submit'>
          Log In
        </button>
        <div className='switch'>
          Need to create an account? <Link to='/sign-up'>Sign Up</Link>
        </div>
      </form>
    </>
  )
}

export default LoginForm
