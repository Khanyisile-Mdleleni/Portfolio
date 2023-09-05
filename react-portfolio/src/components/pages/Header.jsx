import {Link} from 'react-router-dom'
import React, {useState} from 'react' 

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='stroke'>
           <Link to='/' className='title'> K || M</Link>
           <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
           }}>
            <span></span>
            <span></span>
            <span></span>
           </div>
        <ul className={menuOpen ? 'open' : ''}>
            
            <li>
                <Link to='/home' > Home</Link>
            </li>
            <li>
                <Link  to='/about'> About</Link>
            </li>
            <li>
                <Link  to='/skills'> Qualifications</Link>
            </li>
            <li>
                <Link  to='/services'> Services</Link>
            </li>
            <li>
                <Link  to='/portfolio'> Portfolio</Link>
            </li>
            <li>
                <Link  to='/contact'> Contact Me</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header