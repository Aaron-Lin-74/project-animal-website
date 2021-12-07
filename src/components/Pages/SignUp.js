import React from 'react'
import SignUpForm from '../SignUpForm'
import { Container } from 'react-bootstrap'
const SignUp = () => {
  return (
    <div className='sign-up'>
      <Container className='d-flex align-items-center justify-content-center'>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <SignUpForm />
        </div>
      </Container>
    </div>
  )
}

export default SignUp
