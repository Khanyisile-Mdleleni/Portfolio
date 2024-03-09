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
        <div id="intro" className="p-4">
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
                  A passionate Frontend Developer with two years of experience
                  specializing in React.js. With a keen eye for design, I've
                  also spent a year honing my skills in UI/UX design using tools
                  like Figma, ensuring not just functionality but also a
                  seamless user experience.  On top of my development and
                  design expertise, I've been a dedicated content writer for
                  blogs, utilizing platforms like WordPress to craft engaging
                  and informative articles. This experience has honed my ability
                  to communicate complex ideas effectively and create content
                  that resonates with readers.  My journey in tech isn't
                  limited to development, design, and content creation—I hold a
                  CompTIA Data+ certificate, reflecting my commitment to
                  understanding and managing data effectively. Additionally, I
                  bring experience in project management tools like Jira,
                  ensuring smooth collaboration and delivery in team
                  environments.{" "}
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
              minHeight: "70vh",
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
