// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Doctor from './pages/Doctor.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Doctor />
            </ProtectedRoute>
          }
        />
        {/* Add other protected routes similarly */}
      </Routes>
    </Router>
  );
};

export default App;
