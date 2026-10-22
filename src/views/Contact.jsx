import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { Icons } from '../components/CustomIcons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Contact = ({
  personalInfo,
  contactForm,
  formStatus,
  handleInputChange,
  handleContactSubmit
}) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-100/60 relative">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-3 reveal-fade ${isVisible ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind, hiring for a Full Stack Developer role, or want to discuss technology? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Availability - Slide from Left */}
          <div className={`lg:col-span-5 space-y-6 reveal-left delay-150 ${isVisible ? 'revealed' : ''}`}>
            
            <div className="glass-card-light rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Contact Channels
              </h3>

              <div className="space-y-4">
                
                {/* Email card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 flex items-start gap-4 transition group"
                >
                  <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-medium">Email Address</div>
                    <div className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-300 flex items-start gap-4 transition group"
                >
                  <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-medium">Phone / WhatsApp</div>
                    <div className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location card */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono font-medium">Current Location</div>
                    <div className="text-sm font-bold text-slate-800">
                      {personalInfo.location}
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold mt-0.5">Open to Remote & Onsite Opportunities</div>
                  </div>
                </div>

              </div>

              {/* Social profiles */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3 font-mono font-semibold">Social & Developer Profiles:</div>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-center text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm"
                  >
                    <Icons.Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-center text-xs font-bold flex items-center justify-center gap-2 transition"
                  >
                    <Icons.Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Send Message Form - Slide from Right */}
          <div className={`lg:col-span-7 reveal-right delay-200 ${isVisible ? 'revealed' : ''}`}>
            <div className="glass-card-light rounded-2xl p-5 sm:p-8">
              
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Message</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Start a Conversation
              </h3>

              {formStatus.state === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              )}

              {formStatus.state === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Full Stack Developer Opening / Client Project"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={contactForm.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.state === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer"
                >
                  {formStatus.state === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
