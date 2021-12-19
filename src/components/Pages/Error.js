import React from 'react'
import Button from '../Button'

const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>
        Sorry, we can't find that page. Don't worry through, everything is still
        awesome.
      </p>
      <Button>Home</Button>
    </div>
  )
}

export default Error
