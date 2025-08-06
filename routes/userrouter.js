const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register User
router.post('/form', async (req, res) => {
    try {
        const { name, email, phoneNo, availability } = req.body;
        const user = new User({ name, email, phoneNo, availability });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// View all users (Admin)
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;