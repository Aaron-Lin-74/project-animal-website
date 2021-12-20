import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <section className='cards'>
      <h2> Explore different types of animals </h2>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='card-items-l'>
            <CardItem
              src='images/fennec.jpg'
              text='Mammals include humans and all other animals that are warm-blooded vertebrates (vertebrates have backbones) with hair. They feed their young with milk and have a more well-developed brain.  '
              label='Mammals'
              path='/animals/Mammal'
            />
            <CardItem
              src='images/cockatoo.jpg'
              text={`Birds are warm-blooded vertebrates (vertebrates have backbones) and are the only animals with feathers. Although all birds have wings, a few species can't fly.`}
              label='Birds'
              path='/animals/Bird'
            />
          </ul>
          <ul className='card-items-s'>
            <CardItem
              src='images/the_frilled_neck_lizard.jpg'
              text='Reptiles are cold-blooded vertebrates. (Vertebrates have backbones.) They have dry skin covered with scales or bony plates and usually lay soft-shelled eggs.'
              label='Reptiles'
              path='/animals/Reptile'
            />
            <CardItem
              src='images/lion_fish.jpg'
              text='Fish are vertebrates (vertebrates have backbones) that live in water. They breathe using special organs called gills.'
              label='Fish'
              path='/animals/Fish'
            />
            <CardItem
              src='images/tree_frog.jpg'
              text='Amphibians are cold-blooded vertebrates (vertebrates have backbones) that don’t have scales. They live part of their lives in water and part on land.'
              label='Amphibians'
              path='/animals/Amphibian'
            />
            <CardItem
              src='images/sea_star.jpg'
              text='Invertebrates are animals without a backbone or bony skeleton. They range in size from microscopic mites and almost invisible flies to giant squid with soccer-ball-size eyes.'
              label='Invertebrates '
              path='/animals/Invertebrate'
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cards
