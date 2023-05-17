import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export default function App({ user }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
