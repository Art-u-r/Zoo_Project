import axios from 'axios';
import React, { useState } from 'react';

export default function NewGalleryPhoto({ id }) {
  const [input, setInput] = useState({ image: '' });

  const clickHandler = async () => {
    const response = await axios.post(`/api/photo/${id}`, input);
    if (response.status === 200) {
      setInput({ image: '' });
    }
    window.location.reload();
  };
  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${id}`}
      >
        Обновить галерею
      </button>
      <div
        className="modal fade"
        id={`exampleModal${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                URL фотографии
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <input type="text" name="image" value={input.image} onChange={changeHandler} />
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Отмена
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => clickHandler()}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
