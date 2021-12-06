import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
      <h1> Check out these amazing animals </h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='card-items'>
            <CardItem
              src='images/tiger.jpg'
              text='Explore the fierce tiger inside the forest'
              label='Test'
              path='/'
            />
            <CardItem
              src='images/elephant.jpg'
              text='Giant elephant in Affrica'
              label='Test'
              path='/'
            />
          </ul>
          <ul className='card-items'>
            <CardItem src='images/bear.jpg' text='Bear' label='Test' path='/' />
            <CardItem src='images/wolf.jpg' text='Wolf' label='Test' path='/' />
            <CardItem src='images/lion.jpg' text='Lion' label='Test' path='/' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
