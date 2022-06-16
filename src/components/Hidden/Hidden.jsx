import React from 'react'
import './hidden.css';

export default function Hidden({ children }) {
    return (
        <div className='a11y-hidden'>
            {children}
        </div>
    )
}
