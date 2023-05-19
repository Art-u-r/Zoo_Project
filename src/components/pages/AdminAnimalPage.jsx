import axios from 'axios';
import React, { useState } from 'react';
import AdminOneAnimalPage from './AdminOneAnimalPage';

export default function AdminAnimalPage({ animal, setAnimal }) {
  // const [input, setInput] = useState({
  //   animalname: animal.animalname,
  //   description: animal.description,
  //   mainImg: animal.mainImg,
  // });

  const deleteHandler = async (id, animalname) => {
    try {
      if (window.confirm(`${animalname} будет удален безвозвратно. Удалить?`)) {
        const response = await axios.delete(`/admin/animals/${id}`);
        if (response.status === 200) {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setAnimal((prev) => [formData, ...prev]);
    // setInput({
    //   animalname: animal.animalname,
    //   description: animal.description,
    //   mainImg: animal.mainImg,
    // });
  };
  return (
    <div>
      <h1>Добавление животных</h1>
      <form onSubmit={submitHandler}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Имя животного
          </span>
          <input
            name="animalname"
            type="text"
            className="form-control"
            placeholder="Имя животного"
            aria-label="animalname"
            aria-describedby="addon-wrapping"
          />
          <span className="input-group-text" id="addon-wrapping">
            Описание
          </span>
          <input
            name="description"
            type="text"
            className="form-control"
            placeholder="Описание"
            aria-label="description"
            aria-describedby="addon-wrapping"
          />
          <span className="input-group-text" id="addon-wrapping">
            Изображение животного
          </span>
          <input
            name="mainImg"
            type="text"
            className="form-control"
            placeholder="Вставьте URL изображения"
            aria-label="mainImg"
            aria-describedby="addon-wrapping"
          />
          <button className="btn btn-success" type="submit">
            Добавить
          </button>
        </div>
      </form>
      <div>
        {animal?.map((el) => (
          <AdminOneAnimalPage
            key={el.id}
            oneAnimal={el}
            deleteHandler={deleteHandler}
            setAnimal={setAnimal}
          />
        ))}
      </div>
    </div>
  );
}
