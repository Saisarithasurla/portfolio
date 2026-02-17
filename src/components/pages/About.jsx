import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
 
    <div className='ml-20 mr-20 bg-emerald-400 pb-28 pr-20 pl-20 '>
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
       <h1 className='text-6xl text-red-800 text-center p-8 font-bold mt-4'>About Me </h1>
        <div>
            <p className=' text-2xl text-center'>I’m Surla Sai Saritha, a Mechanical Engineering graduate who transitioned into software development. My journey into programming started with a curiosity for solving problems with code, which quickly grew into a passion for building web applications that make an impact.</p> 
            <br></br>
            <p className='text-2xl text-center'>During my transition into full stack development, I focused on mastering Python, Django, React, and working with databases like MySQL and MongoDB. I enjoy designing responsive, user-friendly applications and developing practical solutions that address real-world challenges.</p>
            <br></br>
            <p className='text-2xl text-center'>I am committed to writing clean, efficient, and maintainable code while continuously learning new technologies. Collaborating with teams, taking ownership of tasks, and building projects that add value are what drive me. Outside of work, I enjoy exploring new tools, experimenting with small projects, and improving my programming skills.</p>
        </div>
   
    </motion.div>
     </div>
    
    
  )
}
export default About