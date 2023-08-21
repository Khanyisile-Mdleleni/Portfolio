import React from 'react'
import image from '../img/bg.png'

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
       <h3 id='subtitle'>What I offer</h3>
      </div>

      
      </div>
      </>
  )
}

export default Services