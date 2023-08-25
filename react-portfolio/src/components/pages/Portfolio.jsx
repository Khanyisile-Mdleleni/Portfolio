import Carousel from "react-bootstrap/Carousel";
import image from "../img/bg.png";
import memory from "../img/memory.png";
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
          width: "100%",
        }}
      >
        <div id="intro">
          <h1 id="title">Portfolio</h1>
          <h3 id="subtitle">Most recent work</h3>
        </div>{" "}
        

        <div
          className="container "
          style={{
            width: "50%"
            
          }}
        >
          <Carousel>
            <Carousel.Item>
              <img className="img-fluid w-100" src={school} />
              <Carousel.Caption>
                <h4>Mzamomtsha Primary website</h4>
                <div id="about-btn">
                  <a href="https://mzamomtsha-primary-school.netlify.app/">
                    <button type="button" id="btn">
                      View Project
                    </button>
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="img-fluid w-100" src={memory} />
              <Carousel.Caption>
                <h4>Memory Game</h4>
                <div id="about-btn">
                  <a href="https://ephemeral-rolypoly-338eb0.netlify.app/">
                    <button type="button" id="btn">
                      View Project
                    </button>
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
     
        </div>
      </div>
    </>
  );
}

export default Portfolio;
