const express = require('express');
const app = express();
const PORT = 3000;
const listings = require('./data/listings.json');

app.use(express.static('../client'));

app.get('/api/listings', (req, res) => {
  res.json(listings);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
