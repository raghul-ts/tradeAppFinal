import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Iluminati Stocks. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
