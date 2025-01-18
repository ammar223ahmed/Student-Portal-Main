import React, { useState } from 'react';
import AdminHeader from '../Admin/AdminHeader';
import AdminSidebar from '../Admin/AdminSidebar';

const AddBatchForm = () => {


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
      <label>In Progress:</label>
      <input
        type="text"
        name="Progress"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="In Progress"
        required
      />
      </div>
      <br />

      <div className='parent-input-labels'>    
      <label>Batch:</label>
      <input
        type="number"
        name="instructor"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Batch"
        required
      />
      </div>
     <br />
      <div className='parent-input-labels'>    
      <label>Total Teachers:</label>
      <input
        type="number"
        name="instructor"
        // value={formData.instructor}
        // onChange={handleChange}
        placeholder="Teachers"
        required
      />
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Total Section:</label>
      <input
        type="text"
        name="duration"
        // value={formData.duration}
        // onChange={handleChange}
        placeholder="Duration"
        required
      />
      </div>
      <br />
     
      <br />
       <div className='add-course-btn-parent'>
      <button type="submit" className='add-course-submit'>Add Batch</button>
      </div>
    </form>
    </div>
    </div>
    </div>

  );
};

export default AddBatchForm;
