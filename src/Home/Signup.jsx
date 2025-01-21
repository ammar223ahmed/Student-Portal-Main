import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router';

const Signup = () => {

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
    <div className='signupParent'>
    <Header   OpenSidebar={OpenSidebar} />
    {/* <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> */}
    <div className='signup-main-parent'>
    <div className="form-container signUpContainer" >
      <form className="teacher-form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email"> Name</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter your Name ?"
            // value={teacher.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email ?"
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
            placeholder="Enter Password ?"
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
        <div className='add-teacher-btn-parent mt-8'>
          
        <button type="submit" className="add-teacher-submit-btn mt-8">
          Sign Up
        </button>
        </div>
       </form>
    </div>
    </div>
   </div>
  )
}

export default Signup
