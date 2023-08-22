import React from 'react'
import image from '../img/bg.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import figma from '../img/figma.png'



 function Services() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id='home' style={{
        backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '690px'
        }}>
      <div id='intro'>
       <h1 id='title'>Services</h1>
       <h3 id='subtitle'>What I offer</h3><br/>
      </div>
     
      <Container>
      <Row>
        <Col sm>
        <Card style={{ 
          width: '18rem', backgroundColor: 'rgba(118, 64, 119,1 )', height: '20rem'}}>
      <Card.Body>
        <Card.Title className='text-center, fs-3'><i className="uil uil-web-grid-alt"></i> UI/UX Design</Card.Title><br /><br /><br />
        <div className='text-center'>
        <Card.Link>
          <Button variant='info-emphasis' onClick={handleShow}>View more  <i className="uil uil-arrow-right"></i></Button>
       </Card.Link>
        </div>
      </Card.Body>
      </Card> <br/>
        </Col>

        <Col sm>
        <Card style={{ width: '18rem', backgroundColor: 'rgba(118, 64, 119,1 )', height: '20rem' }}>
      <Card.Body>
        <Card.Title className='text-center , fs-3'><i class="uil uil-arrow"> </i>Frontend</Card.Title>  <br /><br /><br />
        <div className='text-center'>
        <Card.Link>
          <Button variant='info-emphasis' onClick={handleShow}>View more  <i className="uil uil-arrow-right"></i></Button>
       </Card.Link>
        </div>
      </Card.Body>
      </Card><br/>
        </Col>

        <Col sm>
        <Card style={{ width: '18rem', backgroundColor: 'rgba(118, 64, 119,1 )', height: '20rem' }}>
      <Card.Body>
        <Card.Title className='text-center , fs-3'><i class="uil uil-pen"></i> Backend </Card.Title>  <br /><br /><br />
        <div className='text-center'>
        <Card.Link>
          <Button variant='info-emphasis' onClick={handleShow}>View more  <i className="uil uil-arrow-right"></i></Button>
       </Card.Link>
        </div>
      </Card.Body>
      </Card><br/>
        </Col>
      </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: 'rgba(118, 64, 119,1 )', color: '#fff'}} closeButton>
          <Modal.Title>UI/UX Design</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'rgba(118, 64, 119,1 )', color: '#fff'}}>
         <ul>
          <li> Designing engaging and responsive landing pages.</li>
          <li> Creating the design and layout of a website or web pages.</li>
        </ul>
        <img src={figma} alt="" style={{
          width: '100px', height: '50px'
        }} />
       </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: 'rgba(118, 64, 119,1 )', color: '#fff'}} closeButton>
          <Modal.Title>UI/UX Design</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'rgba(118, 64, 119,1 )', color: '#fff'}}>
         <ul>
          <li> Designing engaging and responsive landing pages.</li>
          <li> Creating the design and layout of a website or web pages.</li>
        </ul>
        <img src={figma} alt="" style={{
          width: '100px', height: '50px'
        }} />
       </Modal.Body>
      </Modal>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: 'rgba(118, 64, 119,1 )', color: '#fff'}} closeButton>
          <Modal.Title>UI/UX Design</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'rgba(118, 64, 119,1 )', color: '#fff'}}>
         <ul>
          <li> Designing engaging and responsive landing pages.</li>
          <li> Creating the design and layout of a website or web pages.</li>
        </ul>
        <img src={figma} alt="" style={{
          width: '100px', height: '50px'
        }} />
       </Modal.Body>
      </Modal>
      
     </div>
      </>
  )
}

export default Services