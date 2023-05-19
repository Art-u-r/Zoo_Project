import React, { useState } from 'react';
import axios from 'axios'

export default function AdminPricePage({ prices }) {
  const [newPrice, setNewPrice] = useState(prices[0]);
  const [inputVision, setInputVision] = useState({
    workday_adults: false,
    weekend_adults: false,
    workday_kids: false,
    weekend_kids: false,
  });
  const { workday_adults, weekend_adults, workday_kids, weekend_kids } = newPrice;

  const handleButtonClick = (buttonName) => {
    setInputVision((prevButtonName) => ({
      ...prevButtonName,
      [buttonName]: !prevButtonName[buttonName],
    }));
  };

  const submitHandler = async(e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target));
    handleButtonClick(e.target[0].name)
    try {
      const response = await axios.patch('/api/price', data)
      setNewPrice(response.data[0])
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="row">Тариф</th>
          <th scope="col">Цена</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Будни взрослый</td>
          <td>{workday_adults}</td>
          <td>
            {inputVision.workday_adults ? (
              <form onSubmit={submitHandler}> 
                <input name='workday_adults' type="number" />
                <button type="submit" className="btn btn-info"
                >
                  Изменить
                </button>
              </form>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleButtonClick('workday_adults')}
              >
                Редактировать
              </button>
            )}
          </td>
        </tr>
        <tr>
          <td>Будни детский</td>
          <td>{workday_kids}</td>
          <td>{inputVision.workday_kids ? (
              <form onSubmit={submitHandler}> 
                <input name='workday_kids' type="number" />
                <button type="submit" className="btn btn-info"
                >
                  Изменить
                </button>
              </form>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleButtonClick('workday_kids')}
              >
                Редактировать
              </button>
            )}
          </td>
        </tr>
        <tr>
          <td>Выходные взрослый</td>
          <td>{weekend_adults}</td>
          <td>{inputVision.weekend_adults ? (
              <form onSubmit={submitHandler}> 
                <input name='weekend_adults' type="number" />
                <button type="submit" className="btn btn-info"
                >
                  Изменить
                </button>
              </form>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleButtonClick('weekend_adults')}
              >
                Редактировать
              </button>
            )}
          </td>
        </tr>
        <tr>
          <td>Выходные детский</td>
          <td>{weekend_kids}</td>
          <td>{inputVision.weekend_kids ? (
              <form onSubmit={submitHandler}> 
                <input name='weekend_kids' type="number" />
                <button type="submit" className="btn btn-info"
                >
                  Изменить
                </button>
              </form>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handleButtonClick('weekend_kids')}
              >
                Редактировать
              </button>
            )}
            </td>
        </tr>
      </tbody>
    </table>
  );
}
