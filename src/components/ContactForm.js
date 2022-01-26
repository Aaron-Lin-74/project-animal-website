import React, { useState, useRef } from 'react'
import './ContactForm.css'
import { useNavigate } from 'react-router-dom'
import { GrSend } from 'react-icons/gr'
import Button from './Button'

const ContactForm = () => {
  const navigate = useNavigate()

  // Use uncontrolled form input for simplicity
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [error, setError] = useState('')

  // aviod multi clicks of the send button after first submission
  const [loading, setLoading] = useState(false)
  const submitContactForm = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(
      `https://formsubmit.co/ajax/${process.env.REACT_APP_FORM_SUBMIT_EMAIL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then((data) => {
        navigate('/thank-you/contact')
      })
      .catch((error) => {
        showError('Something went wrong, please try later.')
        setLoading(false)
      })
  }

  function showError(message) {
    setError(message)
    setTimeout(() => setError(''), 5000)
  }
  return (
    <div>
      {error && <div className='contact-error'>{error}</div>}
      <form className='contact-form' onSubmit={submitContactForm}>
        <h4>We'd love to hear from you!</h4>
        <input type='text' ref={nameRef} placeholder='Name' required />
        <input
          type='email'
          ref={emailRef}
          placeholder='Example@example.com'
          required
        />
        <textarea ref={messageRef} placeholder='Message' required />
        <div className='btn-wrap'>
          <Button disabled={loading} type='submit' buttonStyle='btn--submit'>
            Send <GrSend />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
