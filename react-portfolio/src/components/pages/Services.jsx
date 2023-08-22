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
     
     
      
     </div>
      </>
  )
}

export default Services