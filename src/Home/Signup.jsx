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
     
    <form className="max-w-md mx-auto form-container -mt-9">
      <h1 className='sign-up-headingg'>Sign Up</h1>
     <br />
      <div className='sign-up-parent'>
  <div className="relative z-0 w-full mb-5 group  signup-input-parent">
      
    <input
      type="email"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-md text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email address
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group signup-input-parent">
    <input
      type="password"
      name="floating_password"
      id="floating_password"
      className="block py-2.5 px-0 w-md text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Password
    </label>
  </div>
    <div className="relative z-0 w-full mb-5 group signup-input-parent">
      <input
        type="text"
        name="floating_first_name"
        id="floating_first_name"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
      />
      <label
        htmlFor="floating_first_name"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
      Full Name
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group signup-input-parent">
      <input
        type="number"
        // name="floating_phone"
        // id="floating_phone"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Enter Your CNIC"
        required=""
      />
    

<div className='signUp-category'>    
      <label >Category:</label>
      <select name="category"  required>
        <option value="Select Category">Select Category</option>
        <option >Student</option>
        <option >Teacher</option>
        <option >Admin</option>
      </select>
      </div>

  </div>
 
  
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Sign Up
  </button>
</div>

</form>
<br /><br />
    </div>
    <br /><br />
   </div>
  )
}

export default Signup
