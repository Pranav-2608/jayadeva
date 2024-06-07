import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Doctor from './components/Doctor';
import Consultations from './components/Consultations';
import { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import Login from './pages/Login';

function App() { 
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user,setUser] = useState();
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/doctor/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setUser(response.data);
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  };
  fetchUser();
}, [isAuthenticated]);

  return (
    <>
  
        <Routes>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/" element={<Login/>} />
          <Route path="/:id" element={<Consultations/>}/>
        </Routes>

    </>
  );
}

export default App;
