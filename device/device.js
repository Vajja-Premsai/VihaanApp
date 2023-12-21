// device.js
const io = require('socket.io-client');
const socket = io('http://localhost:3001'); // Replace with your server URL


// Emit device data to the server
socket.emit('deviceUpdate', { deviceId: 'device123', data: 'someData' });



