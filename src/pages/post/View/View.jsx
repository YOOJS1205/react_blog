import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import AuthorWrap from '../../../components/AuthorWrap/AuthorWrap';
import Categories from '../../../components/Categories/Categories';
import Wrapper from '../../../components/Wrapper/Wrapper';
import './view.css';

export default function View() {
    const { thumbnailImgSrc } = useSelector(state => ({
		thumbnailImgSrc: state.thumbnailImgReducer.thumbnailImgSrc
	}));

	console.log(thumbnailImgSrc);
  return (
    <div className='view'>
        <Wrapper>
            <section className='wrap-box'>
                <div className='inner'>
                    <AuthorWrap />
                    <Categories title='Category' categoryAry={['Life', 'Style']} />
                    <div className="title-wrap">
			    	    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
			    	    <button className="btn-like">Like</button>
			        </div>
                    <hr />
                    <div className="view-contents">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                            dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                            cum incidunt repudiandae vel.
                        </p>
                        <img src={thumbnailImgSrc} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                            dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                            nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                            amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                            cum incidunt repudiandae vel.
                        </p>
                    </div>
                    <div className="btn-group">
                        <a href="!#" className="btn-modify">
                            <span className="a11y-hidden">modify</span>
                        </a>
                        <button type="button" className="btn-delete">
                            <span className="a11y-hidden">delete</span>
                        </button>
                    </div>
                    <Link to="./" className="btn-back">
                        <span className="a11y-hidden">Back</span>
                    </Link>
                </div>
            </section>
        </Wrapper>
    </div>
  )
}
