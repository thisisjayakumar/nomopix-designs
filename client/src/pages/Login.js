import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/auth/login', formData);
      login(response.data.user, response.data.token);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="auth-card"
        >
          <div className="auth-header">
            <h1 className="auth-title">
              Welcome <span className="gradient-text">Back</span>
            </h1>
            <p className="auth-subtitle">Login to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="label-icon" />
                Email Address
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
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="auth-link">
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="auth-info"
        >
          <h2 className="info-title">Your Digital Journey Awaits</h2>
          <p className="info-text">
            Access your personalized dashboard to track your projects, communicate with our team, 
            and manage your website development journey.
          </p>
          <div className="info-features">
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>Track project progress</span>
            </div>
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>Direct communication</span>
            </div>
            <div className="info-feature">
              <div className="feature-icon">✓</div>
              <span>View order history</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

