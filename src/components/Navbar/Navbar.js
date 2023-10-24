import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="shared-container shared-navbar">
            <div className="shared-logo">CES-26</div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Sobre nós</a></li>
                    <li className="nav-item active"><a href="#">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
