// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Login = () => {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({ email: '', password: '' });

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload on form submission
  
//     const { email, password } = credentials; // Get entered email and password
  
//     // Authentication Logic
//     if (email === 'student123@gmail.com' && password === 'student123') {
//       localStorage.setItem('userRole', 'student'); // Save user role in localStorage
//       navigate('/student'); // Redirect to Student page
//     } else if (email === 'teacher123@gmail.com' && password === 'teacher123') {
//       localStorage.setItem('userRole', 'teacher'); // Save user role in localStorage
//       navigate('/teacherdashboard'); // Redirect to Teacher page
//     } else if (email === 'admin123@gmail.com' && password === 'admin123') {
//       localStorage.setItem('userRole', 'admin'); // Save user role in localStorage
//       navigate('/Admin'); // Redirect to Admin page
//     } else {
//       alert('Invalid credentials!'); // Show error if no match
//     }
  
//     // Clear form after submission
//     setCredentials({ email: '', password: '' });
//   };

//   return (
//     <div>
//       <Header OpenSidebar={OpenSidebar} />
//       {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> */}
//       <div className="form-container">
//         <br />
//         <br />
//         <form className="login-form" onSubmit={handleSubmit}>
//   <div className="form-group">
//     <label htmlFor="email">Email</label>
//     <input
//       type="email"
//       id="email"
//       name="email"
//       placeholder="Enter email"
//       value={credentials.email}
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div className="form-group">
//     <label htmlFor="password">Password</label>
//     <input
//       type="password"
//       id="password"
//       name="password"
//       placeholder="Enter Password"
//       value={credentials.password}
//       onChange={handleChange}
//       required
//     />
//   </div>
//   {/* <button type="submit" className="submit-btn">
//     Login
//   </button> */}
//   <br /><br />
//   <div className="add-teacher-btn-parent">
//             <button type="submit" className="add-teacher-submit-btn">
//               Login
//             </button>
//           </div>
// </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

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
    e.preventDefault();

    const { email, password } = credentials;

    if (email === 'student123@gmail.com' && password === 'student123') {
      localStorage.setItem('userRole', 'student');
      navigate('/student');
    } else if (email === 'teacher123@gmail.com' && password === 'teacher123') {
      localStorage.setItem('userRole', 'teacher');
      navigate('/teacherdashboard');
    } else if (email === 'admin123@gmail.com' && password === 'admin123') {
      localStorage.setItem('userRole', 'admin');
      navigate('/Admin');
    } else {
      alert('Invalid credentials!');
    }

    setCredentials({ email: '', password: '' });
  };

  return (
    <div>
      <Header OpenSidebar={OpenSidebar} />
      <div className='form-container-parent-login'>
      <div className="form-container max-w-sm mx-auto">
        <br />
        <br />
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <h1 className='login-heading'>Login</h1>
            <br />
          <div className="mb-5 login-inp-lab">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              // placeholder="name@smit.com"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5 login-inp-lab">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='login-btn-parent'>
          <button
            type="submit"
            className="Login-btn"
            >
            Login
          </button>
            </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
