import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Button from './Button'
const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h3 className='footer-subscription-heading'>
          Join the Learn Animals newsletter to receive our latest updates
        </h3>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              className='footer-input'
              placeholder='Your Email'
              required
            />
            <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <section className='footer-links'>
        <div className='footer-nav-items'>
          <Link className='footer-btn' to='/'>
            Contact
          </Link>
          <Link className='footer-btn' to='/about'>
            About Us
          </Link>
          <Link className='footer-btn' to='/'>
            FAQ
          </Link>
          <Link className='footer-btn' to='/'>
            Terms of Use
          </Link>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Learn Animals <i class='fas fa-cat'></i>
            </Link>
          </div>
          <small className='website-rights'>Learn Animals © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
