const db = require('../configs/db');

class FormModel {
  static async submitForm(name, email, question) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO customer_questions (name, email, question, created_at) VALUES (?, ?, ?, NOW())';
      db.query(query, [name, email, question], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = FormModel;