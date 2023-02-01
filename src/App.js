import './App.css';
import 'animate.css'
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import M1L1 from './Components/Lessons/M1L1';
import M1L2 from './Components/Lessons/M1L2';
import GitHub from './Components/Lessons/GitHub';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='Main'>
          <div className='navbarBox'>
            <Navbar />

          </div>

          <div className='mainTextBox'>
            <Routes>
              <Route path='GitHub' element={<GitHub />} />
              <Route path='M1L1' element={<M1L1 />} />
              <Route path='M1L2' element={<M1L2 />} />

            </Routes>
          </div>

        </div>



      </div>

    </BrowserRouter>
  );
}

export default App;
