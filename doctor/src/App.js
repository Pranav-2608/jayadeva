import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Doctor from './components/Doctor';
import FinalOp from './components/FinalOp';
import Login from './components/Login';

function App() { 
  return (
    <>
  
        <Routes>
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/" element={<Login/>}/>
          <Route path="/finalop" element={<FinalOp/>} />
        </Routes>

    </>
  );
}

export default App;
