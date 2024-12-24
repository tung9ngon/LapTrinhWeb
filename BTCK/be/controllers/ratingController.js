const ratingModel = require('../models/ratingModel');

// Lấy tất cả đánh giá
const getAllRatings = async (req, res) => {
  try {
    const ratings = await ratingModel.getRatings();
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách đánh giá', error: err });
  }
};

// Gửi một đánh giá mới
const createRating = async (req, res) => {
  const { rating } = req.body;
  if (rating === undefined || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Đánh giá phải từ 1 đến 5' });
  }

  try {
    await ratingModel.addRating(rating);
    res.status(201).json({ message: 'Đánh giá đã được gửi thành công' });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi gửi đánh giá', error: err });
  }
};

module.exports = { getAllRatings, createRating };
