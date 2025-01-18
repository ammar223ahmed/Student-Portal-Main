import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";


const StudentDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state;

  if (!student) {
    return (
      <div className="admin-container">
        <h1 className="admin-title">Student Not Found</h1>
        <button onClick={() => navigate(-1)} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
                const OpenSidebar = () => {
                  setOpenSidebarToggle(!openSidebarToggle)
                }

  return (
    <div>
    <AdminHeader OpenSidebar={OpenSidebar}/>
    <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  <br /> <br />
  
    <div className="student-detail-parent">
      <h1 className="admin-title">Student Details</h1>
      <div className="student-details">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Roll Number:</strong> {student.rollNum}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Batch:</strong> {student.batch}</p>
        <p><strong>Teacher:</strong> {student.teacher}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-btn">
        Back to List
      </button>
    </div> 
    </div>
  );
};

export default StudentDetailPage;
