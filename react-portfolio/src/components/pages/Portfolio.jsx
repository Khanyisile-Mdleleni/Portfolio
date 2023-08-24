import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../img/bg.png";

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
        <Carousel>
          <Carousel.Item>
            <img
              src={image}
              alt="Second slide"
              style={{
                width: "50vh",
                height: "350px",
              }}
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={image}
              alt="Second slide"
              style={{
                width: "50vh",
                height: "350px",
              }}
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={image}
              alt="Third slide"
              style={{
                width: "50vh",
                height: "350px",
              }}
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Portfolio;
