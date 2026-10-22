import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Icons } from '../components/CustomIcons';

export const Navbar = ({ activeSection, scrollTo, mobileMenuOpen, setMobileMenuOpen, personalInfo }) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-light border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center font-black text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              SS
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-lg group-hover:text-indigo-600 transition-colors">
                Sai Saritha
              </span>
              <span className="block text-xs text-indigo-600 font-mono font-semibold">
                Full Stack Python Dev
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials & Hire Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all border border-slate-200 shadow-sm"
              title="GitHub Profile"
            >
              <Icons.Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-all border border-slate-200 shadow-sm"
              title="LinkedIn Profile"
            >
              <Icons.Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-md shadow-indigo-600/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-light border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 flex gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition shadow-md"
            >
              Contact Sai Saritha
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
