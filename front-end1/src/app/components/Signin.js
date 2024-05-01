// Signin.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Signin() {

    const API_BASE = 'http://localhost:4002/users';

    const [dataCred, setDataCred] = useState([]);
    const [emailid, setemailId] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
        GetTodos();
    }, []);


    const GetTodos = () => {
        fetch(API_BASE)
            .then(res => res.json())
            .then(dataCred => {
                // Log every record received
                console.log("Data Received:", dataCred);
    
                // Assuming setDataCred is a state updater function
                setDataCred(dataCred);
            })
            .catch(err => console.log(err));
    }
    

    const handleemailIdChange = (event) => {
        setemailId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const login = async () => {
        const user = dataCred.find(user => user.emailid === emailid);
        
        if (user && user.password === password) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    };

    return (
        <div>
            <div className="Signin-page">
                <div className="container Signin-Form-Design">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="id" placeholder="ID" value={emailid} onChange={handleemailIdChange} />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button onClick={login}>Login</button>
                    <button className="button">
                        <Link className="linkxxx" to="/Signup">Sign Up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
