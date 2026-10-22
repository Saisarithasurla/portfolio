// Controller: Business logic & state management for portfolio views
import { useState, useMemo } from 'react';
import {
  personalInfo,
  skillsData,
  experiences,
  projects,
  educationData,
  certifications,
  codingProfiles
} from '../models/portfolioModel';

export function usePortfolioController() {
  // Navigation active section state
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Projects filtering state
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Interactive Project Modal state
  const [selectedProject, setSelectedProject] = useState(null);

  // Contact form submission state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  // Categories list derived from model
  const categories = useMemo(() => {
    const list = ['All', ...new Set(projects.map(p => p.category))];
    return list;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Handle contact form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle contact form submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Sending message...' });

    // Mock API call / Email submission
    setTimeout(() => {
      setFormStatus({
        state: 'success',
        message: 'Thank you! Your message has been received. I will get back to you shortly.'
      });
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ state: 'idle', message: '' }), 5000);
    }, 900);
  };

  // Scroll to section helper
  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    // Model Data
    personalInfo,
    skillsData,
    experiences,
    projects: filteredProjects,
    allProjects: projects,
    educationData,
    certifications,
    codingProfiles,
    categories,

    // Controller State & Methods
    activeSection,
    setActiveSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    selectedCategory,
    setSelectedCategory,
    selectedProject,
    setSelectedProject,
    contactForm,
    formStatus,
    handleInputChange,
    handleContactSubmit,
    scrollTo
  };
}
