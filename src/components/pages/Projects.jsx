import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Social Media Addiction Analysis",
    desc: "Analyzed data from 705 students using MySQL and Power BI to study social media usage. Dashboard insights revealed links between high social media use, poor sleep, conflicts, and lower academic performance.",
    github: "https://github.com/Saisarithasurla/MYSQL_notes-Project/tree/main/PROJECT",
    image: "/sql.jpeg",
    tech: ["MySQL", "PowerBI"],
  },
  {
    id: 2,
    title: "GUI Calculator with Advanced Features",
    desc: "Developed a desktop calculator using Python and Tkinter with basic and scientific operations.",
    github: "https://github.com/Saisarithasurla/Calculator",
    image: "/calculator.jpg",
    tech: ["Python", "Tkinter", "GUI Development"],
  },
  {
    id: 3,
    title: "Interactive Image Gallery",
    desc: "Built a responsive image gallery using HTML, CSS, and JavaScript with smooth navigation.",
    live: "https://saisarithasurla.github.io/Image_Gallery/",
    github: "https://github.com/Saisarithasurla/Image_Gallery",
    image: "/image_gallery.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
function Projects() {
  return (
    <div className="py-2 px-6  bg-gradient-to-br from-[#c7d2fe] via-[#e0e7ff] to-[#f3e8ff] min-h-screen w-screen">
      <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-5xl text-center text-purple-700 font-bold mb-12 mt-10">My Projects  </motion.h1>
      <motion.div variants={containerVariants} initial="hidden" animate="visible"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants} whileHover={{scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",}}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center p-5 rounded-2xl bg-white shadow-lg h-120 w-90">
            <img src={project.image} alt={project.title}className="w-full h-48 object-cover rounded-lg mb-4"/>
        <h2 className="text-xl font-bold text-center mb-2">{project.title}</h2>
              <p className="text-sm text-gray-700 text-center mb-4 flex-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {project.tech.map((t, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
<div className="flex gap-4 mt-auto">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition">
                  Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default Projects;
