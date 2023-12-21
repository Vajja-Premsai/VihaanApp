// devices/temperature-device/device.js
const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:3001');

// Simulate sending temperature data
setInterval(() => {
  const temperatureData = {
    temperature: Math.random() * 100, // Replace with actual temperature reading
    timestamp: Date.now(),
  };

  socket.send(JSON.stringify(temperatureData));
}, 5000); // Send data every 5 seconds (adjust as needed)
