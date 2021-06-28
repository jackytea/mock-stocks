import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { LOGOUT } from '../../constants/actions';

const Navigation = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const logout = useCallback(
		() => {
			dispatch({ type: LOGOUT });
			setUser(null);
			history.push('/auth');
		}, [dispatch, history],
	);

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				logout();
			}
		}
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [user?.token, location, logout, dispatch]);

	return (
		<ul className="nav navbar-nav">
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/markets'>Markets</Link>
			</li>
			<li>
				{user?.result ? (
					<div>
						<Link to="/purchased">Purchased</Link>
						<div>Logged in as {user?.result.name}</div>
						<div>You have: {user?.result.coins}</div>
						<button onClick={logout}>Log out</button>
					</div>
				) : (
					<Link to="/auth">Sign in</Link>
				)}
			</li>
		</ul>
	);
}

export default Navigation;