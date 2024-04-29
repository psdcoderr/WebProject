// Signin.js
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
        const user = dataCred.find(user => user.email === id);
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
                        <input type="text" className="form-control" id="id" placeholder="ID" value={id} onChange={handleIdChange} />
                        <label htmlFor="id">ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button onClick={login}>Login</button>
                    {/* <button className="button">
                        <Link className="linkxxx" to="/Signup">Sign Up</Link>
                    </button> */}
                </div>
            </div>
        </div>
    );
}
