import React from 'react'
import LoginForm from '../LoginForm'
import { Container } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='login'>
      <Container className='d-flex align-items-center justify-content-center'>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <LoginForm />
        </div>
      </Container>
    </div>
  )
}

export default Login
