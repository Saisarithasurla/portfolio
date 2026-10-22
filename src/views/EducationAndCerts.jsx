import React from 'react';
import { Award, GraduationCap, Code, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const EducationAndCerts = ({ educationData, certifications, codingProfiles }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="education" className="py-12 md:py-16 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-item ${isVisible ? 'revealed' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700 uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Qualifications & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education, Certifications & Coding Profiles
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Continuous learning across Full Stack Python, Cloud, Data Science, and Problem Solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Coding Profiles */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Education Block */}
            <div className="glass-card-light rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Higher Education</h3>
                  <p className="text-xs text-slate-500 font-medium">Academic Background & Distinction</p>
                </div>
              </div>

              {educationData.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-indigo-600 font-bold">{edu.duration}</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold font-mono border border-emerald-200">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 pt-1">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-semibold text-slate-700">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Coding Profiles Block */}
            <div className="glass-card-light rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Competitive Coding & Practice</h3>
                  <p className="text-xs text-slate-500 font-medium">Algorithmic and problem-solving platforms</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {codingProfiles.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group p-4 rounded-xl bg-slate-50 hover:bg-indigo-50/60 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>View Profile</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6">
            <div className="glass-card-light rounded-2xl p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Certifications & Training</h3>
                    <p className="text-xs text-slate-500 font-medium">Credentials from premier institutions</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {cert.title}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">
                            {cert.issuer}
                          </div>
                        </div>
                      </div>
                      
                      <span className="shrink-0 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-mono border border-indigo-100 font-semibold">
                        {cert.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training highlights footer */}
              <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Includes IIT Madras (NPTEL), IIRS ISRO, Infosys Springboard & Naresh i Tech
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
