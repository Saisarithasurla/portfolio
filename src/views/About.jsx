import React from 'react';
import { 
  User, 
  CheckCircle, 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  Rocket, 
  Smartphone
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About = ({ personalInfo }) => {
  const [ref, isVisible] = useScrollReveal();

  const corePillars = [
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      desc: 'Seamless integration from React and modern frontends to Python and Django REST backends.',
      color: 'indigo'
    },
    {
      icon: Cpu,
      title: 'High-Performance APIs',
      desc: 'Designing clean, secure RESTful endpoints with PostgreSQL, Supabase, MySQL, and optimized queries.',
      color: 'purple'
    },
    {
      icon: Rocket,
      title: 'Production-Ready Mindset',
      desc: 'Hands-on client project experience with React Native mobile apps, Git version control, and Agile workflows.',
      color: 'emerald'
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 space-y-3 reveal-fade ${isVisible ? 'revealed' : ''}`}>
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
          
          {/* Main About Story - Slide from Left */}
          <div className={`lg:col-span-7 glass-card-light rounded-2xl p-6 sm:p-8 space-y-6 reveal-left delay-100 ${isVisible ? 'revealed' : ''}`}>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <User className="w-6 h-6 text-indigo-600" />
                Professional Summary
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-base">
                {personalInfo.about}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
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

          {/* Right Column: Core Engineering Strengths - Slide from Right */}
          <div className={`lg:col-span-5 glass-card-light rounded-2xl p-6 sm:p-8 space-y-4 reveal-right delay-200 ${isVisible ? 'revealed' : ''}`}>
            <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-600" />
              Core Engineering Strengths
            </h4>
            
            <div className="space-y-3.5">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {pillar.title}
                        </div>
                        <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {pillar.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
