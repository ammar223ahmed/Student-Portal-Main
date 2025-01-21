import React, { useState } from 'react';
import AdminHeader from '../Admin/AdminHeader';
import AdminSidebar from '../Admin/AdminSidebar';

const AddSectionForm = () => {


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
      <label>Campus:</label>
      <input
        type="text"
        name="Progress"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Add Campus"
        required
      />
      </div>
      <br />

      <div className='parent-input-labels'>    
      <label>Days:</label>
      <input
        type="text"
        name="days"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Add Days"
        required
      />
      </div>
     <br />
      <div className='parent-input-labels'>    
      <label>Teachers Name:</label>
      <input
        type="text"
        name="instructor name"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Add Teachers Name"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Max Students:</label>
      <input
        type="number"
        name="max students"
        // value={formData.duration}
        // onChange={handleChange}
        placeholder="Add Max Students"
        required
      />
      </div>
      <br />
     
      <br />
       <div className='add-course-btn-parent'>
      <button type="submit" className='add-course-submit'>Add Section</button>
      </div>
    </form>
    </div>
    </div>
    </div>

  );
};

export default AddSectionForm;
