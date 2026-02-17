import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}className="min-h-screen w-full flex items-center justify-center px-6 ">
      <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} whileHover={{ scale: 1.01 }}
        className="mb-20 backdrop-blur-lg w-full max-w-6xl shadow-2xl p-12 grid md:grid-cols-2 gap-12 rounded-2xl bg-gradient-to-br from-[#fdf6f2] to-[#e8d6cc]">
        <motion.div initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}className="space-y-6">
          <h2 className="text-5xl font-serif text-[#7a3e2b]">Get in Touch</h2>
<p className="text-lg text-[#7a3e2b] italic">
            I’m currently looking for internship and entry-level opportunities
            in Frontend / Full Stack Development.
          </p>
          <div className="pt-4 space-y-4 text-gray-800 font-semibold">
          <a  href="mailto:surlasaritha@gmail.com" className="flex items-center gap-3 hover:translate-x-2 transition hover:text-[#7a3e2b] hover:underline">
              <FaEnvelope className="text-[#7a3e2b]" />
              <span>surlasaritha@gmail.com</span>
            </a>
               <a href="tel:+919390234442"className="flex items-center gap-3 hover:translate-x-2 transition hover:text-[#7a3e2b]">
              <FaPhone className="text-[#7a3e2b]" />
              <span>+91-9390234442</span>
            </a>
        <a href="https://github.com/Saisarithasurla" target="_blank" rel="noopener noreferrer"className="flex items-center  hover:underline gap-3 hover:translate-x-2 transition hover:text-[#7a3e2b]">
              <FaGithub className="text-[#7a3e2b]" />
              <span>github.com/Saisarithasurla</span>
            </a>
<a  href="https://linkedin.com/in/surla-sai-saritha" target="_blank"rel="noopener noreferrer" className="flex hover:underline items-center gap-3 hover:translate-x-2 transition hover:text-[#7a3e2b]">
              <FaLinkedin className="text-[#7a3e2b]" />
              <span>linkedin.com/in/surla-sai-saritha</span>
            </a>
</div>
        </motion.div>
        <motion.form  onSubmit={handleSubmit} initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="First Name"
              className="border border-gray-400 bg-transparent p-3 rounded-md outline-none focus:border-[#7a3e2b] transition"
              required/>
            <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Last Name"
              className="border border-gray-400 bg-transparent p-3 rounded-md outline-none focus:border-[#7a3e2b] transition"
              required/>
          </div>
<motion.input whileFocus={{ scale: 1.05 }} type="email"  placeholder="Email"
            className="w-full border border-gray-400 bg-transparent p-3 rounded-md outline-none focus:border-[#7a3e2b] transition"
            required/>
             <motion.textarea whileFocus={{ scale: 1.03 }} placeholder="Message" rows="4"
            className="w-full border border-gray-400 bg-transparent p-3 rounded-md outline-none focus:border-[#7a3e2b] transition"
            required/>
<motion.button whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.95 }}type="submit"
            className="bg-[#7a3e2b] text-white px-8 py-3 rounded-md shadow-lg hover:bg-[#5c2f21] transition">
            Send Message
          </motion.button>
 <AnimatePresence>
            {submitted && (
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}exit={{ opacity: 0 }}transition={{ duration: 0.5 }} className="text-green-700 font-bold text-lg">
                ✅ Message sent successfully!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
export default Contact;
