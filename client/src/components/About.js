import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about-section" id="about" aria-label="About NOMOPIX Digital Studio">
      <div className="container" itemScope itemType="https://schema.org/AboutPage">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h2 className="section-title">
            About <span className="gradient-text">NOMOPIX</span>
          </h2>
          <p className="section-subtitle">
            Where Innovation Meets Excellence
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-story"
          >
            <h3 className="about-title">Our Journey</h3>
            <p className="about-text">
              <strong>NOMOPIX Digital Studio</strong> emerged as a collaborative venture driven by the 
              innovative vision of two dedicated pioneers, <strong>Jay</strong> and <strong>Khalid</strong>. 
              We don't just build websites; we craft digital experiences that transform businesses.
            </p>
            <p className="about-text">
              Our diverse portfolio of services caters to the evolving needs of businesses and individuals 
              seeking success in the ever-shifting digital domain. From startups to established enterprises, 
              we've helped countless clients elevate their digital presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-team"
          >
            <h3 className="about-title">Our Dream Team</h3>
            <p className="about-text">
              At NOMOPIX, we pride ourselves on having an exceptional team of professionals with 
              diverse skills and expertise:
            </p>
            <div className="team-skills">
              <div className="skill-tag">Full Stack Developers</div>
              <div className="skill-tag">WordPress Experts</div>
              <div className="skill-tag">Data Engineers</div>
              <div className="skill-tag">MERN Specialists</div>
              <div className="skill-tag">SEO Gurus</div>
              <div className="skill-tag">Digital Marketing Pros</div>
            </div>
            <p className="about-text highlight">
              Together, we have successfully completed numerous projects, each demonstrating our 
              commitment to excellence and a deep understanding of the digital realm.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="about-stats"
        >
          <div className="stat-card">
            <div className="stat-number gradient-text">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number gradient-text">100+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number gradient-text">99%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number gradient-text">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

