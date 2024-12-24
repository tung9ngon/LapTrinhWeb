const express = require('express');
const ratingController = require('../controllers/ratingController');

const router = express.Router();

// Lấy tất cả đánh giá
router.get('/', ratingController.getAllRatings);

// Gửi đánh giá mới
router.post('/', ratingController.createRating);

module.exports = router;
