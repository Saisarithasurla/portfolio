import React from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  X
} from 'lucide-react';
import { Icons } from '../components/CustomIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Projects = ({
  projects,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedProject,
  setSelectedProject
}) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-slate-100/50 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-item ${isVisible ? 'revealed' : ''}`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Production Client & Real-World Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Highlighting full-stack applications, mobile platforms, and data analytics architectures built to solve real-world problems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card-light rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-300 transition-all duration-300 group"
            >
              <div>
                {/* Header row: badge + link */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition"
                      title="GitHub Repository"
                    >
                      <Icons.Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mt-5">
                  <span className="text-xs font-mono text-indigo-600 font-semibold block mb-1">
                    {project.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights Bullets */}
                <div className="mt-5 space-y-2">
                  {project.bullets.slice(0, 3).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack badges & details button */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-[11px] font-mono text-slate-700 border border-slate-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Explore Full Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 mb-2 border border-indigo-100">
                {selectedProject.category} • {selectedProject.tagline}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Detailed Implementation & Accomplishments:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Tech Stack Applied:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold text-xs flex items-center justify-center gap-2 transition shadow-md shadow-indigo-600/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Platform Demo</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
