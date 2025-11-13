import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaSignOutAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaCheckCircle,
  FaClock,
  FaHome,
} from 'react-icons/fa';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingMessages, setFetchingMessages] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages/my-messages');
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setFetchingMessages(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/messages/send', { message });
      toast.success('Message sent to admin successfully!');
      setMessage('');
      fetchMessages();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleWhatsApp = () => {
    const whatsappNumber = '917010066299';
    const whatsappMessage = encodeURIComponent(`Hi! I'm ${user?.name}. I need help with my project.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const handleEmailAdmin = () => {
    window.location.href = `mailto:nomopix.designs@gmail.com?subject=Inquiry from ${user?.name}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'read':
        return '#3b82f6';
      case 'replied':
        return '#10b981';
      default:
        return '#f59e0b';
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={() => navigate('/')} className="home-btn">
              <FaHome /> Home
            </button>
            <h1 className="dashboard-title">
              Welcome, <span className="gradient-text">{user?.name}</span>!
            </h1>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-grid">
          {/* User Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="dashboard-card profile-card"
          >
            <div className="card-header">
              <h2>Your Profile</h2>
            </div>
            <div className="profile-info">
              <div className="profile-avatar">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="profile-details">
                <div className="profile-item">
                  <FaUser className="profile-icon" />
                  <div>
                    <span className="profile-label">Name</span>
                    <span className="profile-value">{user?.name}</span>
                  </div>
                </div>
                <div className="profile-item">
                  <FaEnvelope className="profile-icon" />
                  <div>
                    <span className="profile-label">Email</span>
                    <span className="profile-value">{user?.email}</span>
                  </div>
                </div>
                {user?.phone && (
                  <div className="profile-item">
                    <FaPhone className="profile-icon" />
                    <div>
                      <span className="profile-label">Phone</span>
                      <span className="profile-value">{user?.phone}</span>
                    </div>
                  </div>
                )}
                {user?.company && (
                  <div className="profile-item">
                    <FaBuilding className="profile-icon" />
                    <div>
                      <span className="profile-label">Company</span>
                      <span className="profile-value">{user?.company}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="dashboard-card quick-actions-card"
          >
            <div className="card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <button onClick={handleWhatsApp} className="action-btn whatsapp-btn">
                <FaWhatsapp className="action-icon" />
                <div>
                  <h3>WhatsApp Us</h3>
                  <p>Get instant support</p>
                </div>
              </button>
              <button onClick={handleEmailAdmin} className="action-btn email-btn">
                <FaEnvelope className="action-icon" />
                <div>
                  <h3>Email Admin</h3>
                  <p>Send us an email</p>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Send Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="dashboard-card send-message-card"
          >
            <div className="card-header">
              <h2>Send Message to Admin</h2>
            </div>
            <form onSubmit={handleSendMessage} className="message-form">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here... Let us know how we can help you!"
                rows="6"
                className="message-textarea"
              />
              <button type="submit" className="send-message-btn" disabled={loading}>
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

          {/* Message History Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="dashboard-card message-history-card"
          >
            <div className="card-header">
              <h2>Your Messages</h2>
              <span className="message-count">{messages.length} messages</span>
            </div>
            <div className="message-history">
              {fetchingMessages ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p>Loading messages...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="empty-state">
                  <p>No messages yet. Send your first message above!</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="message-item">
                    <div className="message-header">
                      <span
                        className="message-status"
                        style={{ color: getStatusColor(msg.status) }}
                      >
                        {msg.status === 'unread' && <FaClock />}
                        {msg.status === 'read' && <FaCheckCircle />}
                        {msg.status === 'replied' && <FaCheckCircle />}
                        {msg.status.charAt(0).toUpperCase() + msg.status.slice(1)}
                      </span>
                      <span className="message-date">
                        {new Date(msg.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p className="message-text">{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="special-offer-banner"
        >
          <div className="offer-content">
            <h3>🎉 Special Offer Just For You!</h3>
            <p>
              As a valued customer, get <strong>20% OFF</strong> on your next project.
              Contact us now to claim this exclusive offer!
            </p>
            <button onClick={handleWhatsApp} className="offer-btn">
              <FaWhatsapp /> Claim Offer Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

