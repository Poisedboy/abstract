import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <section className="nav-bar">
                <div>
                    <Link to='/' className="logo">Abstract</Link>
                    <Link to="/help" className="help">Help center</Link>
                </div>
                
                <div className="buttons">
                    <button className="submit-request">Submit a request</button>
                    <button className="sign-in">Sign in</button>
                </div>
            </section>
            <section className="banner">
                <div>
                    <h4>How can we help?</h4>
                    <div>
                        <input type='text' placeholder="Search"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;