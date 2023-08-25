import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from "../img/bg.png";
import memory from "../img/memory.png";
import biz from "../img/biz.jpg";
import school from "../img/school.png";

   



function Portfolio() {

  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: '100%'
        }}
      >
        <div id="intro">
          <h1 id="title">Portfolio</h1>
          <h3 id="subtitle">Most recent work</h3>
        </div>
<div className='container ' style={{
       
          width: '50%'
        }}>
        <Carousel >
      <Carousel.Item>

        <img
          className="img-fluid w-100"
          src={school}
       
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={memory}
          
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid w-100"
          src={biz}
       
        />
     
      </Carousel.Item>
    </Carousel>
    </div>
      </div>
    </>
  );
}

export default Portfolio;
