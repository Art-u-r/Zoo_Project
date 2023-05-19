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
  return (
    <div>
      <h1>Добавление животных</h1>
      <form>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            Имя животного
          </span>
          <input
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
            {el.id}
            <button className="btn btn-danger" type="button">
              delete
            </button>

            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Изменить
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
