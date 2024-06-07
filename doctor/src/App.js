import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Doctor from './components/Doctor';

function App() { 
  return (
    <>
  
        <Routes>
          <Route path="/" element={<Doctor/>} />
        </Routes>

    </>
  );
}

export default App;
