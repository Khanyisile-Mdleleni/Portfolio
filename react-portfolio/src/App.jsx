import React from 'react'
import Header from './components/pages/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Services from './components/pages/Services'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div className='App'>
     <Header />
     <Routes>
     <Route path='/' element={<Home />} />
     <Route exact path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  )
}

export default App
