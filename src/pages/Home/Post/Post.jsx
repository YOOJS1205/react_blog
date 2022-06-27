import React from 'react';
import { useDispatch } from 'react-redux';
import './post.css';
import './author.css';
import './category.css';
import Categories from '../../../components/Categories/Categories';
import AuthorWrap from '../../../components/AuthorWrap/AuthorWrap';
import { Link } from 'react-router-dom';

const Post = props => {
	const dispatch = useDispatch();

	const onClickThumbnailImg = (e) => {
		const thumbnailImgSrc = e.target.src;
		e.preventDefault();
		dispatch({ type: 'CLICK', thumbnailImgSrc })
	}
    return (
        <li onClick={onClickThumbnailImg}>
            <Link to='/post-view' className='post'>
                <article>
                    <img src={props.thumbnailSrc} alt='' />
                    <div className="contents-wrap">
						<Categories title='Category' categoryAry={props.category} />
						<h3>{props.title}</h3>
						<AuthorWrap />
						<p className="post-description">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
							facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
							corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
							illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
							dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
							dolor quas odio cum incidunt repudiandae vel."
						</p>
					</div>
                </article>
            </Link>
        </li>
    )
}

export default Post;