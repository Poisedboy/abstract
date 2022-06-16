import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="question">
                <h4>How can we help?</h4>
            </div>
            <div className="input-question">
                <input type='text' placeholder="Search" />
            </div>
        </div>
    );
};

export default Banner;