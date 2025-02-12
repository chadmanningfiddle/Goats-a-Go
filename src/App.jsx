import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivateLessons from './pages/PrivateLessons';
import AdminDashboard from './pages/AdminDashboard';
import FiddlersLog from './pages/FiddlersLog';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private-lessons" element={<PrivateLessons />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/fiddlers-log" element={<FiddlersLog />} />
      </Routes>
    </Router>
  );
}