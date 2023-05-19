import axios from 'axios';
import React, { useState } from 'react';

export default function AdminAnimalPage({ animal, setAnimal }) {
  const [input, setInput] = useState({
    animalname: animal.animalname,
    description: animal.description,
    mainImg: animal.mainImg,
  });

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const updateHandler = async (id) => {
    const { data } = await axios.patch(`/admin/animals/${id}`, input);
    setAnimal((prev) => prev.map((el) => (el.id === id ? data : el)));
    window.location = '/admin/animals';
  };

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
    setInput({
      animalname: animal.animalname,
      description: animal.description,
      mainImg: animal.mainImg,
    });
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
          <div key={el.id}>
            {el.animalname}
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => deleteHandler(el.id, el.animalname)}
            >
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
              data-bs-target="#exampleModal"
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

            <div
              className="modal fade"
              id="exampleModal"
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
                      value={input.animalname}
                      onChange={changeHandler}
                      placeholder="Имя животного"
                    />
                    <input
                      type="text"
                      name="description"
                      value={input.description}
                      onChange={changeHandler}
                      placeholder="Описание животного"
                    />
                    <input
                      type="text"
                      name="mainImg"
                      value={input.mainImg}
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
                      onClick={() => updateHandler(el.id)}
                    >
                      Сохранить изменения
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
