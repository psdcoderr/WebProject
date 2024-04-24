import React from 'react';
import { useEffect, useState } from "react";
import 'C:/Users/moiz2/Desktop/6th Sem/WEB/Final Project/Practice Projects/2.0/front-end1/src/app/globals.css'

export default function Signup() {

  // Give server.js port and route.
  const API_BASE = 'http://localhost:4001/users';

  // Items me DB data stored.
  const [items, setItems] = useState([]);
    
  // Getting data When component reloads/loads
  //useEffect(function(), data(optional));
  useEffect(() => {
    GetCredentials();
  }, []);


  // fetch = get command.
  const GetCredentials = () => {
    fetch(API_BASE)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err))
  }



  return (
    <div>
      <div className='Signup-page'>
      <div className='container signup-cont'>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
       
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>


              
        
       </div>
      </div>

      {/* Shows all names list. Component that shows all names.*/}
      <div className="todolist">  
          {items.map((item)=> {
            const {_id, name} = item
            return  <TodoItem name={name} id={_id} setItems={setItems}/>   
          })}
      </div>
      
    </div>
  );
}
