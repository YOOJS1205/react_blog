import React from 'react';
import './writeBtn.css';

const WriteBtn = () => {
    return (
        <li>
            <a href="!#" className="button">
				<img src={require("../../../assets/icon-modify-white.svg").default} alt="" />
				<span>Write</span>
			</a>
        </li>
    )
}

export default WriteBtn;