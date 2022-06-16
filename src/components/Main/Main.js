import React from 'react';
import './main.css';
import { useSelector } from 'react-redux';

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
                            <a href='/'>{`Learn More →`}</a>
                        </div>
                    </section>
                )
            })
        }
    </div>
};

export default Main;
