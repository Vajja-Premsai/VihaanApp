// models/device.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  deviceId: String,
  userId: String, // Reference to user
  // Add more fields as needed
});

module.exports = mongoose.model('Device', deviceSchema);
