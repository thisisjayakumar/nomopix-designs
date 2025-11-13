import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTasks, FaBolt, FaSearch, FaClock, FaHeadset } from 'react-icons/fa';
import './CoreAttributes.css';

const attributes = [
  {
    icon: <FaCode />,
    title: 'Organised Code',
    description: 'Clean, maintainable code following industry best practices for optimal performance.',
    stat: '100%',
    label: 'Code Quality',
  },
  {
    icon: <FaTasks />,
    title: 'Maintaining Milestones',
    description: 'We track every project milestone to ensure timely delivery and quality standards.',
    stat: '99%',
    label: 'On-Time Delivery',
  },
  {
    icon: <FaBolt />,
    title: 'Super Performance',
    description: 'Lightning-fast websites optimized for speed and user experience across all devices.',
    stat: '<1s',
    label: 'Load Time',
  },
  {
    icon: <FaSearch />,
    title: 'Search Optimization',
    description: 'SEO-friendly websites designed to rank higher and attract more organic traffic.',
    stat: '4.5/5',
    label: 'SEO Score',
  },
  {
    icon: <FaClock />,
    title: '100% Response Time',
    description: 'Always available to answer your questions and provide support when you need it.',
    stat: '24/7',
    label: 'Availability',
  },
  {
    icon: <FaHeadset />,
    title: 'Customer Support',
    description: 'Dedicated support team committed to your success every step of the way.',
    stat: '99%',
    label: 'Satisfaction',
  },
];

export default function CoreAttributes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="attributes-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="attributes-header"
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Core Attributes</span>
          </h2>
          <p className="section-subtitle">
            At Nomopix, our unwavering commitment to client satisfaction fuels our dedication 
            to delivering exceptional results, tailored to meet unique needs. Transparency and 
            open communication are at the heart of our approach, ensuring our clients are informed 
            and involved every step of the way.
          </p>
        </motion.div>

        <div className="attributes-grid">
          {attributes.map((attr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="attribute-card"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="attribute-icon-wrapper">
                <div className="attribute-icon">{attr.icon}</div>
                <div className="attribute-stat">
                  <span className="stat-value">{attr.stat}</span>
                  <span className="stat-label">{attr.label}</span>
                </div>
              </div>
              <h3 className="attribute-title">{attr.title}</h3>
              <p className="attribute-description">{attr.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="attributes-stats"
        >
          <div className="stat-box">
            <div className="stat-number gradient-text">99%</div>
            <div className="stat-title">Satisfaction Guarantee</div>
          </div>
          <div className="stat-box">
            <div className="stat-number gradient-text">4.5/5</div>
            <div className="stat-title">Clients Rating</div>
          </div>
          <div className="stat-box">
            <div className="stat-number gradient-text">₹20K+</div>
            <div className="stat-title">Money Saved</div>
          </div>
          <div className="stat-box">
            <div className="stat-number gradient-text">50+</div>
            <div className="stat-title">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

