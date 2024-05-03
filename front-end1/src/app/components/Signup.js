import React, { useState } from 'react';


export default function Signup() {

  const API_BASE = 'http://localhost:4002/users';
// FirstName,LastName,emailid,phoneno,password,role
  const [emailid, setEmailId] = useState('');
  
  const [password, setpassword] = useState('');
  
  const [phoneno,setPhoneno] = useState('');

  const [FirstName,setFirstName] = useState('');

  const [LastName,setLastName] = useState('');

  const [role, setRole] = useState('');

  const handleLastNameChange = (event) =>{
    setLastName(event.target.value);
  }

  const handleFirstNameChange = (event) =>{
    setFirstName(event.target.value);
  }

  const handlePhoneChange = (event) =>{
    setPhoneno(event.target.value);
  }
  const handleEmailIdChange = (event) => {
    setEmailId(event.target.value);
  };

  const handlepasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST data to the API
    try {
      const response = await fetch(API_BASE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ FirstName, LastName, phoneno, emailid , password, role}),
      });
  
      if (response.ok) {
        console.log('Data stored successfully.');
        console.log(response);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  
  

  return (
    <>

    <div className="container">
      <div className="title">Signup</div>
      <div className="content">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your First Name" required id="fname" value={FirstName} onChange={handleFirstNameChange}/>
          </div>
          
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your Last Name" required id="lname" value={LastName} onChange={handleLastNameChange}/>
          </div>
          
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your Email" required id="email" value={emailid} onChange={handleEmailIdChange}/>
          </div>

          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your Phone no" required id="phoneno" value={phoneno} onChange={handlePhoneChange}/>
          </div>
          
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your Password" required id="password" value={password} onChange={handlepasswordChange}/>
          </div>

          <div className="input-box">
            <span className="details">Role</span>
            <input type="text" placeholder="Enter your Role" required id="role" value={role} onChange={handleRoleChange}/>
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Register" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  


    </>
  );
}
