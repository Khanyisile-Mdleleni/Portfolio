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
import ReCAPTCHA from "react-google-recaptcha";
import  { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {

  // --------------------------------------------Email js-----------------------------------

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
   

    emailjs
      .send(
        "service_iwwa848",
        "template_cx2fegh",
        emailData,
        "3JbxCt70QntLe28Rs"
      )

      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Email could not be sent:", error);
        }
      );
      e.target.reset()
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  }


 // --------------------------------------------------Recaptcha Verification----------------------------

 const [verified, setVerified] = useState(false);

  // --------------------------------------------------Form Validation---------------------------------

  

  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  
  function handleSubmit(event) {
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail(event);
      setFormSubmitted(true);
      setVerified(true);
      
    }
  
    setValidated(true);
    
  }




  
 
// --------------------------------------------------Recaptcha Verification----------------------------

 const recaptchaRef = useRef();

 function handleRecaptchaChange(value) {
  console.log("Captcha value:", value);
  setVerified(value); // Update the verified state with the reCAPTCHA value
}

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
                      <i className="uil uil-phone"></i>
                    </a>{" "}
                    068 607 6036
                  </li>
                  <li>
                    <a href="">
                      <i className="uil uil-envelope"></i>
                    </a>{" "}
                    khanyisilemdleleni@gmail.com
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
              <Form validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Col}
                        md="8"
                        
                      >
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter your First name"
                          name="name"
                          onChange={handleInputChange}

                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>{" "}
                  <br />
                  <Form.Group
                    as={Col}
                    md="8"
                   
                  >
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        onChange={handleInputChange}
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
                      
                      >
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Message"
                            aria-describedby="inputGroupPrepend"
                            required
                            as="textarea"
                            name="message"
                            onChange={handleInputChange}
                            rows={4}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>{" "}
                  <br />
                  <ReCAPTCHA
                    sitekey="6Lfc8QcoAAAAAFdz7aA7dXGX5cwCwbge4gpkEP5y"
                    onChange={handleRecaptchaChange}
                  />
                  <br />
                  <Button type="submit" id="btn" disabled= {!verified}>
                    Send Message <i className="uil uil-message"></i>
                  </Button>
                  {formSubmitted && (
                    <p className="text-success">Message sent successfully!</p>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>

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
                <a href="https://github.com/Khanyisile-Mdleleni">
                  <i className="uil uil-github"></i>
                </a>
                <a href="https://twitter.com/kay_mdleleni/">
                  <i className="uil uil-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/khanyisile-mdleleni-b77691250/">
                  <i className="uil uil-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="footer_title">
              <p>&#169; Khanyisile 2023. All right reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contact;
