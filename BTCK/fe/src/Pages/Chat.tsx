import React, { useState, useEffect } from 'react';
import "../styles/chat.css";
import img from "../img/chat.png";
import rep from "../img/sales-rep.png";
import { FaTimes } from "react-icons/fa";
import SideBar from "../Components/SideBar";

import { useLocation } from 'react-router-dom';

const Chat = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    const [firstName, setFirstName] = useState('');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const storedFirstName = localStorage.getItem('firstName');

        setFirstName(searchParams.get('firstName') || storedFirstName || '');
    }, [location]);

    return (
        <>
            <SideBar />
            {modal && (
                <section className="modal animate">
                <div onClick={toggleModal} className="overlay"></div>
                <article className="modal-content">
                  <div className="rep-cont">
                    <img src={rep} className="rep-img" alt="sales rep" />
                    <h3>Chat With Tung</h3>
                  </div>  
                  <div className="chat-box">
                    <p>Xin chào {firstName}. Tôi có thể giúp gì cho bạn?</p>
                  </div>
                  <input type="text" placeholder="Nhập tin nhắn ở đây" className="message-box" />
                  <button className="close-modal" onClick={toggleModal}>
                    <FaTimes />
                  </button>
                </article>
              </section>
            )}
      
            <section className="chat-container">
              <img src={img} className="chat-img" alt="user" />
              <h2 className="chat-name">Trò chuyện với nhân viên hỗ trợ của chúng tôi</h2>
              <p className="chat-locs">Bạn vẫn chưa bắt đầu cuộc trò chuyện</p>
              <button className="animated-btn" onClick={toggleModal}>
                Bắt đầu trò chuyện ngay bây giờ
              </button>
            </section>

           
        </>
    )
}

export default Chat