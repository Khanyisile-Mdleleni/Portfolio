import React from 'react'
import image from '../img/bg.png'
import img from '../img/bibo.png'

function Home () { 
    return (
      <>
       <div id='home' style={{
        backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '690px'
        }}>
        
         <div className='container' id='home-container'>
           <div id='icons'>
             <ul>
               <li><a href="https://www.linkedin.com/in/khanyisile-mdleleni-b77691250/" className="home__social-icon"><i className="uil uil-linkedin"></i></a></li>
               <li><a href="https://github.com/Khanyisile-Mdleleni" className="home__social-icon"><i className="uil uil-github"></i></a></li>
               <li><a href="https://m.facebook.com/khanyisile.mdleleni.16?eav=AfYMrSPTI18yWVy7cTOlgkNuds" className="home__social-icon"><i className="uil uil-facebook"></i></a></li>
             </ul>  
          
           </div>
           <div id='home-content'>
             <h1 id='home-title'>Hi, I am Khanyisile Mdleleni</h1> 
             <h3 id='home-subtitle'>Software Developer</h3>
             <p id='home-description'>Mid level experience in web design and development knowledge, producing quality work.</p><br/><br/>
           <div> 
            <a href=""><button type="button" id='btn' >Contact Me</button></a>
           </div>     
          </div>     
         </div> 
        </div>
      
      </>   
    )
  }
 export default Home