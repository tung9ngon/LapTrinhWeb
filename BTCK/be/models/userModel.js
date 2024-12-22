const db = require('../configs/db');

const User = {
  async register(name, email, password) {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      db.query(query, [name, email, password], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  async login(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0] || null);
      });
    });
  },

  async getAll() {
    const query = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  async getById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results[0] || null);
      });
    });
  },

  async update( { id,name, email, password }) {
    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [name, email, password, id], (err, results) => {
        if (err) return reject(err);
        resolve(results.affectedRows > 0 ? results : null);
      });
    });
  },

  async delete(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results.affectedRows > 0);
      });
    });
  },
};

module.exports = User;
