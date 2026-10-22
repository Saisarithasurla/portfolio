import React, { useEffect } from 'react';
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

  // Prevent background scroll and allow ESC key close when modal is open
  useEffect(() => {
    if (selectedProject) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedProject, setSelectedProject]);

  return (
    <section id="projects" className="py-12 md:py-16 bg-slate-100/50 relative">
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

        {/* Project Showcase Cards (Alternating Layout) */}
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-indigo-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:border-indigo-300 transition-all duration-300 relative group cursor-pointer"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  
                  {/* Left or Right Text Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Top status & category pills */}
                    <div className="flex items-center gap-2 mb-4">
                      {project.liveUrl ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 text-xs font-semibold border border-slate-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          LIVE
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 text-xs font-semibold border border-slate-200">
                          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                          PROJECT
                        </span>
                      )}
                    </div>

                    {/* Project Main Title (Clean & Prominent) */}
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight mb-2">
                      {project.id === 'pgmove' ? 'PGMove.in' : project.id === 'stayzy' ? 'Stayzy.in' : project.title.split('–')[0].trim()}
                    </h3>

                    {/* Subtitle / Tagline uppercase (Vibrant Indigo) */}
                    <p className="text-xs sm:text-sm font-extrabold text-indigo-600 uppercase tracking-wider mb-4">
                      {project.tagline}
                    </p>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Compact 2-column feature checklist (matching reference UI) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
                      {(project.features || project.bullets.slice(0, 6)).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-200/80 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                          </span>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons: Clean Primary Visit button + Secondary buttons */}
                    <div className="flex flex-wrap items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30 hover:shadow-lg transition flex items-center gap-2 group/btn cursor-pointer"
                        >
                          <span>Visit {project.id === 'pgmove' ? 'PGMove.in' : project.id === 'stayzy' ? 'Stayzy.in' : project.title.split('–')[0].trim()} →</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm transition flex items-center gap-2 cursor-pointer"
                        >
                          <Icons.Github className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Full Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                  {/* Left or Right Browser Image Mockup Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white hover:border-indigo-300 transition-all duration-300 group/img">
                      
                      {/* Subtle Clean Header without any text */}
                      <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200/80 flex items-center">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                        </div>
                      </div>

                      {/* Image Preview Container (High Clarity) */}
                      <div className="relative bg-slate-50 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-cover group-hover/img:scale-[1.01] transition-transform duration-500 ease-out image-crisp"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal placed outside reveal container so it is fixed directly to screen */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm modal-backdrop-anim"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl relative max-h-[90vh] overflow-y-auto modal-content-anim my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 transition cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Preview */}
            {selectedProject.image && (
              <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full max-h-96 object-contain bg-slate-900/5 mx-auto"
                />
              </div>
            )}

            <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 mb-2 border border-indigo-100">
              {selectedProject.category} • {selectedProject.tagline}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 pr-10">
              {selectedProject.title}
            </h3>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-3 mb-6 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Detailed Implementation & Accomplishments:
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
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
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Icons.Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold text-xs flex items-center justify-center gap-2 transition shadow-md shadow-indigo-600/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Platform Demo</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
