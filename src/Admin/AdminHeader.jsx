import React, { useState, useEffect } from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function AdminHeader({ OpenSidebar }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Sync user state with localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userRole');
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Clear user role from localStorage
    setUser(null); // Update state to null
    navigate('/'); // Redirect to the home page
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left flex">
        <h2 className='admin-header-heading'>SMIT MANAGEMENT SYSTEM</h2>
      </div>
      <div className="header-right flex gap-2">
        {user === 'admin' ? (
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

export default AdminHeader;
