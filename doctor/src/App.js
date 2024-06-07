// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Doctor from './pages/Doctor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/doctor"
          element={
            
              <Doctor />
            
          }
        />
        {/* Add other protected routes similarly */}
      </Routes>
    </Router>
  );
};

export default App;
