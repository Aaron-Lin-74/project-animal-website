import React from 'react'
import Button from './Button'
import './Subscription.css'
const Subscription = () => {
  return (
    <section className='subscription'>
      <h3 className='subscription-heading'>
        Join the Learn Animals newsletter to receive our latest updates
      </h3>
      <p className='subscription-text'>You can unsubscribe at any time.</p>
      <div className='subscription-input-wrap'>
        <form>
          <input
            type='email'
            name='email'
            className='subscription-input'
            placeholder='Your Email'
            required
          />
          <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
            Join Now
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Subscription
