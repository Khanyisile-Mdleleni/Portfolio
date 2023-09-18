import React from "react";
import image from "../img/bg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../img/khanyisile.png";
import pdf from "../Document/khanyi.pdf";

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
                  I possess a solid foundation in UI/UX design and web
                  development, bolstered by my CompTIA Data+ certification and
                  MICT Data Analytics Skills Programme Certificate, which I
                  earned during a rewarding three-month learnership at UVU
                  Africa. My core role revolves around the design, creation, and
                  ongoing maintenance of top-tier web applications, harnessing
                  the power of technologies like React.js, JavaScript, and other
                  relevant tools and frameworks.{" "}
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
                  <a href={pdf} target="_blank">
                    <button type="button" id="btn">
                      Download CV <i className="uil uil-download-alt"></i>
                    </button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>{" "}
          <br />
          {/*-------------------------------------------------- Skills ----------------------------------------------- */}
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
              <h1 id="title">Skills</h1>
              <h3 id="subtitle">My Technical Level</h3>
            </div>{" "}
            <main className="wrapper">
              <article className="badge orange">
                <div className="rounded">
                  <i className="fab fa-html5 skills-icons"></i>
                </div>
              </article>
              <article className="badge blue">
                <div className="rounded">
                  <i className="fab fa-css3-alt skills-icons"></i>
                </div>
              </article>
              <article className="badge gold">
                <div className="rounded">
                  <i className="fab fa-js-square skills-icons"></i>
                </div>
              </article>
              <article className="badge red">
                <div className="rounded">
                  <i className="fab fa-figma skills-icons"></i>
                </div>
              </article>

              <article className="badge green">
                <div className="rounded">
                  <i className="fab fa-node skills-icons"></i>
                </div>
              </article>

              <article className="badge rebecca">
                <div className="rounded">
                  <i className="fab fa-bootstrap skills-icons"></i>
                </div>
              </article>

              <article className="badge gainsboro">
                <div className="rounded">
                  <i className="fab fa-java skills-icons"></i>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
