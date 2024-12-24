const db = require('../configs/db');

// Lấy tất cả đánh giá
const getRatings = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM ratings', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Lưu một đánh giá mới
const addRating = (rating) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO ratings (rating) VALUES (?)', [rating], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { getRatings, addRating };
