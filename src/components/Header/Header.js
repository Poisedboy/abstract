import React from "react";
import { Link } from 'react-router-dom';
import './header.css';
import Banner from './Banner/Banner';

const Header = () => {

    const AlarmHandler = () => {
        return alert('Button was pressed!');
    }

    return (
        <div className="header">
            <section className="nav-bar">
                <div className="logo-help">
                    <Link to='/' className="logo">Abstract</Link>
                    <span className="vertical-line">|</span>
                    <Link to="/help" className="help">Help center</Link>
                </div>
                <input type='checkbox' id="checkbox-toggle" />
                <label htmlFor="checkbox-toggle" className="hamburger">&#9776;</label>
                <div className="buttons">
                    <button className="submit-request">Submit a request</button>
                    <button className="sign-in" onClick={AlarmHandler}>Sign in</button>
                </div>
            </section>
            <Banner />
        </div>
    );
};

export default Header;