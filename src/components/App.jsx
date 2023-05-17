import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

export default function App({}) {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        {/* <Route path="/posts" element={<PostsPage />} /> */}
      </Routes>
    </div>
  );
}
