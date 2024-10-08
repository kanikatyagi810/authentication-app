import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = localStorage.getItem('isLoggedIn');

  return (
    <Router>
      <Routes>
        <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> :<Login />} />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;
