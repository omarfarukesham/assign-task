import React from 'react';
import notFound from '../images/notfound.jpg'

const NotFound = () => {
    return (
        <>
             <div className='w-100 text-center'>
                <img className='img-fluid rounded' src={notFound} alt='404images' />
            </div>
        </>
    );
};

export default NotFound;