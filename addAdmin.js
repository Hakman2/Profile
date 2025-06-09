const bcrypt = require('bcryptjs');
const db = require('./db');

const username = 'admin';
const password = 'yourStrongPassword';
const role = 'admin';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  db.run(
    'INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)',
    [username, hash, role],
    function (err) {
      if (err) {
        console.error('Error:', err.message);
      } else {
        console.log('Admin user created!');
      }
      db.close();
    }
  );
});