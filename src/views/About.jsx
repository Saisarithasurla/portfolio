import React from 'react';
import { User, Phone, Mail, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About = ({ personalInfo, educationData }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="py-20 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-item ${isVisible ? 'revealed' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700 uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Fast, Reliable, & User-Focused Applications
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Bridging robust Python backend architectures with sleek, modern React frontends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main About Story */}
          <div className="lg:col-span-7 glass-card-light rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <User className="w-6 h-6 text-indigo-600" />
              Professional Summary
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-base">
              {personalInfo.about}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                What I Bring to Your Team:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Full-lifecycle Python & React development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clean REST API architecture & DB optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cross-platform mobile apps with React Native</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Agile teamwork, Git, and bug triage skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info & Education Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info Card */}
            <div className="glass-card-light rounded-2xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Direct Contact
              </h4>
              
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition group font-medium"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition group font-medium"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-600 font-medium">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.location} (Open to Relocation / Remote)</span>
                </div>
              </div>
            </div>

            {/* Academic Foundation Card */}
            {educationData.map((edu, idx) => (
              <div key={idx} className="glass-card-light rounded-2xl p-6 border-l-4 border-l-indigo-600 space-y-2">
                <div className="flex items-center justify-between text-xs text-indigo-600 font-mono">
                  <span>{edu.duration}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
                    {edu.score}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};
