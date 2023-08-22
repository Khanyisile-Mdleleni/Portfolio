import React from 'react'
import image from '../img/bg.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 function Services() {
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
        <Card.Title className='text-center, fs-3'><i className="uil uil-web-grid-alt"></i> UI/UX Design</Card.Title>  <br /><br /><br />
        <Card.Link  href="#" style={{ textDecoration: 'none', color: '#fff'}}>View more <i className="uil uil-arrow-right"></i></Card.Link>
      </Card.Body>
      </Card> <br/>
        </Col>

        <Col sm>
        <Card style={{ width: '18rem', backgroundColor: 'rgba(118, 64, 119,1 )', height: '20rem' }}>
      <Card.Body>
        <Card.Title className='text-center , fs-3'><i class="uil uil-arrow"> </i>Frontend</Card.Title>  <br /><br /><br />
        <Card.Link  className='fs-6' href="#" style={{ textDecoration: 'none', color: '#fff'}}>View more <i className="uil uil-arrow-right"></i></Card.Link>
      </Card.Body>
      </Card><br/>
        </Col>

        <Col sm>
        <Card style={{ width: '18rem', backgroundColor: 'rgba(118, 64, 119,1 )', height: '20rem' }}>
      <Card.Body>
        <Card.Title className='text-center , fs-3'><i class="uil uil-pen"></i> Backend </Card.Title>  <br /><br /><br />
        <Card.Link href="#" style={{ textDecoration: 'none', color: '#fff'}}>View more <i className="uil uil-arrow-right"></i></Card.Link>
      </Card.Body>
      </Card><br/>
        </Col>
      </Row>
      </Container>
      
     </div>
      </>
  )
}

export default Services