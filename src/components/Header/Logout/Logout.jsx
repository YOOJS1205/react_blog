import React from 'react';
import '../WirteBtn/writeBtn.css';

const Logout = () => {
    return (
        <li>
			<button className="button white">
				<img src={require('../../../assets/icon-logout.svg').default} alt="" />
				<span>Logout</span>
			</button>
		</li>
    )
}

export default Logout;