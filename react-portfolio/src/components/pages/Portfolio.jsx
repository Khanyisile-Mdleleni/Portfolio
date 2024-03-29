import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../img/bg.png";
import memory from "../img/memory.png";
import school from "../img/school.png";
import biz from "../img/biz.jpg";
import ace from "../img/serv-2.jpg";

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
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
        <div id="intro" className="p-4">
          <h1 id="title">Portfolio</h1>
          <h3 id="subtitle">Most recent work</h3>
        </div>{" "}
        <div className="portfolio">
          <div className="container-portfolio">
            <Slider {...settings}>
              <div id="my-card">
                <img src={school} alt="" />
                <div className="caption">Mzamomtsha Project</div>
                <a
                  href="https://mzamomtsha-primary-school.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <br />{" "}
                  <button className="image-button" id="btn">
                    View Project <i className="uil uil-arrow-right"></i>
                  </button>
                </a>
              </div>

              <div id="my-card">
                <img src={memory} alt="" />
                <div className="caption">Memory Game</div>
                <a
                  href="https://ephemeral-rolypoly-338eb0.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <br />{" "}
                  <button className="image-button" id="btn">
                    View Project <i className="uil uil-arrow-right"></i>
                  </button>
                </a>
              </div>

              <div id="my-card">
                <img src={biz} alt="" />
                <div className="caption">Business Card</div>
                <a
                  href="https://www.canva.com/design/DAFu-VYmkgY/BDN_HouQ7sgUgLovWFQdqA/edit"
                  target="_blank"
                >
                  {" "}
                  <br />{" "}
                  <button className="image-button" id="btn">
                    View Project <i className="uil uil-arrow-right"></i>
                  </button>
                </a>
              </div>
              <div id="my-card">
                <img src={ace} alt="" />
                <div className="caption">Business Website</div>
                <a
                  href="https://ace-of-digital.firebaseapp.com/"
                  target="_blank"
                >
                  {" "}
                  <br />{" "}
                  <button className="image-button" id="btn">
                    View Project <i className="uil uil-arrow-right"></i>
                  </button>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
