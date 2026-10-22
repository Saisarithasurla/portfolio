import React from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  GitBranch, 
  Cpu, 
  Terminal, 
  Sparkles,
  Smartphone,
  Palette,
  Layout,
  Send,
  Cloud,
  FileCode2,
  Network
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = {
  Code2,
  FileCode2,
  Layers,
  Server,
  Database,
  GitBranch,
  Cpu,
  Terminal,
  Smartphone,
  Palette,
  Layout,
  Send,
  Cloud,
  Network
};

export const Skills = ({ skillsData }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-20 bg-slate-100/50 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-item ${isVisible ? 'revealed' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Specialized Technologies
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A comprehensive suite of modern frameworks, API architectures, and data stores honed through production client work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card-light rounded-2xl p-6 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                    {category.name}
                  </h3>
                  <span className="text-xs text-indigo-600 font-mono font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 font-semibold text-slate-700">
                            <IconComponent className="w-4 h-4 text-indigo-600" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {category.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-50 text-[11px] font-mono text-slate-600 border border-slate-200 font-medium"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
