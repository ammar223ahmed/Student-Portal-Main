import React, { useState } from 'react';
import AdminHeader from '../Admin/AdminHeader';
import AdminSidebar from '../Admin/AdminSidebar';

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    courseTitle: '',
    courseCode: '',
    courseDescription: '',
    category: '',
    instructor: '',
    instructorEmail: '',
    duration: '',
    startDate: '',
    endDate: '',
    fee: '',
    modeOfLearning: '',
    level: '',
    prerequisites: '',
    courseMaterials: null,
    courseImage: null,
  });

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
      <br />
      <div className='parent-input-labels '>    
      <label>Course Title:</label>
      <input
        type="text"
        name="courseTitle"
        value={formData.courseTitle}
        onChange={handleChange}
        placeholder="Course Title"
        required
      />
      </div>
      <br />
      
     
      <div className='parent-input-labels'>    
      <label>Course Description:</label>
      <textarea
        name="courseDescription"
        value={formData.courseDescription}
        onChange={handleChange}
        placeholder="Course Description"
        required
      ></textarea>
      </div>
      <br />
      <div className='parent-input-labels'>    
      <label>Course Thumbnail:</label>
      <input
        type="file"
        name="courseImage"
        onChange={handleChange}
        accept="image/*"
      />
      </div>
      <br />
       <div className='add-course-btn-parent'>
      <button type="submit" className='add-course-submit'>Add Course</button>
      </div>
    </form>
    </div>
    </div>
    </div>

  );
};

export default AddCourseForm;
