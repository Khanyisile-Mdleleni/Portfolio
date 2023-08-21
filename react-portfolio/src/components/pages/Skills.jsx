import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../img/bg.png'

 function Skills() {
  return (
    <>
    <div id='home' style={{
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '690px'
      }}>
    <div id='intro'>
     <h1 id='titlie'>Skills</h1>
     <h3 id='subtitle'>My Personal Journey</h3>
    </div>
    <Container>
      <Row>
        <Col>
         <h4><i className="uil uil-graduation-cap"></i> Education</h4>
         <div>
           <h6>Matric</h6>
           <span>Lutuka SSS</span>
           <i className="uil uil-calendar-alt"></i>
            Jan 2016 - Nov 2018
        </div>
                      
        </Col>
        <Col xs={5}>
          2 of 3
          </Col>
        <Col>
          <h4><i className="uil uil-briefcase"></i> Work</h4>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Skills