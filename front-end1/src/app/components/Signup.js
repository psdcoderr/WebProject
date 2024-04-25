import React, { useState } from 'react';
import ShowData from './ShowData';
import 'C:/Users/moiz2/Desktop/6th Sem/WEB/Final Project/Practice Projects/2.0/front-end1/src/app/globals.css'

export default function Signup() {

  const API_BASE = 'http://localhost:4002/users';
  const [items, setItems] = useState([]);
  const [id, setId] = useState('');
  const [password, setpassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST data to the API
    try{
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }),
      });
    
      if (response.ok) {
        console.log('ok');
      } else {
        console.log('not ok:', response.status);
      }

    }catch(error){
      console.log('error');
    }
  ;
  

  return (
    <div>
      <div className='Signup-page'>
        <div className='container signup-cont'>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="id" placeholder="ID" value={id} onChange={handleIdChange}/>
            <label htmlFor="id">ID</label>
          </div>
          <div className="form-floating">
            <input type="passwordword" className="form-control" id="password" placeholder="passwordword" value={password} onChange={handlepasswordChange}/>
            <label htmlFor="password">passwordword</label>
          </div>
        </div>
        <button onClick={handleSubmit}>Send</button>
      </div>

      {/* <div>  
          {Array.isArray(items) && items.map((item)=> {
            const {_id, name} = item
            return  <ShowData key={_id} name={name} id={_id} setItems={setItems}/>   
          })}
      </div> */}
    </div>
  );
}
