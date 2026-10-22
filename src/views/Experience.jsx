import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Experience = ({ experiences }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="py-12 md:py-16 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-item ${isVisible ? 'revealed' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Internship & Industry Experience
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real-time client project contributions delivered through rigorous Agile sprints and cross-functional teamwork.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical timeline bar */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-300 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative sm:pl-20">
                
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex absolute left-8 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-white border-2 border-indigo-600 items-center justify-center text-indigo-600 shadow-md shadow-indigo-600/20 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" />
                </div>

                {/* Experience Content Card */}
                <div className="glass-card-light rounded-2xl p-6 sm:p-8 hover:border-indigo-300 transition-all duration-300">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-1 border border-indigo-100">
                        {exp.type}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <div className="text-indigo-600 font-semibold text-base">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500 gap-1 font-mono font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet points */}
                  <div className="mt-5 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Contributions & Impact:
                    </h4>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-xs text-slate-500 mb-2 font-mono font-semibold">Technologies & Tools Employed:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
