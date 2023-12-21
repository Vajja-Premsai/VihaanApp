// client/src/components/TemperatureDisplay.js
import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const TemperatureDisplay = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001'); // Replace with your server URL

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error.message);
    });

    socket.on('deviceUpdate', (data) => {
      setTemperature(data.temperature);
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, []);

  return (
    <div>
      <h2>Temperature Display</h2>
      {temperature !== null ? (
        <p>Current Temperature: {temperature} °C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TemperatureDisplay;
