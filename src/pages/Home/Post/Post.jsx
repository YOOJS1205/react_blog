import React from 'react';
// import { Link } from 'react-router-dom';
import './post.css';
import './author.css';
import './category.css';
import Hidden from '../../../components/Hidden/Hidden';
import Categories from '../../../components/Categories/Categories';
import AuthorWrap from '../../../components/AuthorWrap/AuthorWrap';

const Post = (props) => {
    return (
        <li>
            <a href='/post-view' className='post'>
                <article>
                    <img src={props.thumbnailSrc} alt='' />
                    <div className="contents-wrap">
						{/* <!-- category --> */}
						<Categories title='Category' categoryAry={['Life', 'Style']} />
						{/* <!-- //category --> */}

						<h3>{props.title}</h3>
						{/* <!-- author --> */}
						<AuthorWrap />
						{/* <!-- //author --> */}

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
            </a>
        </li>
    )
}

export default Post;