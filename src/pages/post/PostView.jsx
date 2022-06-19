import React from 'react';
import Footer from '../../components/Footer/Footer';
import PostBanner from './PostBanner/PostBanner';
import Header from '../../components/Header/Header';
import View from './View/View';

const PostView = () => {
    return (
        <>
        <Header />
        <PostBanner />
        <View />
        <Footer />
        </>
    )
}

export default PostView;