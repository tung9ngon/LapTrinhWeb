const FormModel = require('../models/formModel');

exports.submitForm = async (req, res) => {
  const { name, email, question } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!name || !email || !question) {
    return res.status(400).json({ 
      message: 'Vui lòng điền đầy đủ thông tin' 
    });
  }

  try {
    // Lưu form vào database
    const result = await FormModel.submitForm(name, email, question);
    
    res.status(201).json({ 
      message: 'Gửi câu hỏi thành công!', 
      questionId: result.insertId 
    });
  } catch (error) {
    console.error('Lỗi khi lưu form:', error);
    res.status(500).json({ 
      message: 'Có lỗi xảy ra, vui lòng thử lại' 
    });
  }
};