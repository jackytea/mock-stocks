import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { getUserInfo } from "../../actions/auth";
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
		dispatch(getUserInfo());
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [user?.token, location, logout, dispatch]);

	return (
		<nav className="fixed bg-white shadow dark:bg-gray-900 w-full z-50">
			<div className="container px-6 py-4 mx-auto">
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex items-center justify-between">
						<div className="text-xl font-semibold text-gray-700">
							<Link className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Mock Stocks</Link>
						</div>

						<div className="flex md:hidden">
							<button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
								<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
									<path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
								</svg>
							</button>
						</div>
					</div>

					<div className="flex-1 md:flex md:items-center md:justify-between">

						<div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
							<Link to="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Home</Link>
							<Link to="/markets" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Markets</Link>
							{user?.result && <Link to="/purchased" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Investments</Link>}
							<Link to="/about" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">About</Link>
						</div>

						<div className="flex items-center mt-4 md:mt-0">
							<ToggleTheme />
							{user?.result ?
								<>
									<span className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">{user?.result.name}</span>

									<span className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">${user?.result.coins.toFixed(2)}</span>

									<button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
										<div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
											<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
										</div>
									</button>

									<div className="flex items-center mt-4 md:mt-0">
										<button onClick={logout} className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto">Logout</button>
									</div>
								</>
								:
								<Link to="/auth" className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 dark:bg-gray-600 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto">Login / Register</Link>
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
