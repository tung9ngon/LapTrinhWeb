import { useEffect, useState } from "react";
import "./App.css";
import Shop from "./Components/Shop";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import ComingSoon from "./Pages/ComingSoon";
import Help from "./Pages/Help";
import Settings from "./Pages/Settings";
import NotFound from "./Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import img from "./img/small-screen.svg";
import About from "./Pages/About";
import LoginSignupForm from '../src/Components/LoginSignupForm';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState('login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const openLoginForm = () => {
    setFormType('login');
    setIsModalOpen(true);
  };

  const openSignupForm = () => {
    setFormType('signup');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    alert("You have logged out");
  };

  return (
    <div className="App">
      {isSmallScreen ? (
        <div className="mx-auto container justify-center flex flex-col mt-8">
          <p className="text-center text-white font-bold text-xl">Not integrated for small screens</p>
          <img src={img} className="mt-8" alt="for large screen size only" />
        </div>
      ) : (
        <>
        <Router>
          <Routes>
            <Route path="/home" element={<Shop />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        </>
      )}
    </div>
  );
};

export default App;