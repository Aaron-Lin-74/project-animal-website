import React from 'react'
import './Gallery.css'
import { HiPlus } from 'react-icons/hi'

const Gallery = () => {
  return (
    <section className='gallery'>
      <div className='ani-info'>
        <div className='ani-text'>
          <h2>Animal</h2>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className='gallery-wrapper'>
        <div className='gallery-flex'>
          <div className='gal-flex-full'>
            <a href='/images/quokka.jpg'>
              <img className='gal-img' src='/images/quokka.jpg'></img>
              <span className='gal-add'>
                <HiPlus />
              </span>
            </a>
          </div>
          <div>
            <a>
              <img className='gal-img' src='/images/panda.jpg'></img>
              <span className='gal-add'>
                <HiPlus />
              </span>
            </a>
          </div>
          <div>
            <a>
              <img className='gal-img' src='/images/koala.jpg'></img>
              <span className='gal-add'>
                <HiPlus />
              </span>
            </a>
          </div>
          <div>
            <a>
              <img className='gal-img' src='/images/red_panda.jpg'></img>
              <span className='gal-add'>
                <HiPlus />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
