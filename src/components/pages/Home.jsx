
import React from "react";
import { Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex flex-col w-screen md:flex-row   items-center justify-between min-h-screen px-10 md:px-20 py-16 bg-linear-to-r from-blue-500 to-purple-600 text-white">
      <motion.div
        className="flex-1 flex flex-col gap-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold ml-52 -mt-28">
          Hi, I'm <br />
          <span className="text-black text-4xl">Surla Sai Saritha</span>
        </h1>

        <h2 className="text-6xl md:text-3xl font-bold text-red-700 ml-52">
          <TypeAnimation
            sequence={[
              "Full Stack Python Developer",
              2000,
            ]}
            speed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-200 max-w-xl ml-52 ">
          Mechanical Engineering graduate transitioning into a Full Stack Python
          Developer skilled in Python, Django, and React. Passionate about building
          responsive web applications and scalable backend systems using modern technologies.
        </p>
        <motion.div
          className="flex flex-wrap gap-4 mt-4 items-center ml-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="saritha_Resume.pdf"
            className="bg-red-500 text-white px-5  ml-28 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Download CV
          </a>
          <a
            href="projects"
            className="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            See My Projects
          </a>
          <a
            href="https://github.com/Saisarithasurla"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/surla-sai-saritha-b2736a260/"
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </motion.div>

<div className="flex-1 flex mt-10 md:mt-0">
  <motion.img
    src="profile.jpeg" 
    alt="Profile"
    className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white object-cover"
    animate={{
      y: [0, -15, 0], 
      boxShadow: [
        "0 0 20px 10px rgba(255,192,203,0.4)",
        "0 0 40px 20px rgba(255,192,203,0.7)",
        "0 0 20px 10px rgba(255,192,203,0.4)"
      ] 
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    }}
    style={{
      marginLeft: "100px", 
      marginTop: "-50px" 
    }}
  />
</div>

    </section>
  );
}

export default Home;
