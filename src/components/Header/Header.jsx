import React from 'react';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';
import WriteBtn from './WirteBtn/WriteBtn';
import Logout from './Logout/Logout';
import './header.css';
import './button.css';

const Header = () => {
    return (
        <header>
            <div className='max-width'>
                <Logo />
                <ul>
                    <Profile />
                    <WriteBtn />
                    <Logout />
                </ul>
            </div>
        </header>
    )
}

export default Header;