import React, { useState } from 'react';
import ShowData from './ShowData';

export default function Signup() {

  const API_BASE = 'http://localhost:4002/users';

  const [id, setId] = useState('');
  
  const [password, setpassword] = useState('');
  
  const [phoneno,setPhoneno] = useState('');

  const [FirstName,setFirstName] = useState('');

  const [LastName,setLastName] = useState('');

  const handleLastNameChange = (event) =>{
    setLastName(event.target.value);
  }

  const handleFirstNameChange = (event) =>{
    setFirstName(event.target.value);
  }


  const handlePhoneChange = (event) =>{
    setPhoneno(event.target.value);
  }
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
        body: JSON.stringify({ id, password, phoneno }),
      });
    
      if (response.ok) {
        console.log('ok');
      } else {
        console.log('not ok:', response.status);
      }

    }catch(error){
      console.log('error');
    }
  };
  

  return (

      <div class="Main-Container">
        <div class="Image-left">
          <h1>Welcome to Contribution system</h1>
        </div>

        <div class="Signup-page">
          <div class="container Signup-Form-Design">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="fname" placeholder="First Name" value={FirstName} onChange={handleFirstNameChange}/>
              <label for="fname">First Name</label>
            </div>

            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="lname" placeholder="Last Name" value={LastName} onChange={handleLastNameChange}/>
              <label for="lname">Last Name</label>
            </div>

            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="id" placeholder="ID" value={id} onChange={handleIdChange}/>
              <label for="id">ID</label>
            </div>

            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="password" placeholder="password" value={password} onChange={handlepasswordChange}/>
              <label for="password">password</label>
            </div>

            <div class="form-floating mb-3">
              <input type="tel" id="phone" class="form-control" name="phone" placeholder="Phone" value={phoneno} onChange={handlePhoneChange} pattern="\+[0-9]{2}-[0-9]{3}-[0-9]{6}"  />
              <label for="phone">Phone No:</label>
            </div>

            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>



  );
}
