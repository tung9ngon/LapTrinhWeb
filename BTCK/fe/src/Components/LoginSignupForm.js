import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignupForm.css';

const LoginSignupForm = ({ type, closeModal, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    if (type === 'login') {
      console.log('Logging in with:', email, password);

      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Logged in:', data);
          localStorage.setItem('authToken', data.token);  // Save token to localStorage
          localStorage.setItem('user', JSON.stringify({ name: data.name, avatar: data.avatar })); // Save user info to localStorage
          setUser({ name: data.name, avatar: data.avatar }); // Update user state
          alert('You have successfully logged in');
          closeModal();
          navigate('/home', { replace: true }); // Redirect to home page
        } else {
          alert(data.message || 'Login information is incorrect');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred, please try again');
      }
    } else {
      console.log('Signing up with:', name, email, password);

      try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Signup successful:', data);
          alert('Registration successful, please log in');
          closeModal();
          navigate('/');
        } else {
          alert(data.message || 'Registration failed');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('Registration failed, please try again');
      }
    }
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{type === 'login' ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit}>
          {type === 'signup' && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {type === 'login' ? 'Login' : 'Signup'}
          </button>
        </form>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default LoginSignupForm;