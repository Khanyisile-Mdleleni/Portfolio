import React from 'react'
import image from '../img/bg.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import about from '../img/about.png'

function About (){
  return(
    
      <>
      <div id='home' style={{
        backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '690px'
        }}>

      <div id='intro'>
       <h1 id='title'>About</h1>
       <h3 id='subtitle'>My Introduction</h3>
      </div>

      <div>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src={about} alt="" style={{
            width:'320px',height:'320px'}}/>
        </Col> 

        <Col  xs={12} md={8}>
         <p id='about-description'> My primary responsibility is to design, develop and
             maintain high-quality web applications using react,
             javascript other related technologies. </p>
         <p id='about-description'>Birthday: 12 Feb 2001 <br/>
            Gender: Female <br/>
            Freelance: Available <br/>
         </p>
         <Row>
         <Col xs={6} md={4}>
          <span id='about-description'><b>01+</b></span>
          <span id='about-description'> Years <br/> experience</span>
         </Col>
         <Col xs={6} md={4}>
          <span id='about-description'><b>02+</b></span>
          <span id='about-description'> Completed <br/> projects</span>
         </Col>
         <Col xs={6} md={4}>
          <span id='about-description'><b>01+</b></span>
          <span id='about-description'> Companies <br/> worked</span>
         </Col>
         </Row><br />
         <div id='about-btn'> 
            <a href=""><button type="button" id='btn' >Download CV</button></a>
           </div> 
        </Col>
      </Row>
      
     

    </Container>
    </div>
      
      </div>
      </>
  )
}

export default About