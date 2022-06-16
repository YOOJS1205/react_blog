import React from 'react';
import Hidden from '../../../components/Hidden/Hidden';
import Wrapper from '../../../components/Wrapper/Wrapper';
import About from '../About/About';
import PostList from '../PostList/PostList';
import './main.css';

const Main = () => {
    return (
        <main>
            <Wrapper>
                <Hidden>
                    <h2>Post</h2>
                </Hidden>
                <PostList />
                <About />
            </Wrapper>
        </main>
    )
}

export default Main;