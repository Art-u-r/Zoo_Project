import React from 'react';

export default function PricePage({ prices }) {
  console.log('prices', prices);
  const { workday_adults, weekend_adults, workday_kids, weekend_kids} = prices[0]
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="row">Тариф</th>
          <th scope="col">Будние дни</th>
          <th scope="col">Выходные</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-secondary">
          <th scope="row">Взрослый</th>
          <td>{workday_adults}</td>
          <td>{weekend_adults}</td>
        </tr>
        <tr className="table-success">
          <th scope="row">Детский</th>
          <td>{workday_kids}</td>
          <td>{weekend_kids}</td>
        </tr>
      </tbody>
    </table>
  );
}
