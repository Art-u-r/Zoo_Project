import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import AnimalPage from './pages/AnimalPage';
import ModalPage from './pages/ModalPage';
import AdminPage from './pages/AdminPage';
import AdminAnimalPage from './pages/AdminAnimalPage';

export default function App({ animals, user, animalAndGallery }) {
  const [animal, setAnimal] = useState(animals);
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage animals={animal} setAnimal={setAnimal} />} />
        <Route path="/gallery" element={<AnimalPage animals={animal} setAnimal={setAnimal} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path={`/gallery/${animalAndGallery?.id}`} element={<ModalPage photos={animalAndGallery?.Galleries} animals={animalAndGallery}/>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/admin/animals"
          element={<AdminAnimalPage animal={animal} setAnimal={setAnimal} />}
        />
      </Routes>
    </div>
  );
}
