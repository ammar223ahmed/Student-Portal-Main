import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Login = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    const { email, password } = credentials; // Get entered email and password
  
    // Authentication Logic
    if (email === 'student123@gmail.com' && password === 'student123') {
      localStorage.setItem('userRole', 'student'); // Save user role in localStorage
      navigate('/student'); // Redirect to Student page
    } else if (email === 'teacher123@gmail.com' && password === 'teacher123') {
      localStorage.setItem('userRole', 'teacher'); // Save user role in localStorage
      navigate('/teacherdashboard'); // Redirect to Teacher page
    } else if (email === 'admin123@gmail.com' && password === 'admin123') {
      localStorage.setItem('userRole', 'admin'); // Save user role in localStorage
      navigate('/Admin'); // Redirect to Admin page
    } else {
      alert('Invalid credentials!'); // Show error if no match
    }
  
    // Clear form after submission
    setCredentials({ email: '', password: '' });
  };

  return (
    <div>
      <Header OpenSidebar={OpenSidebar} />
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> */}
      <div className="form-container">
        <br />
        <br />
        <form className="login-form" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter email"
      value={credentials.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter Password"
      value={credentials.password}
      onChange={handleChange}
      required
    />
  </div>
  {/* <button type="submit" className="submit-btn">
    Login
  </button> */}
  <br /><br />
  <div className="add-teacher-btn-parent">
            <button type="submit" className="add-teacher-submit-btn">
              Login
            </button>
          </div>
</form>
      </div>
    </div>
  );
};

export default Login;
