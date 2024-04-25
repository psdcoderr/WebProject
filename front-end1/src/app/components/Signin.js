import React, { useEffect, useState } from 'react';

export default function Signin() {
    const API_BASE = 'http://localhost:4002/users';

    const [dataCred, setDataCred] = useState([]);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const login = async () => {
      console.log("Data Credentials:", dataCred);
      console.log("Input ID:", id);
      console.log("Input Password:", password);
  
      const user = dataCred.find(user => user.email === id); 
      console.log("User found:", user);
      console.log("User ID:", user ? user.id : "No user found"); // Log the user ID if user is found, otherwise indicate no user found
  
      if (user && user.password === password) {
          console.log('Yes');
      } else {
          console.log('No');
      }
  };
  

    useEffect(() => {
        GetCredentials();
    }, []);

    const GetCredentials = () => {
        fetch(API_BASE)
            .then(res => res.json())
            .then(data => {
                setDataCred(data);
                // To check data being retrieved or not.
                console.log(data);
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <div className="Signin-page">
                <div className="container Signin-Form-Design">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="id" placeholder="ID" value={id} onChange={handleIdChange} />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
}
