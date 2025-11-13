import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBuilding, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    company: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/auth/register', formData);
      login(response.data.user, response.data.token);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-shape shape-1"></div>
        <div className="auth-shape shape-2"></div>
        <div className="auth-shape shape-3"></div>
      </div>

      <Link to="/" className="back-home-btn">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="auth-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="auth-info"
        >
          <h2 className="info-title">Start Your Digital Transformation</h2>
          <p className="info-text">
            Join NOMOPIX today and get access to premium website development services at 
            unbeatable prices. Create your account in seconds!
          </p>
          <div className="info-features">
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>Websites from just ₹999</span>
            </div>
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>Quick turnaround time</span>
            </div>
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>24/7 support access</span>
            </div>
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="auth-card"
        >
          <div className="auth-header">
            <h1 className="auth-title">
              Create <span className="gradient-text">Account</span>
            </h1>
            <p className="auth-subtitle">Get started with your free account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="label-icon" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="label-icon" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="label-icon" />
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password (min. 6 characters)"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone className="label-icon" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your contact number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">
                <FaBuilding className="label-icon" />
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company (optional)"
              />
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="auth-link">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

