import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import AnimalPage from './pages/AnimalPage';
import AdminPage from './pages/AdminPage';
import AdminAnimalPage from './pages/AdminAnimalPage';

export default function App({ animals, user }) {
  // console.log('==================', animals);
  const [animal, setAnimal] = useState(animals);
  // console.log('-------------------------', animal);
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage animals={animal} setAnimal={setAnimal} />} />
        <Route path="/gallery" element={<AnimalPage animals={animal} setAnimal={setAnimal} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/admin/animals"
          element={<AdminAnimalPage animal={animal} setAnimal={setAnimal} />}
        />
      </Routes>
    </div>
  );
}
