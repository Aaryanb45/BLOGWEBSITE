import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('User Data:', userData);
    setIsLoggedIn(true);
    navigate('/home');
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Login</h2>
        <form className="form login__form" onSubmit={submitHandler}>
          <p className="form__error-message">This is an error</p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">Login</button>
        </form>
        <small>
          Don't have an account? <Link to="/register">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
