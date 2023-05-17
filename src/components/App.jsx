import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavBar from './NavBar';

export default function App({ animals }) {
  return (
    <div className="container">
      <NavBar/>
      <Routes>
        <Route path="/gallery" element={<MainPage animals={animals}/>} />
        {/* <Route path="/posts" element={<PostsPage />} /> */}
      </Routes>
    </div>
  );
}
