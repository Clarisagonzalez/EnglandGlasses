const express = require('express');
const cors = require('cors');
const path = require('path'); // Required for resolving paths

const app = express();

// Use CORS middleware
app.use(cors());

// Serve static assets directly from the root directory
app.use(express.static(__dirname)); // __dirname points to the current directory

// Example endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
