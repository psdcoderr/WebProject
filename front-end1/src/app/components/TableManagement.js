import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const API_BASE = 'http://localhost:4005/management';

const Table = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

      const getItems = () => {
        fetch(API_BASE)
          .then(res => res.json())
          .then(data => setItems(data))
          .catch(err => console.log(err))
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
