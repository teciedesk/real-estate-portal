const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const listings = require('./data/listings.json');

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, 'client')));

// API route
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

// Fallback to index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
