import React from "react";
import image from "../img/bg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../img/khanyisile.png";
import pdf from "../Document/khanyisile.pdf";


function About() {
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
          <h1 id="title">About</h1>
          <h3 id="subtitle">My Introduction</h3>
        </div>{" "}
        <br />
        <div className="about-content">
          <Container>
            <Row>
              <Col sm={5}>
                <img className="framed" src={about} alt="" />
              </Col>

              <Col sm={7}>
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
                </Row> 
                <br />
                <div id="about-btn">
                  <a href={pdf}>
                    <button type="button" id="btn">
                      Download CV <i className="uil uil-download-alt"></i>
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>{" "}
          <br />
        </div>
      </div>
    </>
  );
}

export default About;
