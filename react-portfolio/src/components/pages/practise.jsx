import React from 'react'

export default function practise() {
    const [show, setShow] = useState(false);
  const [pop, setPop] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleClose = () => setShow(false);
  const handleShut = () => setPop(false);
  const handleHide = () => setSlide(false);

  const handleShow = () => setShow(true);
  const handlePop = () => setPop(true);
  const handleSlide = () => setSlide(true);
  return (
    <>
    <Container>
    <Row className="justify-content-md-center">
      <Col md="auto">
        <Card   className="CardHover"
          style={{
            width: "16rem",
            backgroundColor: "rgba(118, 64, 119,1 )",
            height: "16rem",
            position: "static",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center, fs-3">
              <i className="uil uil-web-grid-alt"></i> UI/UX Design
            </Card.Title>
            <br />
            <br />
            <div className="text-center">
              <Card.Link>
                <Button variant="info-emphasis" onClick={handleShow}>
                  View more <i className="uil uil-arrow-right"></i>
                </Button>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>{" "}
        <br />
      </Col>

      <Col md="auto">
        <Card
          style={{
            width: "16rem",
            backgroundColor: "rgba(118, 64, 119,1 )",
            height: "16rem",
            position: "static",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center , fs-3">
              <i class="uil uil-arrow"> </i>Frontend
            </Card.Title>{" "}
            <br />
            <br />
            <div className="text-center">
              <Card.Link>
                <Button variant="info-emphasis" onClick={handlePop}>
                  View more <i className="uil uil-arrow-right"></i>
                </Button>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <br />
      </Col>

      <Col md="auto">
        <Card
          style={{
            width: "16rem",
            backgroundColor: "rgba(118, 64, 119,1 )",
            height: "16rem",
            position: "static",
          }}
        >
          <Card.Body>
            <Card.Title className="text-center , fs-3">
              <i class="uil uil-pen"></i> Backend{" "}
            </Card.Title>{" "}
            <br />
            <br />
            <div className="text-center">
              <Card.Link>
                <Button variant="info-emphasis" onClick={handleSlide}>
                  View more <i className="uil uil-arrow-right"></i>
                </Button>
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <br />
      </Col>
    </Row>
  </Container>
    
{/* -----------------------------------Bootstrap Modals--------------------------------- */}

  <Modal show={show} onHide={handleClose}>
    <Modal.Header
      style={{
        backgroundColor: "rgba(118, 64, 119,1 )",
        color: "#fff",
      }}
      closeButton
    >
      <Modal.Title>UI/UX Design</Modal.Title>
    </Modal.Header>
    <Modal.Body
      style={{
        backgroundColor: "rgba(118, 64, 119,1 )",
        color: "#fff",
      }}
    >
      <ul>
        <li> Designing engaging and responsive landing pages.</li>
        <li>
          {" "}
          Creating the design and layout of a website or web pages.
        </li>
      </ul>
      <img
        src={figma}
        alt=""
        style={{
          width: "100px",
          height: "50px",
        }}
      />
    </Modal.Body>
  </Modal>

  <Modal show={pop} onHide={handleShut}>
    <Modal.Header
      style={{
        backgroundColor: "rgba(118, 64, 119,1 )",
        color: "#fff",
      }}
      closeButton
    >
      <Modal.Title>Frontend</Modal.Title>
    </Modal.Header>
    <Modal.Body
      style={{
        backgroundColor: "rgba(118, 64, 119,1 )",
        color: "#fff",
      }}
    >
      <ul>
        <li>
          Uses frameworks like react to create user-friendly web pages.
        </li>
        <li>Create quality mockups and prototypes.</li>
      </ul>
      <img
        src={html}
        alt=""
        style={{
          width: "100px",
          height: "50px",
        }}
      />
      <img
        src={js}
        alt=""
        style={{
          width: "70px",
          height: "30px",
        }}
      />
      <img
        src={react}
        alt=""
        style={{
          width: "70px",
          height: "30px",
        }}
      />
    </Modal.Body>
  </Modal>

  <Modal show={slide} onHide={handleHide}>
    <Modal.Header
      style={{
        backgroundColor: "rgba(118, 64, 119,1 )",
        color: "#fff",
      }}
      closeButton
    >
      <Modal.Title>Backend</Modal.Title>
    </Modal.Header>
    <Modal.Body
      style={{
        backgroundColor: "rgba(118, 64, 119,1 )",
        color: "#fff",
      }}
    >
      <ul>
        <li>
          Implements responses to what the front-end has initiated.
        </li>
        <li>Creating databases.</li>
      </ul>
      <img
        src={js}
        alt=""
        style={{
          width: "70px",
          height: "30px",
        }}
      />
      <img
        src={node}
        alt=""
        style={{
          width: "70px",
          height: "30px",
        }}
      />
      <img
        src={firebase}
        alt=""
        style={{
          width: "70px",
          height: "30px",
        }}
      />
    </Modal.Body>
  </Modal>
  </>
  )
}