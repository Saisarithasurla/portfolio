import React from "react";
import { motion } from "framer-motion";

function Pagenotfound() {
  return (
    <motion.div className="w-full h-screen flex items-center justify-center bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 0.8 }}>
      <motion.img src="404pagee.gif" alt="page not found" className="w-dvh mb-28" initial={{ scale: 0.8, y: -20 }}animate={{ scale: 1, y: 0 }}transition={{ duration: 0.6 }}whileHover={{ scale: 1.05 }}/>
    </motion.div>
  );
}
export default Pagenotfound;
