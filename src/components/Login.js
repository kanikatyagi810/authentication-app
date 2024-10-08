import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   // Prevent logged-in users from accessing the login page
   useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home'); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className='left-side'></div>
    <div className='right-side'>
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div style={{ paddingTop: '30px', textAlign: 'center' }}>
      Do not have an account? <a href="/register">Register</a>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
