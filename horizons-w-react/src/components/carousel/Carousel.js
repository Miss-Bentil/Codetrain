import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import horizonoffice from '../assets/horizonoffice.avif'
import horizonoffice2 from '../assets/horizonoffice2.jpg'
import horizonoffice3 from '../assets/horizonoffice3.avif'
import './Carousel.css'

const CarouselView = () => {
  return (
    <div>
       
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={horizonoffice}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={horizonoffice2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={horizonoffice3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselView
