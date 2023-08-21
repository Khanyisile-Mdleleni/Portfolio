import React from 'react'
import image from '../img/bg.png'

function Contact() {
  return (
    <>
    <div id='home' style={{
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '690px'
      }}>
    <div id='intro'>
     <h1 id='title'>Contact Me</h1>
     <h3 id='subtitle'>Get in touch</h3>
    </div>
    </div>
    </>
  )
}

export default Contact