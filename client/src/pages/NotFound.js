import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import SEO from '../components/SEO';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Track 404 errors for analytics
    console.log('404 Page Not Found:', window.location.pathname);
  }, []);

  return (
    <>
      <SEO 
        title="404 - Page Not Found | NOMOPIX Designs"
        description="The page you're looking for doesn't exist. Return to NOMOPIX homepage for professional websites starting at ₹999."
        noindex={true}
      />
      <div className="notfound-page">
        <div className="notfound-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="notfound-icon"
          >
            <FaExclamationTriangle />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="notfound-title"
          >
            404 - Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="notfound-message"
          >
            Oops! The page you're looking for doesn't exist or has been moved.
            <br />
            Don't worry, we can help you get back on track!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="notfound-actions"
          >
            <button 
              onClick={() => navigate(-1)} 
              className="notfound-btn secondary"
              aria-label="Go back to previous page"
            >
              <FaArrowLeft aria-hidden="true" /> Go Back
            </button>
            
            <Link 
              to="/" 
              className="notfound-btn primary"
              aria-label="Return to NOMOPIX homepage"
            >
              <FaHome aria-hidden="true" /> Go to Homepage
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="notfound-info"
          >
            <h2>Looking for our services?</h2>
            <p>Get stunning websites starting at just ₹999!</p>
            <div className="quick-links">
              <Link to="/#services">View Services</Link>
              <Link to="/#contact">Contact Us</Link>
              <Link to="/#about">About Us</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="notfound-help"
          >
            <p>Need immediate assistance?</p>
            <a 
              href="https://wa.me/917010066299?text=Hi!%20I%20need%20help" 
              className="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="notfound-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </div>
    </>
  );
}

