import React, { useState } from 'react';
import AdminHeader from '../Admin/AdminHeader';
import AdminSidebar from '../Admin/AdminSidebar';

const AddTeacherForm = () => {


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

     const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
        const OpenSidebar = () => {
          setOpenSidebarToggle(!openSidebarToggle)
        }
    

  return (
    <div>
       <AdminHeader OpenSidebar={OpenSidebar}/>
    <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <div className='add-container-parent'>
    <div className='add-container'>
      <br /><br />
    <form onSubmit={handleSubmit} className='addcourcefrom'>
      <br /> <br />
      <br /><br />
      
      
      <div className='parent-input-labels'>    
      <label>Teacher Name:</label>
      <input
        type="text"
        name="Teacher"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Enter Teacher Name"
        required
      />
      </div>
      <br />

      <div className='parent-input-labels'>    
      <label>Teacher Email:</label>
      <input
        type="email"
        name="teacher email"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Enter Teacher Email"
        required
      />
      </div>
     <br />
      <div className='parent-input-labels'>    
      <label>Teacher Department:</label>
      <input
        type="text"
        name="Department"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Enter Teacher Department"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Teacher ID:</label>
      <input
        type="number"
        name="teacher id"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Enter Teacher Id"
        required
      />
      </div>
      <br />
     
      <br />
       <div className='add-course-btn-parent'>
      <button type="submit" className='add-course-submit'>Add Teacher</button>
      </div>
    </form>
    </div>
    </div>
    </div>

  );
};

export default AddTeacherForm;
