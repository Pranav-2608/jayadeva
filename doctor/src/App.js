import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Doctor from './components/Doctor.jsx';
import FinalOp from './components/FinalOp.jsx';
import Login from './components/Login.jsx';
import VoiceToText from './components/VoiceToText.jsx';

function App() { 
  return (
    <>
  
        <Routes>
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/" element={<Login/>}/>
          <Route path="/finalop" element={<FinalOp/>} />
          <Route path="/voice" element={<VoiceToText/>}/>
        </Routes>

    </>
  );
}

export default App;
