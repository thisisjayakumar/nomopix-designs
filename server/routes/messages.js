const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/auth');

// Send message from dashboard (authenticated users)
router.post('/send', authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.userId;

    if (!message) {
      return res.status(400).json({ message: 'Message content is required' });
    }

    // Get user details
    const [users] = await db.query('SELECT name, email FROM users WHERE id = ?', [userId]);
    
    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = users[0];

    // Insert message
    const [result] = await db.query(
      'INSERT INTO messages (user_id, name, email, message) VALUES (?, ?, ?, ?)',
      [userId, user.name, user.email, message]
    );

    res.status(201).json({
      message: 'Message sent successfully',
      messageId: result.insertId
    });
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Server error while sending message' });
  }
});

// Get user's messages
router.get('/my-messages', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const [messages] = await db.query(
      'SELECT id, message, status, created_at FROM messages WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    res.json({ messages });
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ message: 'Server error while fetching messages' });
  }
});

// Contact form submission (for non-authenticated users)
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    await db.query(
      'INSERT INTO contact_inquiries (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.status(201).json({ message: 'Message sent successfully! We will contact you soon.' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error while sending message' });
  }
});

module.exports = router;

