import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import Certifications from './components/pages/Certifications'
import Pagenotfound from './components/pages/Pagenotfound'


function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
     

      <div className="mx-auto max-w-full min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/certifications' element={<Certifications/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<Pagenotfound />}/>
				


        </Routes>
      </div>
      </div>

      <Footer />
    </>
  )
}

export default App
