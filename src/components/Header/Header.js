import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
                <div>
                    <Link to='/' className="logo">Abstract</Link>
                    <Link to="/help" className="help">Help center</Link>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle" />
                <div className='menu-button'></div>
                <div className="buttons">
                    <button className="submit-request">Submit a request</button>
                    <button className="sign-in">Sign in</button>
                </div>
            </div>
            <div className="banner">
                <h3>How can we help?</h3>
                <input />
            </div>
        </div>
    );
};

export default Header;