import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300   ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-emerald-500">
            Surla Sai Saritha
          </h2>
          <p className="mt-2 text-xl font-bold">
            Aspiring Software Developer
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            Connect With Me
          </h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://linkedin.com/in/surla-sai-saritha-b2736a260" target="_blank" rel="noopener noreferrer"className="hover:text-cyan-400 transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Saisarithasurla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://leetcode.com/u/surla-sai-saritha/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a 
                href="https://www.hackerrank.com/profile/surlasaritha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                HackerRank
              </a>
            </li>
          </ul>
        </div>

      </div>
     <hr className="border-gray-700" />
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 Surla Sai Saritha. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
