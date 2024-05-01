'use client'

import Navbar from "./components/navbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Mainpage from "./components/Mainpage";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from "react";

// Give server.js port and route.
const API_BASE = 'http://localhost:4002/users';

export default function Home() {

  // Items me DB data stored. Will be sent as props.
    const [items, setItems] = useState([]);
  
    // Getting data When component reloads/loads
    //useEffect(function(), data(optional));
    useEffect(() => {
      GetTodos();
    }, []);
  
  
    // fetch = get command.
    const GetTodos = () => {
      fetch(API_BASE)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
    }
  
  
  
  
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Signin/>}/>
        </Routes>
        <Routes>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        <Routes>
          <Route path="/Mainpage" element={<Mainpage setItems={setItems} items={items} />} />
        </Routes>
      </Router> 
    </>
  );
}
