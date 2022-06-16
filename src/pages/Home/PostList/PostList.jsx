import React from 'react';
import Post from '../Post/Post';
import './postList.css';
import {data} from '../../../data';


const PostList = () => {
	console.log(data);
    return (
        <ul className='posts'>
			{data.posts.map(item => (
				<Post
				key={item.id}
				thumbnailSrc={item.thumbnail}
				title={item.title}
				profileSrc={item.profileImg}/>
			))}
		</ul>
    )
}

export default PostList;