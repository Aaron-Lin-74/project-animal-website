import React from 'react'
import './Gallery.css'
import { HiPlus } from 'react-icons/hi'
import GalleryModal from './GalleryModal'
import { useHomeContext } from './contexts/HomeContext'

const Gallery = () => {
  const { isModalOpen, openModal } = useHomeContext()
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
          {images.map((image, ind) => {
            return (
              <div className='gal-flex-item' onClick={() => openModal(ind)}>
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
      {isModalOpen && <GalleryModal images={images} />}
    </section>
  )
}

export default Gallery
