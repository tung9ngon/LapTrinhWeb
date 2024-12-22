import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Đảm bảo CSS được import
import './Form.css';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/form/submit-question', formData);

      // Hiển thị thông báo thành công
      toast.success(response.data.message);

      // Reset form
      setFormData({ name: '', email: '', question: '' });
    } catch (error: any) {
      // Hiển thị thông báo lỗi
      toast.error(error.response?.data?.message || 'Có lỗi xảy ra');
    }
  };

  return (
    <div className="form-container">
      <h3>Biểu mẫu liên hệ</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên của bạn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Câu hỏi của bạn:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Gửi</button>
      </form>
    </div>
  );
};

export default Form;
