import React from 'react';
import { ArrowRight, Download, Terminal, CheckCircle2, Code2, Database, Smartphone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero = ({ personalInfo, scrollTo }) => {
  const [ref, isVisible] = useScrollReveal();

  const titleText = personalInfo.title || "Full Stack Developer";
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const typingSpeed = isDeleting ? 45 : 95;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(titleText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === titleText.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayText(titleText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleText]);

  return (
    <section id="hero" className="relative pt-28 pb-10 md:pt-36 md:pb-12 overflow-hidden">
      {/* Background ambient lighting orbs (clean indigo, soft blue & subtle violet) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/50 rounded-full blur-3xl pointer-events-none animate-ambient-1" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-ambient-2" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none" />

      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-item ${isVisible ? 'revealed' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">Available for Full Stack Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Clean Typewriter Title without border and without dot */}
            <div className="flex items-center justify-center lg:justify-start min-h-[38px]">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent tracking-tight inline-flex items-center">
                <span>{displayText}</span>
                <span className="w-[3px] h-7 bg-indigo-600 ml-1.5 rounded-full animate-pulse" />
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline} Experienced in developing REST APIs, frontend & mobile systems with{' '}
              <span className="text-indigo-600 font-semibold">Django</span>,{' '}
              <span className="text-indigo-600 font-semibold">React.js</span>,{' '}
              <span className="text-indigo-600 font-semibold">React Native</span>, and{' '}
              <span className="text-indigo-600 font-semibold">Supabase</span>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-200 shadow-sm hover:border-slate-300 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.resumeUrl || "/final_resume.pdf"}
                target="_blank"
                rel="noreferrer"
                download="Sai_Saritha_Surla_Resume.pdf"
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-all flex items-center gap-2 text-sm font-semibold cursor-pointer shadow-xs"
                title="Download Resume"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Resume Summary highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Solinix Tech Intern
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real-time Client Projects
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> B.Tech 8.95 CGPA
              </span>
            </div>
          </div>

          {/* Clean Interactive Code / Tech Card */}
          <div className="lg:col-span-5">
            <div className="glass-card-light rounded-2xl p-6 border border-slate-200/90 relative shadow-xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full pointer-events-none" />
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-slate-600 font-semibold">developer.py</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>python3</span>
                </div>
              </div>

              {/* Code Snippet Box (Crisp dark code block for high readability & dev aesthetics) */}
              <div className="my-4 p-4 rounded-xl bg-slate-900 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 space-y-1 shadow-inner">
                <div>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300 font-semibold">FullStackDeveloper</span>:
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self):
                </div>
                <div className="pl-8 text-slate-300">
                  self.name = <span className="text-emerald-300">"{personalInfo.name}"</span>
                </div>
                <div className="pl-8 text-slate-300">
                  self.primary_stack = [
                    <span className="text-emerald-300">"Python"</span>,{' '}
                    <span className="text-emerald-300">"Django"</span>,{' '}
                    <span className="text-emerald-300">"React"</span>,{' '}
                    <span className="text-emerald-300">"React Native"</span>
                  ]
                </div>
                <div className="pl-8 text-slate-300">
                  self.databases = [<span className="text-emerald-300">"PostgreSQL"</span>, <span className="text-emerald-300">"MySQL"</span>]
                </div>
                <div className="pl-8 text-slate-300">
                  self.status = <span className="text-cyan-300">"Ready to build impact"</span>
                </div>
                <div className="pl-4 pt-2">
                  <span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">solve_problem</span>(self, requirement):
                </div>
                <div className="pl-8 text-emerald-400">
                  return <span className="text-slate-200">"Scalable & efficient solution delivered"</span>
                </div>
              </div>

              {/* Fast Feature Pillars */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                  <Code2 className="w-5 h-5 mx-auto text-indigo-600 mb-1" />
                  <div className="text-[11px] font-bold text-slate-800">Full Stack</div>
                  <div className="text-[10px] text-slate-500 font-medium">Web & Mobile</div>
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                  <Database className="w-5 h-5 mx-auto text-indigo-600 mb-1" />
                  <div className="text-[11px] font-bold text-slate-800">REST APIs</div>
                  <div className="text-[10px] text-slate-500 font-medium">Django & Supabase</div>
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100">
                  <Smartphone className="w-5 h-5 mx-auto text-indigo-600 mb-1" />
                  <div className="text-[11px] font-bold text-slate-800">React Native</div>
                  <div className="text-[10px] text-slate-500 font-medium">Cross Platform</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Numbers Bar */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card-light rounded-2xl p-5 text-center border border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Mail(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
