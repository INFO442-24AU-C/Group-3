import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar-container">
            <div className="navbar-company-name">
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" className="logo" />

            
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/quiz">Evaluate</Link></li>
                <li><Link to="/whatnow">WhatNow</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
