// models/user.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  // Add more fields as needed
});
// just for commiting


module.exports = mongoose.model('User', userSchema);
