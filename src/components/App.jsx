import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import AnimalPage from './pages/AnimalPage';

export default function App({ animals, user }) {
  const [animal, setAnimal] = useState(animals);
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/gallery" element={<AnimalPage animals={animal} setAnimal={setAnimal}/>} />
        <Route path="/" element={<MainPage animals={animal} setAnimal={setAnimal}/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Route path="/posts" element={<PostsPage />} /> */}
    </div>
  );
}
