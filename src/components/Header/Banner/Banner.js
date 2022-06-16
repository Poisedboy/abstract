import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="question">
                <h4>How can we help?</h4>
            </div>
            <input
                type='text'
                placeholder="Search"
                className='search'
            />
        </div>
    );
};

export default Banner;