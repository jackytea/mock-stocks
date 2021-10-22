import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginUser, registerUser } from '../../actions/auth';
import { AUTH_ERROR_OCCURRED } from '../../constants/actions';

const initialState = { firstName: '', lastName: '', email: '', password: '' };

const Auth = () => {
  const errors = useSelector((state) => state.authErrorsReducer);
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGuest, setIsLoadingGuest] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();

  useEffect(() => {
    dispatch({ type: AUTH_ERROR_OCCURRED, payload: "" });
    return () => {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: "" });
    }
  }, [dispatch]);

  const switchMode = (e) => {
    setIsLoading(false);
    dispatch({ type: AUTH_ERROR_OCCURRED, payload: "" });
    const inputs = document.forms["auth_form"].getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmitGuestAccount = (e) => {
    e.preventDefault();
    setIsLoadingGuest(true);
    dispatch({ type: AUTH_ERROR_OCCURRED, payload: "" });
    dispatch(loginUser({ email: atob(process.env.REACT_APP_GUEST_EMAIL), password: atob(process.env.REACT_APP_GUEST_PASS) }, history, state));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch({ type: AUTH_ERROR_OCCURRED, payload: "" });
    if (isSignup) {
      dispatch(registerUser(form, history, state));
    } else {
      dispatch(loginUser(form, history, state));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-white dark:bg-gray-800 h-screen my-auto flex items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-gray-900">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Mock Stocks</h2>

          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">{isSignup ? "Create an account." : "Login to your account."}</p>

          <form onSubmit={handleSubmit} name="auth_form">
            {isSignup &&
              <>
                <div className="w-full mt-4">
                  <input className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required type="text" placeholder="First name" aria-label="First ame" name="firstName" onChange={handleChange} />
                </div>

                <div className="w-full mt-4">
                  <input className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required type="text" placeholder="Last name" aria-label="Last name" name="lastName" onChange={handleChange} />
                </div>
              </>
            }

            <div className="w-full mt-4">
              <input className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" required placeholder="Email Address" aria-label="Email Address" name="email" onChange={handleChange} />
            </div>

            <div className="w-full mt-4">
              <input className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" required placeholder="Password" aria-label="Password" name="password" onChange={handleChange} />
            </div>

            {errors &&
              <div className="mt-4 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-center w-12 bg-red-500 dark:bg-red-900">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                  </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                  <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-900">Error: <span className="text-sm text-red-600 dark:text-red-200">{errors}</span></span>
                  </div>
                </div>
              </div>
            }

            <div className="flex items-center justify-center mt-4">
              <button className="w-full px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 dark:bg-gray-500 rounded hover:bg-gray-600 focus:outline-none flex flex-row items-center justify-center" type="submit">
                {isLoading && !errors &&
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                }
                {isSignup ? "Create Account" : "Login"}
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with Guest Account</span>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div className="flex items-center justify-center mt-6">
            <form onSubmit={handleSubmitGuestAccount} className="w-full">
              <button type="submit"
                className="flex items-center justify-center w-full px-6 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                {isLoadingGuest && !errors &&
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                }
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden mx-2 sm:inline">Try with Guest Account</span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-300 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">{!isSignup ? "Don't have an account?" : "Already have an account?"} </span>

          <button onClick={switchMode} className="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">{!isSignup ? "Register" : "Login"}</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;