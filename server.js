// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const path = require('path');

const app = express();
const server = http.createServer(app);

const io = socketIo(server);

// Serve the React client
app.use(express.static(path.join(__dirname, 'client/public')));

// Root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

// POST endpoint
app.post('/submit', (req, res) => {
  res.send('Data submitted successfully!');
});

// PUT endpoint
app.put('/update', (req, res) => {
  res.send('Data updated successfully!');
});

// DELETE endpoint
app.delete('/delete', (req, res) => {
  res.send('Data deleted successfully!');
});

// Dynamic route
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User profile for user with ID ${userId}`);
});

// Wildcard route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('deviceUpdate', (data) => {
    // Handle device update
    io.emit('deviceUpdate', data); // Broadcast to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3001; // Specify the port number

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
