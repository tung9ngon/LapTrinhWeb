import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Question } from './Question';
import "../styles/help.css";
import { Link } from 'react-router-dom';
import SideBar from "../Components/SideBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "../Components/Form";

const Help = () => {
  const [clicked, setClicked] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggle = (index: number) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <SideBar />
      <div className="accordion-style">
        <h2 className="accordion-heading">Những câu hỏi thường gặp của khách hàng</h2>
        <div className="accordion-container">
          {Question.map((item, index) => (
            <React.Fragment key={index}>
              <div className="accordion-item" onClick={() => toggle(index)}>
                <h1 className="accordion-question">{item.question}</h1>
                <span className="accordion-icon">
                  {clicked === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              {clicked === index && (
                <div className="accordion-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <section className="accordion-extra">
          <h3>Bạn có câu hỏi khác?</h3>
          <p>
            Bạn không thể tìm thấy câu trả lời cho mình. Vui lòng điền vào{" "}
            <span onClick={handleFormToggle} style={{ cursor: "pointer", color: "blue" }}>
              biểu mẫu
            </span>.
          </p>
          <p>
            Bạn có phàn nàn gì về nhà hàng của chúng tôi? Có sự cố gì đang xảy ra? Truy cập vào
            trang <Link to="/settings"><span>settings</span></Link> để cập nhật
          </p>
        </section>
        {showForm && <Form />}
      </div>
      <ToastContainer />
    </>
  );
};

export default Help;
