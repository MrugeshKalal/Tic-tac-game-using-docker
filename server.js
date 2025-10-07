const express = require('express');
const path = require('path');
const { register, gameCounter, winCounter, drawCounter } = require('./metrics');

const app = express();
const PORT = process.env.PORT || 4000; // Changed port to 4000

// Middleware to parse JSON
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to update metrics when a game ends
app.post('/game-over', (req, res) => {
  const { winner } = req.body; // expect { "winner": "X"|"O"|"draw" }

  gameCounter.inc(); // increment total games played

  if (winner === 'X' || winner === 'O') {
    winCounter.inc();
  } else if (winner === 'draw') {
    drawCounter.inc();
  }

  res.sendStatus(200);
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎮 Server running on port ${PORT}`);
  console.log(`📊 Metrics available at http://localhost:${PORT}/metrics`);
});
