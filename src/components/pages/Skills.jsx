import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGit, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiMysql, SiMongodb } from 'react-icons/si';
import { FaLightbulb, FaComments, FaUsers, FaClock, FaCrown } from 'react-icons/fa';

function Skills() {

  const skillscategory = [
    {
      category: "Frontend Development",
      skills: [
        { name: 'HTML', percentage: 95, icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS', percentage: 90, icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', percentage: 80, icon: <FaJs />, color: '#F7DF1E' },
        { name: 'ReactJS', percentage: 85, icon: <FaReact />, color: '#61DAFB' },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: 'Python', percentage: 90, icon: <FaPython />, color: '#3776AB' },
        { name: 'Django', percentage: 85, icon: <SiDjango />, color: '#092E20' },
        { name: 'Rest API', percentage: 75, icon: <FaDatabase />, color: '#FF6C37' },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: 'MySQL', percentage: 95, icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', percentage: 80, icon: <SiMongodb />, color: '#47A248' },
      ]
    },
    {
      category: "Version Control",
      skills: [
        { name: 'Git', percentage: 90, icon: <FaGit />, color: '#F05032' },
        { name: 'GitHub', percentage: 80, icon: <FaGithub />, color: '#181717' },
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: 'Problem Solving', percentage: 90, icon: <FaLightbulb />, color: '#34D399' },
        { name: 'Communication', percentage: 85, icon: <FaComments />, color: '#34D399' },
        { name: 'Team Work', percentage: 95, icon: <FaUsers />, color: '#34D399' },
        { name: 'Time Management', percentage: 90, icon: <FaClock />, color: '#34D399' },
        { name: 'Leadership', percentage: 80, icon: <FaCrown />, color: '#34D399' },
      ]
    }
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };
return (
    <div className="bg-linear-to-r from-indigo-100 to-purple-100 py-20 min-h-screen w-screen p-20">
      <h1 className='text-6xl text-center text-blue-700  font-bold mb-16 -mt-12'>My Skills</h1>
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillscategory.map((category, index) => (
          <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 border-b-2 border-purple-200 pb-3">{category.category}</h2>
<div className="space-y-5">
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3"style={{ color: skill.color }}>{skill.icon}</span>
                    <span className="flex-1 font-semibold">{skill.name}</span>
                    <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded-full">{skill.percentage}%</span>
                     </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.percentage}%` }}transition={{ duration: 1.2 }}viewport={{ once: true }}className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}/>
                  </div>
</div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}export default Skills;
