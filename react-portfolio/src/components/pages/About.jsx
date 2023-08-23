import React from "react";
import image from "../img/bg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../img/about.png";

function About() {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "120vh",
        }}
      >
        <div id="intro">
          <h1 id="title">About</h1>
          <h3 id="subtitle">My Introduction</h3>
        </div>

        <div>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <img
                  src={about}
                  alt=""
                  style={{
                    width: "250px",
                    height: "250px",
                  }}
                />
              </Col>

              <Col xs={12} md={8}>
                <p className="fs-6">
                  {" "}
                  My primary responsibility is to design, develop and maintain
                  high-quality web applications using react, javascript other
                  related technologies.{" "}
                </p>
                <p className="fs-6">
                  Birthday: 12 Feb 2001 <br />
                  Gender: Female <br />
                  Freelance: Available <br />
                </p>
                <Row>
                  <Col xs={6} md={4}>
                    <span className="fs-6">
                      <b>01+</b>
                    </span>
                    <span className="fs-6">
                      {" "}
                      Years <br /> experience
                    </span>
                  </Col>
                  <Col xs={6} md={4}>
                    <span className="fs-6">
                      <b>02+</b>
                    </span>
                    <span className="fs-6">
                      {" "}
                      Completed <br /> projects
                    </span>
                  </Col>
                  <Col xs={6} md={4}>
                    <span className="fs-6">
                      <b>01+</b>
                    </span>
                    <span className="fs-6">
                      {" "}
                      Companies <br /> worked
                    </span>
                  </Col>
                </Row>
                <br />
                <div id="about-btn">
                  <a href="">
                    <button type="button" id="btn">
                      Download CV
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;
