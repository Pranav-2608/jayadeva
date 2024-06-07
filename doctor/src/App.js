import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctor from './components/Doctor';
import FinalOp from './components/FinalOp';

function App() { 
  return (
    <>
  
        <Routes>
          <Route path="/" element={<Doctor/>} />
          <Route path="/finalop" element={<FinalOp/>} />
        </Routes>

    </>
  );
}

export default App;
