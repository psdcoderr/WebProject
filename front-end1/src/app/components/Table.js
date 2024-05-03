import React from 'react'
import Navbar from './navbar';

const Table = () => {
    const headers = ['Name', 'Categories', 'Points'];
    const rows = [
      ['John Doe', 30, 'john@example.com'],
      ['Jane Smith', 25, 'jane@example.com'],
      ['Bob Johnson', 40, 'bob@example.com'],
      ['John Doe', 30, 'john@example.com'],
      ['Jane Smith', 25, 'jane@example.com'],
      ['Bob Johnson', 40, 'bob@example.com'],
      ['John Doe', 30, 'john@example.com'],
      ['Jane Smith', 25, 'jane@example.com'],
      ['Bob Johnson', 40, 'bob@example.com'],
      ['John Doe', 30, 'john@example.com'],
      ['Jane Smith', 25, 'jane@example.com'],
      ['Bob Johnson', 40, 'bob@example.com'],
      ['John Doe', 30, 'john@example.com'],
      ['Jane Smith', 25, 'jane@example.com'],
      ['Bob Johnson', 40, 'bob@example.com'],
    ];
  
    return (
    <>
        <Navbar/> 
      <table className="table custom-width-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
    
    
    );
  };
  
  export default Table;