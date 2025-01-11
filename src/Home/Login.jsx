import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Login = () => {

     const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
   
      const [teacher, setTeacher] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        experience: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacher({ ...teacher, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Teacher Details:", teacher);
        alert("Teacher Added Successfully!");
        setTeacher({
          name: "",
          email: "",
          phone: "",
          subject: "",
          experience: "",
        });
      }; 

  return (
    <div>
     <Header   OpenSidebar={OpenSidebar} />
     <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
     <div>
    {/* <h1>login</h1> */}
    <div className="form-container">
      <br /><br /><br />
      {/* <h2 className="form-title">Add New Teacher</h2> */}
      <form className="teacher-form" onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter full name"
            // value={teacher.name}
            // onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            // value={teacher.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            // value={teacher.phone}
            // onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>    
      <label>Category:</label>
      <select name="category"  required>
        <option value="">Select Category</option>
        <option >Student</option>
        <option >Teacher</option>
        <option >Admin</option>
      </select>
      </div>
        {/* <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject specialization"
            // value={teacher.subject}
            // onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="experience">CNIC (NUM)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Enter a CNIC Number"
            // value={teacher.experience}
            // onChange={handleChange}
            required
          />
        </div>
        <div className='add-teacher-btn-parent'>
        <button type="submit" className="add-teacher-submit-btn">
          Login
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Login
