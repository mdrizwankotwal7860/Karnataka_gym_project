const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Setup
const dbPath = path.resolve(__dirname, 'gym.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create Enquiries Table
    db.run(`CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      goal TEXT,
      message TEXT,
      status TEXT DEFAULT 'Pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// API Routes
app.post('/api/enquiries', (req, res) => {
  const { name, phone, goal, message } = req.body;
  
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  const query = `INSERT INTO enquiries (name, phone, goal, message) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, phone, goal, message], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to submit enquiry.' });
    }
    res.status(201).json({ id: this.lastID, message: 'Enquiry submitted successfully.' });
  });
});

app.get('/api/enquiries', (req, res) => {
  // Simple admin endpoint - should be protected in production
  db.all(`SELECT * FROM enquiries ORDER BY created_at DESC`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve enquiries.' });
    }
    res.json(rows);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
