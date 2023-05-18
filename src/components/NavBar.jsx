import axios from 'axios';
import React from 'react';

export default function Navbar({ user }) {
  const clickHandler = async () => {
    const res = await axios('/auth/logout');
    if (res.status === 200) {
      window.location = '/';
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Главная страница
            </a>
          </li>
          {!user && (
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">
                Администрирование
              </a>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Панель администратора
              </a>
            </li>
          )}
          {user?.id && (
            <li className="nav-item">
              <button type="button" className="btn btn-warning" onClick={clickHandler}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
