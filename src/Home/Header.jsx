import React, { useState } from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Header({ OpenSidebar }) {
  const [user, setUser] = useState(localStorage.getItem('userRole')); // Manage user state
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header header-home">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left flex">
        <h2 className="text-white mt-4">SMIT MANAGEMENT SYSTEM</h2>
      </div>
      <div className="header-right flex gap-2">
        {user ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/signup" className="signup-btn">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
