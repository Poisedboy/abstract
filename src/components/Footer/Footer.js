import React from 'react';
import './footer.css';
import { useSelector } from 'react-redux';

const Footer = () => {
    const linksBoxes = useSelector(state => state.footer);

    return (
        <footer>
            <div className='container'>
                {linksBoxes.map(linksBox => {
                    if (linksBox.title === 'Company') {
                        return <section className='colomn' key={linksBox.id}>
                            <h4>{linksBox.title}</h4>
                            {linksBox.links.map((link, index) => <h6 key={index}>{link}</h6>)}
                            <strong>Contact Us</strong>
                            <h6>info@abstract.com</h6>
                        </section> 
                    }
                    return <section className='colomn' key={linksBox.id}>
                        <h4>{linksBox.title}</h4>
                        {linksBox.links.map((link, index) => <h6 key={index}>{link}</h6>)}
                    </section>
                })}
            </div>     
            <div class="legal">
                    <h5>© Copyright 2022</h5>
                    <h5>Abstract Studio Design, Inc.</h5>
                    <h5>All rights reserved</h5>
            </div>
        </footer>
    );
};

export default Footer;
