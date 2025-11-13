import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';
import './Hero.css';

export default function Hero() {
  const whatsappNumber = '917010066299';
  const whatsappMessage = encodeURIComponent('Hi! I am interested in your Rs.999 website offer!');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="hero-section" id="home">
      <Scene3D />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-badge"
        >
          <span className="badge-dot"></span>
          Limited Time Offer - 90% OFF!
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          <span className="title-line">Stunning Websites</span>
          <span className="title-line gradient-text">Starting at Just</span>
          <span className="title-line price-highlight">
            <span className="old-price">₹9,999</span>
            <span className="new-price">₹999</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle"
        >
          Elevate Your Digital Identity with Exceptional Website Design Creations!
          <br />
          <strong>Evolve your business more BetterBiggerFaster</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-cta"
        >
          <button onClick={handleWhatsAppClick} className="cta-button primary">
            <FaWhatsapp className="btn-icon" />
            Get Started on WhatsApp
          </button>
          
          <Link to="/signup" className="cta-button secondary">
            Create Account <FaArrowRight className="btn-icon" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-features"
        >
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Full Stack Development</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>24/7 Support</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <span>Lightning Fast Delivery</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-trust"
        >
          <p className="trust-text">
            <strong>Why wait?</strong> Join 50+ happy clients who transformed their digital presence with us.
            <br />
            <em>Every second you delay, your competitors get ahead. Act now!</em>
          </p>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

