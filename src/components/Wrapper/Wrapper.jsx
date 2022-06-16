import React from 'react';
import './wrapper.css';

const Wrapper = ({ children }) => {
    return (
        <div className='max-width'>
            {children}
        </div>
    )
}

export default Wrapper;