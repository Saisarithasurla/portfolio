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
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 glass-panel-light border-b border-slate-200/80">
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
                  Full Stack Developer
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
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay - Perfectly centered, no scrollbar */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 w-full h-full z-[9999] flex flex-col justify-between p-6 overflow-hidden select-none"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Top header inside overlay with logo and close button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
            <button 
              onClick={() => scrollTo('hero')} 
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-black text-white text-lg shadow-md shadow-indigo-500/20">
                SS
              </div>
              <div>
                <span className="font-bold text-slate-900 tracking-tight text-lg">
                  Sai Saritha
                </span>
                <span className="block text-xs text-indigo-600 font-mono font-semibold">
                  Full Stack Developer
                </span>
              </div>
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Navigation Links & CTA */}
          <div className="flex-1 flex flex-col justify-center items-center py-4 w-full max-w-sm mx-auto">
            <nav className="w-full space-y-2 text-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full py-3 px-4 rounded-2xl text-lg font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600 font-bold shadow-sm'
                        : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    )}
                  </button>
                );
              })}

              <div className="pt-3 w-full">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-3.5 px-6 text-center text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-2xl transition shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>

          {/* Subtle bottom spacing placeholder to balance vertical centering */}
          <div className="h-6 shrink-0"></div>
        </div>
      )}
    </>
  );
};
