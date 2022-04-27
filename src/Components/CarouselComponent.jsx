import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bg1 from '../Assets/blu1.png'
import bg2 from '../Assets/blu2.png'
import bg3 from '../Assets/blu4.webp'
import Aos from 'aos'
import "aos/dist/aos.css"
function CarouselComponent() {
  useEffect(()=>{
      Aos.init({duration : 3000})
  },[])

  return (
    <Carousel className='carousel-container' fade>
  <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg1}
      alt="First slide"
    />
    <Carousel.Caption   data-aos="fade-left" className='caption'>
      <h3 className='text'>PROVIDING EFFICIENT SOLUTIONS</h3>
      <p>Designed to address the customer's needs</p>
      <button>Details</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg2}
      alt="Second slide"
    />

    <Carousel.Caption data-aos="fade-left" className='caption'>
      <h3>DEPENDABLE & RELIABLE</h3>
      <p>Round the clock reliablity.</p>
      <button>Check Our Services</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg3}
      alt="Third slide"
    />

    <Carousel.Caption data-aos="fade-left" className='caption'>
    <h3>GAIN EFFICIENCY</h3>
      <p>Stay ahead of the competition.</p>
      <button>More</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselComponent