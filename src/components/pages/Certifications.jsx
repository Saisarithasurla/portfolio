import React from "react";
import { motion } from "framer-motion";


const certifications = [
  {
    title: "Basics of Python",
    provider: "Infosys Springboard",
    year: 2024,
    description: "Python Programming fundamentals and applications",
    image: "python.jpeg",
    category: "Course",
  },
  {
    title: "Entrepreneurship",
    provider: "IIT-Madras-NPTEL",
    year: 2024,
    description: "Basics of entrepreneurship and startup management",
    image: "NPTEL Entrpreneurship.jpeg",
    category: "Course",
  },
  {
    title: "Autonomous Vehicle Workshop",
    provider: "IIT Madras",
    year: 2023,
    description: "Hands-on experience with sensors and autonomous systems.",
    image: "workshop.jpeg",
    category: "Workshop",
  },
  {
    title: "Innovation in Robotics Workshop",
    provider: "SIH / Hackathon",
    year: 2023,
    description: "Participated in team-based robotics challenges.",
    image: "workshop 1.jpeg",
    category: "Workshop",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certifications = () => {
  const courses = certifications.filter((cert) => cert.category === "Course");
  const workshops = certifications.filter((cert) => cert.category === "Workshop");

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
    try { window.history.pushState({ modal: true }, ""); modalOpenRef.current = true; } catch (e) {}
    setModalSrc(src);
  };

  const closeModal = () => {
    if (modalOpenRef.current) {
      try { window.history.back(); } catch (e) { setModalSrc(null); modalOpenRef.current = false; }
    } else setModalSrc(null);
  };

  return (
    <>
    <section id="certifications" className="bg-cyan-600 py-20 w-screen">
 <h2 className="text-5xl font-bold text-center mb-16 -mt-16 text-white w-full">Certifications</h2>
      <h3 className="text-3xl font-bold mb-8 text-neutral-900 text-center w-full">Courses</h3>
      <div className="flex flex-wrap justify-center gap-10 w-full px-4">
        {courses.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex-1 min-w-100 max-w-75"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-64 flex items-center justify-center bg-gray-100">
              <button type="button" onClick={() => openModal(cert.image)} className="w-full">
                <img
                  src={cert.image}
                  alt={cert.provider}
                  className="max-h-full max-w-full"
                />
              </button>
            </div>

            <div className="p-6 text-center">
              <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-1">{cert.provider}</p>
              <p className="text-gray-500 mb-2">{cert.year}</p>
              <p className="text-gray-700">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
<h3 className="text-3xl font-bold mb-8 text-center w-full mt-24 text-amber-900">Workshops</h3>
<div className="flex flex-wrap justify-center gap-10 w-full px-4">
  {workshops.map((cert, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex-1 min-w-100 max-w-75"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        <button type="button" onClick={() => openModal(cert.image)} className="w-full">
          <img
            src={cert.image}
            alt={cert.provider}
            className="max-h-full max-w-full"
          />
        </button>
      </div>

      <div className="p-6 text-center">
        <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
        <p className="text-gray-600 mb-1">{cert.provider}</p>
        <p className="text-gray-500 mb-2">{cert.year}</p>
        <p className="text-gray-700">{cert.description}</p>
      </div>
    </motion.div>
  ))}
</div>

    </section>
     {modalSrc && (
       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={closeModal}>
         <div className="max-w-3xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
           <img src={modalSrc} alt="cert" className="w-full h-auto rounded-lg shadow-lg" />
           <div className="flex justify-end mt-3">
             <button type="button" onClick={closeModal} className="px-4 py-2 bg-white rounded-lg">Close</button>
           </div>
         </div>
       </div>
      )}
     </>
    );
};

export default Certifications;
