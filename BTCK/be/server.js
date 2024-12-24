const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(express.json()); // Express JSON parser (không gây xung đột với bodyParser)

// Routes
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes'); // Route xử lý form
const userRoutes = require('./routes/userRoutes'); // Route cho CRUD người dùng
const ratingRoutes = require('./routes/ratingRoutes');
app.use('/api/auth', authRoutes); // Route cho auth (login/signup)
app.use('/api/form', formRoutes); // Route xử lý form
app.use('/api/users', userRoutes); // Route cho CRUD người dùng
app.use('/api/ratings', ratingRoutes);
// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
