const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('voting.db');

// Create users table (run once)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password_hash TEXT,
    role TEXT
  )`);
});

module.exports = db;