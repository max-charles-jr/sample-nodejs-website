const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve the static files from the public folder
app.use(express.static(path.json(__dirname, 'public')));

// Route for index.html
app.get('/', (req, res) => {
  res.sendFile(path.json(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}')
});