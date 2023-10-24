import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="shared-container shared-footer">
            <div className="shared-logo">CES-26</div>
            <p>&copy; {new Date().getFullYear()} Felipe Spirandelli</p>
        </div>
    );
};

export default Footer;
