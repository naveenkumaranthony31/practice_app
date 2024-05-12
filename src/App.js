import React from 'react';
import './App.css';
import Home from './Companents/Home';
import View from './Companents/View';
import Edit from './Companents/Edit';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/view/:id" element={<View />} />
    <Route path="/edit/:id" element={<Edit />} />
    </Routes>
   </BrowserRouter>
    )
  
}

export default App;
