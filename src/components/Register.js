import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Prevent logged-in users from accessing the register page
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/home'); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Check if the email is already registered
    const existingUser = users.find((user) => user.email === email);
    
    if (existingUser) {
      alert('This email is already registered. Please use a different email.');
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="container">
      <div className='left-side'></div>
    <div className='right-side'>
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
        
      </form>
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
      Already have an account? <a href="/login">Login</a>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default Register;
