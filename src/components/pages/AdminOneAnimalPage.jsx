import axios from 'axios';
import React, { useState } from 'react';
import NewGalleryPhoto from './NewGalleryPhoto';

export default function AdminOneAnimalPage({ oneAnimal, deleteHandler, setAnimal }) {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash3"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
      </button>

      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#Modal${oneAnimal.id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
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
