import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import image from '../img/bg.png'
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
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={about}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      </>
  )
}

export default About