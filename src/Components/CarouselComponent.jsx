import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import bg1 from '../Assets/blu1.png'
import bg2 from '../Assets/blu2.png'
import bg3 from '../Assets/blu3.webp'
import Aos from 'aos'
import "aos/dist/aos.css"
import AnimatedText from 'react-animated-text-content';
import { Link } from 'react-router-dom'
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
      <h3 className='text'>
        <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="h3"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    PROVIDING EFFICIENT SOLUTIONS
        </AnimatedText>
      </h3>
      <p>
        <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            >
                Designed to address the customer's needs.
        </AnimatedText>
      </p>
      <Link to='/about'>Details</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg2}
      alt="Second slide"
    />

    <Carousel.Caption data-aos="fade-left" className='caption'>
      <h3>
        <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="h3"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    DEPENDABLE & RELIABLE
        </AnimatedText>
      </h3>
      <p>
        <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            >
                Round the clock reliablity.
        </AnimatedText>
      </p>
      <Link to='/service'>Check Our Services</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg3}
      alt="Third slide"
    />

    <Carousel.Caption data-aos="fade-left" className='caption'>
    <h3>
    <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="h3"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    GAIN EFFICIENCY
        </AnimatedText>
    </h3>
      <p>
      <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            >
                Stay ahead of the competition.
        </AnimatedText>
      </p>
      <Link to='/contact'>More</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselComponent