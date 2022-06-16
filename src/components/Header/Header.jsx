import React from 'react';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';
import WriteBtn from './WirteBtn/WriteBtn';
import Logout from './Logout/Logout';
import './header.css';
import './button.css';
import Wrapper from '../Wrapper/Wrapper';

const Header = () => {
    return (
        <header>
            <Wrapper>
                <Logo />
                <ul>
                    <Profile />
                    <WriteBtn />
                    <Logout />
                </ul>
            </Wrapper>
        </header>
    )
}

export default Header;