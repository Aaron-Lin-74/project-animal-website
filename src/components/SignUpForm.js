/** Using react-bootstrap and bootstrap to style this form */
import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const userNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  // aviod multi clicks of the Sign Up button after first submission
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      // await signup(emailRef.current.value, passwordRef.current.value)
      const user = {
        name: userNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      const result = await signup(user)
      if (!result) {
        showError('The error from the fetch')
        return
      }
      navigate('/')
    } catch {
      showError('Failed to create an account')
    } finally {
      setLoading(false)
    }
  }

  async function signup(user) {
    // create a new user, this is the test api url
    try {
      const response = await fetch('http://localhost:5000/users', {
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
      return data
    } catch (err) {
      console.error(err)
      return false
    }
  }

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='userName'>
              <Form.Label>User Name</Form.Label>
              <Form.Control ref={userNameRef} required />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className='w-100 mt-4' type='submit'>
              Sign Up
            </Button>
          </Form>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SignUpForm
