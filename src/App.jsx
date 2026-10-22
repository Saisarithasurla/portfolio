import React from 'react';
import { usePortfolioController } from './controllers/usePortfolioController';
import { Navbar } from './views/Navbar';
import { Hero } from './views/Hero';
import { About } from './views/About';
import { Skills } from './views/Skills';
import { Experience } from './views/Experience';
import { Projects } from './views/Projects';
import { EducationAndCerts } from './views/EducationAndCerts';
import { Contact } from './views/Contact';
import { Footer } from './views/Footer';

function App() {
  // Use Portfolio Controller (MVC Pattern)
  const controller = usePortfolioController();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white relative antialiased">
      
      {/* Background subtle modern ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-indigo-100/60 rounded-full blur-[140px] animate-ambient-1" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[140px] animate-ambient-2" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar
          activeSection={controller.activeSection}
          scrollTo={controller.scrollTo}
          mobileMenuOpen={controller.mobileMenuOpen}
          setMobileMenuOpen={controller.setMobileMenuOpen}
          personalInfo={controller.personalInfo}
        />

        <main>
          {/* Hero Section */}
          <Hero
            personalInfo={controller.personalInfo}
            scrollTo={controller.scrollTo}
          />

          {/* About Section */}
          <About
            personalInfo={controller.personalInfo}
            educationData={controller.educationData}
          />

          {/* Skills Section */}
          <Skills
            skillsData={controller.skillsData}
          />

          {/* Experience Section */}
          <Experience
            experiences={controller.experiences}
          />

          {/* Projects Section */}
          <Projects
            projects={controller.projects}
            categories={controller.categories}
            selectedCategory={controller.selectedCategory}
            setSelectedCategory={controller.setSelectedCategory}
            selectedProject={controller.selectedProject}
            setSelectedProject={controller.setSelectedProject}
          />

          {/* Education & Certifications Section */}
          <EducationAndCerts
            educationData={controller.educationData}
            certifications={controller.certifications}
            codingProfiles={controller.codingProfiles}
          />

          {/* Contact Section */}
          <Contact
            personalInfo={controller.personalInfo}
            contactForm={controller.contactForm}
            formStatus={controller.formStatus}
            handleInputChange={controller.handleInputChange}
            handleContactSubmit={controller.handleContactSubmit}
          />
        </main>

        {/* Footer */}
        <Footer
          personalInfo={controller.personalInfo}
          scrollTo={controller.scrollTo}
        />
      </div>

    </div>
  );
}

export default App;
