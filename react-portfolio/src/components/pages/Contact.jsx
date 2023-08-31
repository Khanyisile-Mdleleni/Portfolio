import React from "react";
import image from "../img/bg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setFormSubmitted(false); // Reset the formSubmitted state
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setFormSubmitted(true);
      setShowModal(true);
    }

    setValidated(true);
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
        <div id="intro">
          <h1 id="title">Contact Me</h1>
          <h3 id="subtitle">Get in touch</h3>
        </div>{" "}
        <br />

        <Container>
          <Row>
            <Col>
              <div id="icons" className="fs-6">
                <ul>
                  <li>
                    <a href="">
                      <i className="uil uil-envelope"></i>
                    </a>{" "}
                    khanyisilemdleleni@gmail.com
                  </li>
                  <li>
                    <a href="">
                      <i className="uil uil-phone"></i>
                    </a>{" "}
                    063 109 8090
                  </li>
                  <li>
                    <a href="">
                      <i className="uil uil-map"></i>
                    </a>{" "}
                    Cape Town, 8001
                  </li>
                </ul>
              </div>
            </Col>

            {/* ----------------------------------------------Contact Form---------------------------------- */}

            <Col>
              <div id="form">
               
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col>
                        <Form.Group
                          as={Col}
                          md="8"
                          controlId="validationCustom01"
                        >
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your First name"
                          />
                          <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>{" "}
                    <br />
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustomUsername"
                    >
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="Enter your Email"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <br />
                    <Row>
                      <Col>
                        <Form.Group
                          as={Col}
                          md="8"
                          controlId="validationCustomUsername"
                        >
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              placeholder="Enter Your Message"
                              aria-describedby="inputGroupPrepend"
                              required
                              as="textarea"
                              rows={4}
                            />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>{" "}
                    <br />
                    <Button type="submit" id="btn" onSubmit={showModal}>
                      Send Message <i className="uil uil-message"></i>
                    </Button>
                  </Form>
              </div>
            </Col>
          </Row>
        </Container>

        {/*------------------------------Modal For Popup Message---------------------------------*/}
          
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Form Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been successfully submitted.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>  

        {/* ---------------------------------------Footer-------------------------------------------- */}

        <footer>
          <div id="footer-content">
            <div className="fs-6">
              <div className="footer_title">
                <h5>Khanyisile | Software Developer</h5>
              </div>
              <ul>
                <li>
                  <Link to="/about"> About</Link>
                </li>
                <li>
                  <Link to="/services"> Services</Link>
                </li>
                <li>
                  <Link to="/portfolio"> Portfolio</Link>
                </li>
              </ul>
            </div>

          {/*------------------------------------------- Footer Icons-------------------------------- */}

            <div className="footer_title">
              <div id="icons">
                <a href="https://m.facebook.com/khanyisile.mdleleni.16?eav=AfYMrSPTI18yWVy7cTOlgkNuds">
                  <i className="uil uil-facebook"></i>
                </a>
                <a href="https://twitter.com/kay_mdleleni/">
                  <i className="uil uil-twitter"></i>
                </a>
                <a href="https://www.instagram.com/khanyisile_mdleleni/">
                  <i className="uil uil-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer_title">
              <p>&#169; Khanyisile. All right reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contact;
