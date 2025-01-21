import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profiles from './Profiles';
import ProfileDetail from './ProfileDetail'; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/profile/:name" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
