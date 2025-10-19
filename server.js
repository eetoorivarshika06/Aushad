const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
const staticDir = path.join(__dirname);
app.use(express.static(staticDir));

// Redirect root to login page
app.get('/', (req, res) => {
  res.sendFile(path.join(staticDir, 'login.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Aushad static server running on http://localhost:${PORT}`);
});
