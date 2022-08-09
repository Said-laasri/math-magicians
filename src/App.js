import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navs from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="AppCalcul">
      <Navs />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
