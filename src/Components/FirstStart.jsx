import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';


const FirstStart = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Navbar"
                        className={({ isActive }) => (isActive ? " active" : "")}>Learn Java Script</Link>

                </li>

            </ul>
        </div>
    )

}

export default FirstStart