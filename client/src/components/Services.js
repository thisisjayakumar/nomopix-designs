import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaServer, FaSearch, FaBullhorn, FaCode, FaClock } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Website Creation',
    description: 'Our skilled developers work diligently to design and build websites that are not only visually appealing but also highly functional. We tailor our websites to meet your specific requirements, ensuring a seamless user experience.',
    color: '#6366f1',
  },
  {
    icon: <FaServer />,
    title: 'Hosting Services',
    description: 'NOMOPIX offers reliable hosting solutions to ensure that your website is always up and running. We understand the importance of a strong online presence and strive to provide a secure and responsive hosting environment.',
    color: '#8b5cf6',
  },
  {
    icon: <FaSearch />,
    title: 'Search Engine Optimization',
    description: 'To enhance your online visibility and reach a broader audience, our SEO specialists use proven strategies to improve your website\'s search engine ranking. We focus on optimizing your content and enhancing your website\'s structure.',
    color: '#ec4899',
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    description: 'With our digital marketing expertise, we help businesses reach their target audience effectively. Whether it\'s through social media marketing, email campaigns, or pay-per-click advertising, we create customized strategies.',
    color: '#10b981',
  },
  {
    icon: <FaCode />,
    title: 'Organised Code',
    description: 'Clean, maintainable, and scalable code is our priority. We follow industry best practices and coding standards to ensure your website performs optimally and is easy to maintain and update.',
    color: '#f59e0b',
  },
  {
    icon: <FaClock />,
    title: '100% Response Time',
    description: 'We guarantee prompt responses to all your queries and concerns. Our dedicated support team is available 24/7 to assist you with any technical issues or questions you may have about your project.',
    color: '#3b82f6',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="services-section" id="services">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="section-title">
            What We <span className="gradient-text">Provide</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
              whileHover={{ y: -10 }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-glow" style={{ background: `radial-gradient(circle, ${service.color}20, transparent)` }}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="services-cta"
        >
          <h3 className="cta-title">Ready to Start Your Project?</h3>
          <p className="cta-text">
            Let's transform your vision into reality. Get a stunning website at an unbeatable price!
          </p>
          <a href="#contact" className="cta-button">
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

