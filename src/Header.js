import React from 'react';
import './Header.css';

const Header = ({ logo, certification }) => {
    return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="logo" />
            <p className="subtitle">REFRIGERATORS | ICE MACHINES | AIR CONDITIONERS</p>
        </div>
        <div className="certSection">
            <img src={certification} alt="certification" />
        </div>
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
};



export default Header;