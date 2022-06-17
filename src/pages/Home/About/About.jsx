import React from "react";
import Category from "../../../components/Category/Category";
import './about.css';

const About = () => {
    const categoriesAry = ['Life', 'Style', 'Tech', 'Sport', 'Photo', 'Develop', 'Music'];
    return (
        <aside className="about">
			<h2>About Me</h2>
			<img src="/assets/images/profile.jpg" alt="" className="user-profile" />
			<p className="user-name">Chilli</p>
			<p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<h3>Categories</h3>

            <ul className="categories">
                {categoriesAry.map(item => (
                    <li><a href="!#"><Category>{item}</Category></a></li>
                ))}
			</ul>

			<h3>Follow</h3>
			<ul className="sns">
				<li>
					<a href="!#">
						<img src="/assets/Facebook.svg" alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="!#">
						<img src="/assets/Twitter.svg" alt="Twitter" />
					</a>
				</li>
				<li>
					<a href="!#">
						<img src="/assets/Instagram.svg" alt="Instagram" />
					</a>
				</li>
				<li>
					<a href="!#">
						<img src="/assets/Github.svg" alt="GitHub" />
					</a>
				</li>
			</ul>
		</aside>
    )
}

export default About;