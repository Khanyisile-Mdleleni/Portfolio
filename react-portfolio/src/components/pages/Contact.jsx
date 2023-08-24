import React from "react";
import image from "../img/bg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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
          height: "120vh",
        }}
      >
        <div id="intro">
          <h1 id="title">Contact Me</h1>
          <h3 id="subtitle">Get in touch</h3>
        </div>
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
            <Col>
              <div id="form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                        <Form.Control.Feedback>
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row> <br />

                  <Form.Group
                    as={Col}
                    md="8"
                    controlId="validationCustomUsername"
                  >
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Email"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group> <br />

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
                        as="textarea" rows={4}
                      />
                      <Form.Control.Feedback type="invalid">
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                    </Col>
                  </Row> <br />
                  
                  <Button type="submit" id="btn">Send Message</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact