// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.model');

router.post('/register', (req, res) => {
  // Handle user registration
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  // Handle successful login
});

router.get('/logout', (req, res) => {
  req.logout();
  // Handle logout
});

module.exports = router;
