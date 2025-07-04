import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/Home';
import Login from './app/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onNavigateToLogin={() => {}} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
