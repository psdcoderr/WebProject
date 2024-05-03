import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const API_BASE = 'http://localhost:4006/society';

const Table = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getItems();
  }, []);

      const getItems = () => {
        fetch(API_BASE)
          .then(res => res.json())
          .then(data => setItems(data))
          .catch(err => console.log(err))
      }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Navbar />
      <table className="table custom-width-table">
        <thead>
          <tr>
            <th>Contributions</th>
            <th>Points</th>
            <th>Society</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.Contributions}</td>
              <td>{item.Points}</td>
              <td>{item.Society}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
