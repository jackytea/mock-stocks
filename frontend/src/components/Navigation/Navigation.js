import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<ul className="nav navbar-nav">
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/markets'>Markets</Link>
			</li>
		</ul>
	);
}

export default Navigation;