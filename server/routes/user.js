const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/auth');

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const [users] = await db.query(
      'SELECT id, name, email, phone, company, created_at FROM users WHERE id = ?',
      [userId]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user: users[0] });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error while fetching profile' });
  }
});

// Update user profile
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, phone, company } = req.body;

    await db.query(
      'UPDATE users SET name = ?, phone = ?, company = ? WHERE id = ?',
      [name, phone || null, company || null, userId]
    );

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error while updating profile' });
  }
});

module.exports = router;

