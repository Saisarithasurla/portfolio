import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 4,
    title: "BrainSpark – AI Content Generation Platform",
    desc: "Developed a full-stack AI-powered web application using React.js (frontend) and Django REST API (backend).",
    github: "https://github.com/Saisarithasurla/Brainspark-ai-generator",
    live: "https://brainspark-ai-saritha.netlify.app/",
    images: ["/brainspark.png", "/output.png"],
    tech: ["React.js", "Tailwind CSS", "Django", "REST API"],
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
    id: 1,
    title: "Social Media Addiction Analysis",
    desc: "Analyzed data from 705 students using MySQL and Power BI to study social media usage. Dashboard insights revealed links between high social media use, poor sleep, conflicts, and lower academic performance.",
    github: "https://github.com/Saisarithasurla/MYSQL_notes-Project/tree/main/PROJECT",
    image: "/sql.jpeg",
    tech: ["MySQL", "PowerBI"],
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
  const [imageIndices, setImageIndices] = React.useState({});
  const [modalSrc, setModalSrc] = React.useState(null);
  const modalOpenRef = React.useRef(false);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (modalOpenRef.current) window.history.back();
        else setModalSrc(null);
      }
    };
    const onPop = () => {
      if (modalOpenRef.current) {
        modalOpenRef.current = false;
        setModalSrc(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  const openModal = (src) => {
    try {
      window.history.pushState({ modal: true }, "");
      modalOpenRef.current = true;
    } catch (e) {
      // ignore
    }
    setModalSrc(src);
  };

  const closeModal = () => {
    if (modalOpenRef.current) {
      try { window.history.back(); } catch (e) { setModalSrc(null); modalOpenRef.current = false; }
    } else {
      setModalSrc(null);
    }
  };

  const nextImage = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project?.images) {
      setImageIndices((prev) => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) + 1) % project.images.length,
      }));
    }
  };

  const prevImage = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project?.images) {
      setImageIndices((prev) => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) - 1 + project.images.length) % project.images.length,
      }));
    }
  };

  return (
    <div className="py-2 px-6 pb-20 bg-linear-to-br from-[#c7d2fe] via-[#e0e7ff] to-[#f3e8ff] min-h-screen w-screen">
      <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-5xl text-center text-purple-700 font-bold mb-12 mt-10">My Projects  </motion.h1>
      <motion.div variants={containerVariants} initial="hidden" animate="visible"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {projects.map((project) => {
          const idx = imageIndices[project.id] || 0;
          const isLastImage = project.images ? idx === project.images.length - 1 : false;
          const isFirstImage = project.images ? idx === 0 : false;
          return (
          <motion.div key={project.id} variants={cardVariants} whileHover={{scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",}}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center p-5 rounded-2xl bg-white shadow-lg h-120 w-90">
            <div className="relative w-full flex items-center justify-center gap-2">
              <button
                onClick={() => prevImage(project.id)}
                className={`${project.images && project.images.length > 1 ? 'block' : 'hidden'} bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition ${isFirstImage ? 'opacity-40 pointer-events-none' : ''}`}
                aria-label="Previous image"
                aria-disabled={isFirstImage}
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="relative">
                <button type="button" onClick={() => openModal(project.images ? project.images[idx] : project.image)} className="w-full text-left">
                  <img src={project.images ? project.images[idx] : project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4 brightness-110 contrast-110"/>
                </button>
              </div>
              
              <button
                onClick={() => nextImage(project.id)}
                className={`${project.images && project.images.length > 1 ? 'block' : 'hidden'} bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition ${isLastImage ? 'opacity-40 pointer-events-none' : ''}`}
                aria-label="Next image"
                aria-disabled={isLastImage}
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
                <a href={project.live} className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition">
                  Live Demo
                </a>
              )}
              <a href={project.github} className="px-4 py-2 rounded-2xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                GitHub
              </a>
            </div>
          </motion.div>
          );
        })}
      </motion.div>
      {modalSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img src={modalSrc} alt="preview" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="flex justify-end mt-3">
              <button type="button" onClick={closeModal} className="px-4 py-2 bg-white rounded-lg">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Projects;
