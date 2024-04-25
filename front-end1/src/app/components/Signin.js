import React, { useEffect, useState } from 'react'

export default function Signin() {
    const API_BASE = 'http://localhost:4002/users';
    const [id, setId] = useState([]);
    useEffect(() =>{
        GetCredentials();
    },[]);

    const GetCredentials = () => {
        fetch(API_BASE)
        .then(res => res.json())
        .then(data => setId(data))
        .catch(err => console.log(err))
    }

    

  return (
    <div>
      
    </div>
  )
}
