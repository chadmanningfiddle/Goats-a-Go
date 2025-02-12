import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Fiddle Shack</h1>
      <div className="home-buttons">
        <Link to="/private-lessons" className="home-button">Private Lessons</Link>
        <Link to="/admin" className="home-button">Admin Dashboard</Link>
        <Link to="/fiddlers-log" className="home-button">Fiddler's Log</Link>
      </div>
    </div>
  );
}