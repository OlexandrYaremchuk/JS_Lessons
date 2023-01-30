import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";

const MainBook = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route className="App-link" path='Navbar' element={<Navbar />} />
            </Routes>

        </BrowserRouter >
    )
}

export default MainBook