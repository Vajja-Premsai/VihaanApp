// routes/deviceRoutes.js
const express = require('express');
const router = express.Router();
const Device = require('../models/device.model');

router.post('/add', (req, res) => {
  // Handle adding a new device
});

router.delete('/remove/:deviceId', (req, res) => {
  // Handle removing a device
});

router.get('/list', (req, res) => {
  // Retrieve list of devices
});

module.exports = router;
