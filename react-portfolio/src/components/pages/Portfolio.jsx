import Carousel from "react-bootstrap/Carousel";
import image from "../img/bg.png";
import memory from "../img/memory.png";
import school from "../img/school.png";

function Portfolio() {
  const carouselItems = [
    {
      imageSrc: school,
      title: "Mzamomtsha Primary website",
      link: "https://mzamomtsha-primary-school.netlify.app/",
    },
    {
      imageSrc: memory,
      title: "Memory Game",
      link: "https://ephemeral-rolypoly-338eb0.netlify.app/",
    },
  ];
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
          className="container"
          style={{
            width: "50%",
          }}
        >
          <Carousel>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="img-fluid w-100"
                  src={item.imageSrc}
                  alt={`Slide ${index}`}
                />
                <Carousel.Caption>
                  <h4>{item.title}</h4>
                  <div id="about-btn">
                    <a href={item.link}>
                      <button type="button" id="btn">
                        View Project
                      </button>
                    </a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
