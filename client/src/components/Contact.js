import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const whatsappNumber = '917010066299';
  const email = 'nomopix.designs@gmail.com';
  const phone = '+91 70100 66299';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/messages/contact', formData);
      toast.success('Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in your services.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact us" itemScope itemType="https://schema.org/ContactPage">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your digital presence? Contact us today!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info"
          >
            <h3 className="contact-info-title">Let's Talk</h3>
            <p className="contact-info-text">
              Have a project in mind? We'd love to hear from you. Send us a message and 
              we'll respond as soon as possible.
            </p>

            <div className="contact-methods">
              <button onClick={handleWhatsApp} className="contact-method whatsapp">
                <div className="method-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-info">
                  <h4>WhatsApp</h4>
                  <p>{phone}</p>
                </div>
              </button>

              <button onClick={handleEmailClick} className="contact-method email">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>{email}</p>
                </div>
              </button>

              <div className="contact-method phone">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>{phone}</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4 className="social-title">Why Choose NOMOPIX?</h4>
              <ul className="benefits-list">
                <li>✓ Affordable prices starting at just ₹999</li>
                <li>✓ Quick turnaround time (3-5 days)</li>
                <li>✓ 24/7 customer support</li>
                <li>✓ 100% satisfaction guarantee</li>
                <li>✓ Free consultation and quote</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  aria-required="true"
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="6"
                  required
                  aria-required="true"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={loading}
                aria-label={loading ? "Sending message..." : "Send message"}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

