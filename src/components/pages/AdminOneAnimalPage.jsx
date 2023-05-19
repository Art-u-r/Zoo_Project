import axios from 'axios';
import React, { useState } from 'react';
import NewGalleryPhoto from './NewGalleryPhoto';

export default function AdminOneAnimalPage({ oneAnimal, deleteHandler, setAnimal }) {
  // console.log('-------------------', oneAnimal.Galleries);
  const [inputValue, setInputValue] = useState({
    animalname: oneAnimal.animalname,
    description: oneAnimal.description,
    mainImg: oneAnimal.mainImg,
  });
  const changeHandler = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateHandler = async (id) => {
    const { data } = await axios.patch(`/admin/animals/${id}`, inputValue);
    setAnimal((prev) => prev.map((el) => (el.id === id ? data : el)));
    window.location = '/admin/animals';
  };
  return (
    <>
      <div className="d-flex">
        <img
          style={{ width: '400px', height: '500px' }}
          src={oneAnimal.mainImg}
          alt="НЕТ КАРТИНКИ"
        />
        {oneAnimal.Galleries.map((el) => (
          <img
            style={{ width: '300px', height: '350px' }}
            key={el.id}
            src={el.image}
            alt="НЕТ КАРТИНКИ"
          />
        ))}
      </div>
      <h4>{oneAnimal.animalname}</h4>
      <button className="btn btn-danger" type="button" onClick={() => deleteHandler(oneAnimal.id)}>
        delete
      </button>

      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#Modal${oneAnimal.id}`}
      >
        Изменить
      </button>
      <NewGalleryPhoto id={oneAnimal.id} />
      <div
        className="modal fade"
        id={`Modal${oneAnimal.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Изменение
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="animalname"
                value={inputValue.animalname}
                onChange={changeHandler}
                placeholder="Имя животного"
              />
              <input
                type="text"
                name="description"
                value={inputValue.description}
                onChange={changeHandler}
                placeholder="Описание животного"
              />
              <input
                type="text"
                name="mainImg"
                value={inputValue.mainImg}
                onChange={changeHandler}
                placeholder="URL изображения животного"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => updateHandler(oneAnimal.id)}
              >
                Сохранить изменения
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
