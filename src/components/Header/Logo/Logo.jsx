import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
    return (
        <h1>
            <Link to='./'>
                <img src="/assets/Logo.svg" alt='My Blog' />
            </Link>
        </h1>
    )
}

export default Logo;