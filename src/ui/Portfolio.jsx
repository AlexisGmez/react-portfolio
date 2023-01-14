import React from 'react'
import Carousel from '../components/Carousel'
import Img1 from '../assets/e-commerce-desk.png';
import Img2 from '../assets/weather-app.png';
import Img3 from '../assets/rickandmorty.png';
import Img4 from '../assets/e-commerce-react.png'
const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h2>Portfolio</h2>
      <Carousel 
        img1={Img1} 
        img2={Img2} 
        img3={Img3} 
        Img4 = {Img4}
        title='E-commerce vanilla' 
        title2='Weather App' 
        title3='Rick & Morty' 
        title4='E-commerce-react'
      />
    </div>
  )
}

export default Portfolio
