import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/login',
        { email, password, confirmPassword, role: "Doctor" },
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8', backgroundImage: 'linear-gradient(to bottom right, #4e89ae, #43658b)' }}>
      <ToastContainer />
      <FontAwesomeIcon icon={faUserMd} style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }} />
      <h2 style={{ color: '#ffffff' }}>Sign In</h2>
      <p style={{ color: '#ffffff' }}>Please Login To Continue</p>
      <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', transition: 'border-color 0.3s' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <button type="submit" style={{ backgroundColor: '#1d4ed8', color: '#ffffff', padding: '0.75rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer', transition: 'background-color 0.3s', width: '100%' }}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
