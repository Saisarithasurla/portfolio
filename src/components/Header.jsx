import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className=' bg-black text-white py-2 px-5 flex justify-between items-center h-24'>
        <h2 className='text-5xl text-white font-bold'>Surla Sai <span className='text-5xl text-blue-500 font-bold'>Saritha</span></h2>
        <nav>
            <ul className='flex justify-center items-center gap-6'>
                <li><Link to=""  className='text-2xl hover:text-fuchsia-600 font-bold'>Home</Link></li>
                <li><Link to="/about" className='text-2xl hover:text-fuchsia-600 font-bold' >About</Link></li>
                <li><Link to="/projects"  className='text-2xl hover:text-fuchsia-600 font-bold'>Projects</Link></li>
                <li><Link to="/skills" className='text-2xl hover:text-fuchsia-600 font-bold' >Skills</Link></li>
                <li><Link to="/certifications" className='text-2xl hover:text-fuchsia-600 font-bold' >Certifications</Link></li>
                <li><Link to="/contact"  className='text-2xl hover:text-fuchsia-600 font-bold'>Contact</Link></li>
                
            </ul>
        </nav>
    </header>
  )
}

export default Header