import React from 'react';
import Post from './Post';

const Main = () => {
    return (
        <Main>
            <div className='max-width'>
                <h2 className='a11y-hidden'>Post</h2>
                <ul className='posts'>
                    <Post src='../../assets/images/post-img6.jpg' />
                </ul>
            </div>
        </Main>
    )
}

export default Main;