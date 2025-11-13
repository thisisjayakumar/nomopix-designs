import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';

const projects = [
  {
    title: 'Appulights',
    category: 'Corporate Website',
    description: 'Modern corporate website with advanced features and stunning animations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    color: '#6366f1',
  },
  {
    title: 'Ozaann Healthcare',
    category: 'Healthcare Platform',
    description: 'Comprehensive healthcare management system with patient portal',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    color: '#10b981',
  },
  {
    title: 'A & G Products',
    category: 'E-commerce Store',
    description: 'Full-featured e-commerce platform with payment integration',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    color: '#f59e0b',
  },
  {
    title: 'Microsprings',
    category: 'Manufacturing Website',
    description: 'Industrial website showcasing products and services',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    color: '#8b5cf6',
  },
  {
    title: 'Restaurant Deluxe',
    category: 'Restaurant Website',
    description: 'Beautiful restaurant website with online ordering system',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    color: '#ec4899',
  },
  {
    title: 'Tech Startup',
    category: 'SaaS Platform',
    description: 'Modern SaaS landing page with subscription management',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    color: '#3b82f6',
  },
];

export default function Portfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef(null);

  return (
    <section className="portfolio-section" id="work">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="portfolio-header"
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Work Samples</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects that showcase our expertise
          </p>
        </motion.div>

        <div className="portfolio-scroll" ref={scrollRef}>
          <div className="portfolio-track">
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                className="portfolio-card"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay" style={{ background: `linear-gradient(135deg, ${project.color}dd, ${project.color}99)` }}>
                    <button className="view-project-btn">
                      <FaExternalLinkAlt /> View Project
                    </button>
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-category" style={{ color: project.color }}>
                    {project.category}
                  </div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="portfolio-cta"
        >
          <p className="portfolio-cta-text">
            <strong>Want to be our next success story?</strong> Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

