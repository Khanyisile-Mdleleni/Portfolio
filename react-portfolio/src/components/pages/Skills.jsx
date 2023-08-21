import React from 'react'
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
     <h1 id='titlie'>Qualification</h1>
     <h3 id='subtitle'>My Personal Journey</h3>
    </div>
    </div>
    </>
  )
}

export default Skills