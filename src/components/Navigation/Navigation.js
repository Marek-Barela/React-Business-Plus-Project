import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
	return (
		<nav>
			<ul className={props.className}>
				<li>
					<span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" exact to="/">Home</NavLink>
				</li>
				<li>
					<span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" to="/About">About us</NavLink>
				</li>
				<li><span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" to="/Services">Services</NavLink>
				</li>
				<li>
					<span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" to="/News">News</NavLink>
				</li>
				<li>
					<span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" exact to="/Blog">Blog</NavLink>
				</li>
				<li>
					<span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" to="/FAQ">FAQ</NavLink>
				</li>
				<li>
					<span className="fas fa-caret-right"></span>
					<NavLink activeClassName="navigation__link--active" to="/Contact">Contact us</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;