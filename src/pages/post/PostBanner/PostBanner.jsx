import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function PostBanner() {
	const { thumbnailImgSrc } = useSelector(state => ({
		thumbnailImgSrc: state.thumbnailImgReducer.thumbnailImgSrc
	}));

	console.log(thumbnailImgSrc);

  	return (
  	  <div className="banner" style={{backgroundImage: `url(${thumbnailImgSrc})`}}>
				<div className="max-width">
					<div className="banner-contents">
						<p className="today">May <em>25</em> Wednesday</p>
					</div>
				</div>
			</div>
  	)
}
