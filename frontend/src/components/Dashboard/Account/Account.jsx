import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUserName, removeUserAccount } from '../../../actions/auth';
import { USER_ERROR_OCCURRED } from "../../../constants/actions";

const initialState = { firstName: '', lastName: '' };

const Account = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialState);
  const errors = useSelector((state) => state.userErrorsReducer);
  const { user } = props;

  useEffect(() => {
    dispatch({ type: USER_ERROR_OCCURRED, payload: "" });
    return () => {
      dispatch({ type: USER_ERROR_OCCURRED, payload: "" });
    }
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: USER_ERROR_OCCURRED, payload: "" });
    dispatch(updateUserName(form, history));
  };

  const handleSubmitRemoveAccount = (e) => {
    e.preventDefault();
    dispatch({ type: USER_ERROR_OCCURRED, payload: "" });
    const confirmAccountRemoval = window.confirm("[WARNING] Are you sure you want to remove this account? This action cannot be undone!");
    if (confirmAccountRemoval) {
      dispatch(removeUserAccount(history));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-white dark:bg-gray-900 pt-6">
      <div className="container flex flex-col justify-center">
        <section className="w-full p-6 mx-auto bg-white dark:bg-gray-900 divide divide-y">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-gray-200">Change Name</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="firstName">First Name</label>
                <input onChange={handleChange} required id="firstName" type="text" name="firstName" placeholder={String(user?.result.name).split(" ")[0]} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="lastName">Last Name</label>
                <input onChange={handleChange} required id="lastName" type="text" name="lastName" placeholder={String(user?.result.name).split(" ")[1]} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
              </div>
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

            <div className="flex  mt-6">
              <button type="submit" className="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Name</button>
            </div>
          </form>
        </section>
        <section className="p-6 mx-auto bg-white dark:bg-gray-900 divide divide-y w-full">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-gray-200">Account Management</h2>
          <form onSubmit={handleSubmitRemoveAccount}>
            <div className="flex flex-col mt-6">
              <button type="submit" className="w-full px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete Account</button>
              <button disabled className="cursor-not-allowed disabled:opacity-50 mt-2 w-full px-6 py-2 leading-5 text-gray-200 transition-colors duration-200 transform bg-red-900 rounded-md hover:bg-red-900 focus:outline-none focus:bg-red-600">Archive Account</button>

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
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Account;

