const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routes/todoroutes');
const cors = require('cors');

const app = express();
const port = 3000;

// Cấu hình CORS cho phép từ frontend (http://localhost:3001)
app.use(cors({ origin: 'http://localhost:3001' }));

// Sử dụng body-parser để xử lý JSON
app.use(bodyParser.json());

// Route xử lý API
app.use('/api', todoRoutes);
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  next();
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
