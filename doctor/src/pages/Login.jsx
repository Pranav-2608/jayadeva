// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[confirmPassword,setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/login',
        { email, password, confirmPassword, role:"Doctor" },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(response);
      toast.success(response.data.message);
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('userId', response.data.user._id); 
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/doctor');
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container form-component login-form">
      <ToastContainer />
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <form onSubmit={handleLogin}>
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
        <input
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
