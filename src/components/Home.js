import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className='left-side'></div>
      <div className='right-side'>
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={handleLogout} className='btn'>Logout</button>
    </div>
    </div>
    </div>
  );
};

export default Home;
