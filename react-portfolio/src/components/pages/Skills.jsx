import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../img/bg.png";

function Skills() {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "790px",
        }}
      >
        <div id="intro">
          <h1 id="titlie">Skills</h1>
          <h3 id="subtitle">My Personal Journey</h3>
        </div>
        <Container>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <h5>
                <i className="uil uil-graduation-cap"></i> Education
              </h5>
              <h6>Matric</h6>
              <p className="fs-6">Lutuka SSS</p>
              <p className="fs-6">
                <i className="uil uil-calender"></i> Jan 2016 - Nov 2018
              </p>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <h5>
                <i className="uil uil-briefcase"></i> Work
              </h5>
            </Col>
            <Col md={{ span: 3, offset: 3 }}></Col>
            <Col md={{ span: 3, offset: 3 }}>
              <h6>Junior Software Developer</h6>
              <p className="fs-6">UVU Africa</p>
              <p className="fs-6">
                <i className="uil uil-calender"></i> Feb 2023 - Jul 2023
              </p>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <h6>ND in Analytical Chemistry</h6>
              <p className="fs-6">Cape Peninsula University Of Tecnology</p>
              <p className="fs-6">
                <i className="uil uil-calender"></i> Feb 2020 - Nov 2022
              </p>
            </Col>
            <Col md={{ span: 3, offset: 3 }}></Col>
            <Col md={{ span: 3, offset: 3 }}></Col>
            <Col md={{ span: 3, offset: 3 }}>
              <h6>Junior Software Developer</h6>
              <p className="fs-6">Younglings Africa</p>
              <p className="fs-6">
                <i className="uil uil-calender"></i> Jul 2023 - Present
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Skills;
