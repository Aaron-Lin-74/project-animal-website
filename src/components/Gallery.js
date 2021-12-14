import React from 'react'
import './Gallery.css'
import { HiPlus } from 'react-icons/hi'

const Gallery = () => {
  const images = ['quokka', 'panda', 'koala', 'red_panda']
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
          {images.map((image) => {
            return (
              <div className='gal-flex-item'>
                <a>
                  <img className='gal-img' src={`/images/${image}.jpg`}></img>
                  <span className='gal-add'>
                    <HiPlus />
                  </span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery
