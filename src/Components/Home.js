import React from 'react';
import paint from '../images/bird.jpg'

const Home = () => {
    return (
        <div>
            <h1 className='text-center fs-1 fw-bold'> Welcome to Painting Canvas</h1>
            <div className='w-100 text-center'>
                <img className='img-fluid rounded' src={paint} alt='home images' />
            </div>
        </div>
    );
};

export default Home;