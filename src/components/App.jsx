import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import AnimalPage from './pages/AnimalPage';
import ModalPage from './pages/ModalPage';

export default function App({ animals, user, animalAndGallery}) {
  const [animal, setAnimal] = useState(animals);
  return (
    <div className="container">
      <NavBar user={user} />
      <Routes>
        <Route path="/gallery" element={<AnimalPage animals={animal} setAnimal={setAnimal}/>} />
        <Route path="/" element={<MainPage animals={animal} setAnimal={setAnimal}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path={`/gallery/${animalAndGallery?.id}`} element={<ModalPage photos={animalAndGallery?.Galleries} animals={animalAndGallery}/>} />
      </Routes>
    </div>
  );
}

// Animal {
//   dataValues: {
//     id: 2,
//     animalname: 'Зебра',
//     description: 'Подрод рода лошади, включающий виды бурчеллова зебра, зебра Греви и горная зебра. Гибридные формы между зебрами и домашними лошадьми называют зеброидами, между зебрами и ослами — зебрулами. Зебры живут маленькими группами, состоящими из самок с детёнышами и одного жеребца.',
//     mainImg: 'https://images.techinsider.ru/upload/img_cache/30a/30aebd45f03f26714ef557a7d54bc65b_ce_1920x1278x0x3_cropped_666x444.jpg',
//     createdAt: 2023-05-18T09:26:44.081Z,
//     updatedAt: 2023-05-18T09:26:44.081Z,
//     Galleries: [ [Gallery], [Gallery], [Gallery] ]
//   },
//   _previousDataValues: {
//     id: 2,
//     animalname: 'Зебра',
//     description: 'Подрод рода лошади, включающий виды бурчеллова зебра, зебра Греви и горная зебра. Гибридные формы между зебрами и домашними лошадьми называют зеброидами, между зебрами и ослами — зебрулами. Зебры живут маленькими группами, состоящими из самок с детёнышами и одного жеребца.',
//     mainImg: 'https://images.techinsider.ru/upload/img_cache/30a/30aebd45f03f26714ef557a7d54bc65b_ce_1920x1278x0x3_cropped_666x444.jpg',
//     createdAt: 2023-05-18T09:26:44.081Z,
//     updatedAt: 2023-05-18T09:26:44.081Z,
//     Galleries: [ [Gallery], [Gallery], [Gallery] ]
//   },
//   uniqno: 1,
//   _changed: Set(0) {},
//   _options: {
//     isNewRecord: false,
//     _schema: null,
//     _schemaDelimiter: '',
//     include: [ [Object] ],
//     includeNames: [ 'Galleries' ],
//     includeMap: { Galleries: [Object] },
//     includeValidated: true,
//     attributes: [
//       'id',
//       'animalname',
//       'description',
//       'mainImg',
//       'createdAt',
//       'updatedAt'
//     ],
//     raw: true
//   },
//   isNewRecord: false,
//   Galleries: [
//     Gallery {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     },
//     Gallery {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     },
//     Gallery {
//       dataValues: [Object],
//       _previousDataValues: [Object],
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: [Object],
//       isNewRecord: false
//     }
//   ]
// }