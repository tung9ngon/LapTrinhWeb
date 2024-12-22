import { FaShoppingCart } from "react-icons/fa";
import "../styles/sidebar.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginSignupForm from "./LoginSignupForm"; // Assuming you have this component

interface User {
  firstName: string;
  // Add other fields as necessary, e.g., lastName, email, etc.
}

function TopSect({
  setShow,
  size,
}: {
  setShow: (value: boolean) => void;
  size: number;
}) {
  const [firstName, setFirstName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("login");
  const [user, setUser] = useState<User | null>(null); // Define user type here

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = localStorage.getItem("firstName");

    setFirstName(searchParams.get("firstName") || storedFirstName || "");
  }, [location]);

  const openLoginForm = () => {
    setFormType("login");
    setIsModalOpen(true);
  };

  const openSignupForm = () => {
    setFormType("signup");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    alert("Bạn đã đăng xuất");
  };

  return (
    <>
      <div className="flex justify-between items-center px-8 pt-2 pb-4 text-white sticky w-full top-0 z-50 bg-bgColor shadow-lg border-b-[2px] border-bgColor">
        <div className="flex justify-center items-center relative">
          <p className="font-semibold text-base">
            Hello {firstName} 👋
          </p>
        </div>

        <div className="flex flex-row items-center justify-between text-white w-full">
          {user ? (
            <p
              onClick={handleLogout}
              className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer flex-1 text-center"
            >
              Logout
            </p>
          ) : (
          <div className="flex items-center flex-1 justify-center">
            <p
                onClick={openLoginForm}
                className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer flex-1 text-center"
            >
            Login
            </p>
            <p
                className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer flex-1 text-center"
                onClick={openSignupForm}
            >
            Signup   
            </p>
          </div>
          )}
          <p
            onClick={() => setShow(true)}
            className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer flex-1 text-center"
          >
            Store
          </p>
          <span
            className="text-brandColor text-xl cursor-pointer flex-1 text-center"
            onClick={() => setShow(false)}
          >
            <FaShoppingCart className="text-2xl mt-6" />
          </span>
          <p className="mt-4 ml-1 text-sm">{size}</p>
        </div>
      </div>

      {isModalOpen && (
        <LoginSignupForm
          type={formType}
          closeModal={closeModal}
          setUser={setUser}
        />
      )}
    </>
  );
}

export default TopSect;
