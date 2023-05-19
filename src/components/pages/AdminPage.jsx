import React from 'react';

export default function AdminPage() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div>
        <a href="/admin/animals">Страница редактирования животных</a>
      </div>
      <h2>типа разделение</h2>
      <div>
        <a href="/admin/price">Страница редактирования тарифов</a>
      </div>
    </div>
  );
}
