import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import './postList.css';


const PostList = () => {
	// json 데이터 담는 변수 초기 설정
	const [isLoaded, setIsLoaded] = useState(false);
	const [postObj, setPostObj] = useState({});

	// 마운트될 때 포스트 데이터 postObj 변수에 담기
	useEffect(() => {
		async function getData() {
			const res = await axios.get('/assets/data.json');
			const result = await res.data.posts;
			setPostObj(result);
			setIsLoaded(true);
		}
		getData();
		// axios.get('/assets/data.json')
		// 	.then(response => setPostObj(response.data.posts));
	}, [])

	if (isLoaded) {
		return (
			<ul className='posts'>
				{postObj.map(item => (
					<Post
					key={item.id}
					thumbnailSrc={item.thumbnail}
					title={item.title}
					profileSrc={item.profileImg}
					created={item.created}/>
				))}
			</ul>
		)
	}
}

export default PostList;