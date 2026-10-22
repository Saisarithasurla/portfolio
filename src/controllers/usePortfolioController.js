import { useState, useMemo, useEffect } from 'react';
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // account for navbar height and visual offset

      // If at bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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

  // Handle contact form submit via Web3Forms
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setFormStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Sending message...' });

    // Web3Forms API Key (Loaded from .env VITE_WEB3FORMS_ACCESS_KEY or active key)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '740adcc9-d2ed-484b-bcdd-ee369caa84f2';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject || `New Contact Message from ${contactForm.name}`,
          message: contactForm.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message has been received. I will get back to you shortly.'
        });
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus({ state: 'idle', message: '' }), 6000);
      } else {
        setFormStatus({
          state: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setFormStatus({
        state: 'error',
        message: 'Network error. Please check your internet connection or email directly.'
      });
    }
  };

  // Scroll to section helper with accurate navbar offset
  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Immediately reveal all animated children in the target section
      const revealChildren = element.querySelectorAll('.reveal-item, .reveal-fade, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
      revealChildren.forEach(child => child.classList.add('revealed'));

      const navHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
