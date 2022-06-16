import React from 'react';
import './post.css';
import './author.css';
import './category.css';
import Hidden from '../../../components/Hidden/Hidden';
import Categories from '../../../components/Categories/Categories';

const Post = ({ thumbnailSrc, title, profileSrc }) => {
    return (
        <li>
            <a href='/post-view' className='post'>
                <article>
                    <img src={thumbnailSrc} alt='' />
                    <div className="contents-wrap">
						{/* <!-- category --> */}
						<Categories title='Category' categoryAry={['Life', 'Style']} />
						{/* <!-- //category --> */}

						<h3>{title}</h3>
						{/* <!-- author --> */}
						<dl className="author-wrap">
							<Hidden><dt>Category</dt></Hidden>
							<dd className="author"><img src={profileSrc} alt="" /> Chilli</dd>
							<dt className="a11y-hidden">Created</dt>
							<dd className="created">2022.05.25</dd>
						</dl>
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