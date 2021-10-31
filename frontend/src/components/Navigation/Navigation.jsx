import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { getUserInfo } from "../../actions/auth";
import { LOGOUT } from '../../constants/actions';
import DefaultAvatarImage from '../../assets/images/avatar.jpg';

const Navigation = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const container = useRef(null);
	const [showDropdown, setShowDropdown] = useState(false);
	const [menuHidden, setMenuHidden] = useState(true);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logout = useCallback(
		() => {
			dispatch({ type: LOGOUT });
			setUser(null);
			history.push('/auth');
		}, [dispatch, history],
	);

	useEffect(() => {
		setMenuHidden(true);
		return () => {
			setMenuHidden(true);
		}
	}, []);

	useEffect(() => {
		const token = user?.token;
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				logout();
			}
			dispatch(getUserInfo());
		}
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [user?.token, location, logout, dispatch]);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (!container?.current?.contains(event.target)) {
				if (!showDropdown) return;
				setShowDropdown(false);
			}
		};
		window.addEventListener('click', handleOutsideClick);
		return () => window.removeEventListener('click', handleOutsideClick);
	}, [showDropdown, container]);

	useEffect(() => {
		const handleEscape = (event) => {
			if (!showDropdown) return;
			if (event.key === 'Escape') {
				setShowDropdown(false);
			}
		};
		document.addEventListener('keyup', handleEscape);
		return () => document.removeEventListener('keyup', handleEscape);
	}, [showDropdown]);

	return (
		<nav className="fixed bg-white shadow dark:bg-gray-900 w-full z-50">
			<div className="container px-6 py-4 mx-auto">
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex items-center justify-between">
						<div className="text-xl font-semibold text-gray-700">
							<Link className="text-xl font-bold text-gray-800 dark:text-white lg:text-xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Mock Stocks</Link>
						</div>

						<div className="flex md:hidden">
							<ToggleTheme styleSet={"h-5 w-5 mx-4"} />
							{menuHidden ?
								<button onClick={() => setMenuHidden(false)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
									<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
										<path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
									</svg>
								</button>
								:
								<button onClick={() => setMenuHidden(true)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							}
						</div>
					</div>

					<div className={menuHidden ? "flex-1 md:flex md:items-center md:justify-between hidden" : "flex-1 md:flex md:items-center md:justify-between"}>
						<div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
							<NavLink onClick={() => setMenuHidden(true)} exact to="/" activeClassName="text-blue-500 dark:text-blue-400 font-bold" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Home</NavLink>
							<NavLink onClick={() => setMenuHidden(true)} exact to="/guide" activeClassName="text-blue-500 dark:text-blue-400 font-bold" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Guide</NavLink>
							<NavLink onClick={() => setMenuHidden(true)} exact to="/markets" activeClassName="text-blue-500 dark:text-blue-400 font-bold" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Markets</NavLink>
							{user?.result && <NavLink onClick={() => setMenuHidden(true)} exact to="/purchased" activeClassName="text-blue-500 dark:text-blue-400 font-bold" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Investments</NavLink>}
							{user?.result ?
								<>
									<Link onClick={() => setMenuHidden(true)} to="/dashboard">
										<div className="flex flex-row items-center w-full hover:gray-100 dark:hover-gray-700 md:hidden block px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200">
											<div className="cursor-pointer mr-4 w-8 h-8 overflow-hidden rounded-full">
												<img src={DefaultAvatarImage} className="object-cover w-full h-full" alt="avatar" />
											</div>
											{String(user?.result.name).split(" ")[0] || String(user?.result.name).split(" ")[1]} &nbsp;&nbsp;&nbsp;
											<span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
												<span aria-hidden="true" className="absolute inset-0 bg-yellow-200 dark:bg-yellow-700 opacity-50 rounded-full">
												</span>
												<span className="text-sm relative text-yellow-600 dark:text-yellow-400">
													${user?.result.coins.toFixed(2)}
												</span>
											</span>
										</div>
									</Link>
									<button onClick={() => { setMenuHidden(true); logout(); }} className="w-full md:hidden block mt-6 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 dark:bg-gray-600 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700 md:mx-2 md:w-auto">Logout</button>
								</>
								:
								<Link onClick={() => setMenuHidden(true)} to="/auth" className="md:hidden block mt-6 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 dark:bg-gray-600 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700 md:mx-2 md:w-auto">Login / Register</Link>
							}
						</div>

						<div className="md:flex items-center mt-4 md:mt-0 hidden">
							<ToggleTheme styleSet={"h-5 w-5 mx-4"} />
							{user?.result ?
								<div className="flex items-center justify-center flex-row w-full">
									<span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
										<span aria-hidden="true" className="absolute inset-0 bg-yellow-200 dark:bg-yellow-700 opacity-50 rounded-full">
										</span>
										<span className="text-sm relative text-yellow-600 dark:text-yellow-400">
											${user?.result.coins.toFixed(2)}
										</span>
									</span>

									<span className="sm:w-full px-2 py-1 mr-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200">{String(user?.result.name).split(" ")[0] || String(user?.result.name).split(" ")[1]}</span>

									<div ref={container} className="sm:w-full relative inline-block focus:outline-none" aria-label="toggle profile dropdown" onClick={() => setShowDropdown(!showDropdown)}>
										<div className="cursor-pointer w-8 h-8 overflow-hidden rounded-full">
											<img src={DefaultAvatarImage} className="object-fill w-full h-full" alt="avatar" />
										</div>
										{
											showDropdown &&
											<div className="z-50 hidden md:inline-block absolute right-0 w-32 top-12 origin-top-right bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Link to="/dashboard" className="text-sm text-center w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-100 text-gray-800 dark:text-gray-200">
													Profile
												</Link>
												<Link to="/purchased" className="text-sm text-center w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-100 text-gray-800 dark:text-gray-200">
													Investments
												</Link>
												<button onClick={() => { setMenuHidden(true); logout(); }} className="text-sm w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-100 text-gray-800 dark:text-gray-200">
													Logout
												</button>
											</div>
										}
									</div>
								</div>
								:
								<Link onClick={() => setMenuHidden(true)} to="/auth" className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 dark:bg-gray-600 rounded-md hover:bg-blue-600 dark:hover:bg-gray-700 md:mx-2 md:w-auto">Login / Register</Link>
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
