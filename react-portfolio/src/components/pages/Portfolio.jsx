import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image from '../img/bg.png'


function Portfolio() {
  return (
    <>
    <div id='home' style={{
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '120vh'
      }}>
    <div id='intro'>
     <h1 id='title'>Portfolio</h1>
     <h3 id='subtitle'>Most recent work</h3>
    </div>
    <Carousel>
      <Carousel.Item> 
        <img className='object-fit-sm-contain border rounded text-center'
         src= {image}
         alt="First slide"
        />
       <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          src= {image}
          alt="Second slide"
          style={{
            width: '200vh', height: '350px'
          }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        src= {image}
        alt="Third slide"
        style={{
          width: '200vh', height: '350px'
        }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Portfolio