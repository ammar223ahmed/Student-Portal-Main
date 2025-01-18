import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";
// import "./app.css";

const TeacherDetail = () => {
  const { teacherId } = useParams();

  // Mock Data
  const teacherData = {
    1: {
      name: "Ali Ahmed",
      email: "ali.ahmed@example.com",
      department: "Computer Science",
      courses: [
        {
          name: "Web Development",
          batch: "Batch 11",
          campus: "Gulshan Campus",
          days: "TTS",
          timing: "7 to 9",
          progress: "80%",
        },
      ],
    },
    2: {
      name: "Sara Khan",
      email: "sara.khan@example.com",
      department: "Mathematics",
      courses: [
        {
          name: "Algebra Basics",
          batch: "Batch 10",
          campus: "Main Campus",
          days: "MWF",
          timing: "10 to 12",
          progress: "50%",
        },
      ],
    },
  };

  const teacher = teacherData[teacherId];

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
                const OpenSidebar = () => {
                  setOpenSidebarToggle(!openSidebarToggle)
                }

  return (
    <div>
         <AdminHeader OpenSidebar={OpenSidebar}/>
         <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div className="teacher-detail-container">
      <h2 className="font-bold">Teacher Details</h2>
      <div className="teacher-card">
        <img
          src={`https://via.placeholder.com/150?text=${teacher.name.split(" ")[0]}`}
          alt={teacher.name}
          className="teacher-image"
        />
        <div className="teacher-info">
          <p><strong>Name:</strong> {teacher.name}</p>
          <p><strong>Email:</strong> {teacher.email}</p>
          <p><strong>Department:</strong> {teacher.department}</p>
        </div>
      </div>
      <h3 className="font-bold">Courses Taught</h3>
      <div className="course-list">
        {teacher.courses.map((course, index) => (
          <div key={index} className="course-card">
            <p><strong>Course:</strong> {course.name}</p>
            <p><strong>Batch:</strong> {course.batch}</p>
            <p><strong>Campus:</strong> {course.campus}</p>
            <p><strong>Days:</strong> {course.days}</p>
            <p><strong>Timing:</strong> {course.timing}</p>
            <p><strong>Progress:</strong> {course.progress}</p>
          </div>
        ))}
      </div>
      <Link to="/teacherlist" className="back-btn">
        Back to Teacher List
      </Link>
    </div>
    </div>
  );
};

export default TeacherDetail;
