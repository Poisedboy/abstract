import React from 'react';
import './main.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
    const data = useSelector(state => state.data);

    return <div className='main'>
        {
            data.map(item => {
                return (
                    <section className='card' key={item.id}>
                        <div className='icon'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='text'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link to='/'>{`Learn More →`}</Link>
                        </div>
                    </section>
                )
            })
        }
    </div>
};

export default Main;
