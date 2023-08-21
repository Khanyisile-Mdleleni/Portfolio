import React from 'react'
import image from '../img/bg.png'

function Portfolio() {
  return (
    <>
    <div id='home' style={{
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '690px'
      }}>
    <div id='intro'>
     <h1 id='title'>Portfolio</h1>
     <h3 id='subtitle'>Most recent work</h3>
    </div>
    </div>
    </>
  )
}

export default Portfolio