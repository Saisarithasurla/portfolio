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

  return (
    <section id="certifications" className="bg-cyan-600 py-20 w-screen">
 <h2 className="text-5xl font-bold text-center mb-16 -mt-16 text-white w-full">Certifications</h2>
      <h3 className="text-3xl font-bold mb-8 text-neutral-900 text-center w-full">Courses</h3>
      <div className="flex flex-wrap justify-center gap-10 w-full px-4">
        {courses.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex-1 min-w-100 max-w-[300px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-64 flex items-center justify-center bg-gray-100">
              <img
                src={cert.image}
                alt={cert.provider}
                className="max-h-full max-w-full"
              />
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
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex-1 min-w-100 max-w-[300px]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        <img
          src={cert.image}
          alt={cert.provider}
          className="max-h-full max-w-full"
        />
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
  );
};

export default Certifications;
