import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { Icons } from '../components/CustomIcons';

export const Footer = ({ personalInfo, scrollTo }) => {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills & Tech Stack' },
    { id: 'experience', label: 'Work Experience' },
  ];

  const showcaseLinks = [
    { id: 'projects', label: 'Featured Projects' },
    { id: 'education', label: 'Education & Certifications' },
    { id: 'contact', label: 'Contact & Hire Me' },
  ];

  return (
    <footer className="relative bg-white border-t border-slate-200/80 pt-14 pb-10 overflow-hidden text-slate-600">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-80 h-80 bg-purple-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Clean Multi-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-100">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => scrollTo('hero')} 
              className="flex items-center gap-2 group cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center font-black text-white text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                SS
              </div>
              <div>
                <span className="font-bold text-slate-900 tracking-tight text-lg group-hover:text-indigo-600 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="block text-xs text-indigo-600 font-mono font-semibold">
                  Full Stack Developer
                </span>
              </div>
            </button>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Building scalable, responsive web & mobile applications with Python, Django, React, and Supabase. Passionate about clean code and modern architectures.
            </p>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 border border-slate-200 transition-all shadow-sm"
                title="GitHub Profile"
              >
                <Icons.Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 border border-slate-200 transition-all shadow-sm"
                title="LinkedIn Profile"
              >
                <Icons.Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 border border-slate-200 transition-all shadow-sm"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 border border-slate-200 transition-all shadow-sm"
                title="Call / WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Quick Links & Featured Work - Side by Side on Mobile */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {mainPages.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer font-medium text-left"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Work */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                Featured Work
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://pgmove.in"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>PGMove</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://stayzzy.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Stayzy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://brainspark-ai-saritha.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>BrainSpark AI</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('education')}
                    className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer font-medium text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Credentials</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Dedicated Contact & Reach Out (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Contact & Reach Out
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center gap-1.5 text-slate-600 font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="text-slate-900 font-semibold">Email:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-600 hover:text-indigo-600 hover:underline transition-colors font-mono"
                  title="Send an Email"
                >
                  {personalInfo.email}
                </a>
              </li>

              <li className="flex items-center gap-1.5 text-slate-600 font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="text-slate-900 font-semibold">Phone:</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-600 hover:text-indigo-600 hover:underline transition-colors font-mono"
                  title="Make a Call"
                >
                  {personalInfo.phone}
                </a>
              </li>

              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open for Full-time Roles & Relocation</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {currentYear} <span className="font-semibold text-slate-700">{personalInfo.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('hero')}
              className="px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-all cursor-pointer border border-indigo-200 shadow-sm flex items-center gap-1.5 font-bold"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
