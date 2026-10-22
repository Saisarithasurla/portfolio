import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Icons } from '../components/CustomIcons';

export const Footer = ({ personalInfo, scrollTo }) => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 relative text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              {personalInfo.name}
            </span>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Full Stack Python & React Developer • Crafting scalable digital solutions
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="GitHub"
            >
              <Icons.Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="LinkedIn"
            >
              <Icons.Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => scrollTo('hero')}
              className="p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition ml-2 cursor-pointer border border-indigo-200 shadow-sm"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 font-medium">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with React.js, Tailwind CSS & MVC architecture
          </div>
        </div>
      </div>
    </footer>
  );
};
