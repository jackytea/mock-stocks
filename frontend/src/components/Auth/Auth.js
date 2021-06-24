import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginUser, registerUser } from '../../actions/auth';
import "./Auth.css";
import { AUTH, ERROR_OCCURRED } from '../../constants/actions';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const errors = useSelector((state) => state.errorsReducer);
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  
  useEffect(() => {
    dispatch({ type: ERROR_OCCURRED, payload: "" });
  }, [dispatch]);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <label>First Name
              <input name="firstName" onChange={handleChange} required autoFocus />
            </label>
            <label>Last Name
              <input name="lastName" onChange={handleChange} required />
            </label>
          </>
        )}
        <label>Email:
          <input name="email" onChange={handleChange} type="email" />
        </label>
        <label>Password:
          <input name="password" onChange={handleChange} type="password" />
        </label>
        <button type="submit">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>
        <button onClick={switchMode}>
          {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
        </button>
      </form>
      <div style={{ color: "red" }}>{errors}</div>
    </div>
  );
}

export default Auth;