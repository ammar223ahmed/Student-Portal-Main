


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";


const Studentlist = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
              const OpenSidebar = () => {
                setOpenSidebarToggle(!openSidebarToggle)
              }

  // Mock Data for Students
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      name: "Ali Khan",
      course: "JavaScript",
      batch: "11",
      teacher: "John Smith",
      email: "ali.khan@example.com",
      rollNum: "JS-001",
      enrolled: true,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      course: "ReactJS",
      batch: "12",
      teacher: "Emily Brown",
      email: "sara.ahmed@example.com",
      rollNum: "RJ-002",
      enrolled: true,
    },
    {
      id: 3,
      name: "John Doe",
      course: "JavaScript",
      batch: "12",
      teacher: "John Smith",
      email: "john.doe@example.com",
      rollNum: "JS-003",
      enrolled: true,
    },
  ]);

  const [course, setCourse] = useState(""); // Selected course
  const [batch, setBatch] = useState(""); // Selected batch
  const navigate = useNavigate();

  // Handle Filter Change
  const handleCourseChange = (e) => setCourse(e.target.value);
  const handleBatchChange = (e) => setBatch(e.target.value);

  // Remove Student
  const removeStudent = (id) => {
    setStudentData(studentData.filter((student) => student.id !== id));
  };

  // Filter Students Based on Selected Course and Batch
  const filteredStudents = studentData.filter((student) => {
    const matchesCourse = course ? student.course === course : true;
    const matchesBatch = batch ? student.batch === batch : true;
    return matchesCourse && matchesBatch;
  });

  return (
    <div>
   <AdminHeader OpenSidebar={OpenSidebar}/>
   <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
   <div className="Adimnstudent-parent">
    <div className="admin-container">
      <h1 className="admin-title">Student Management</h1>

      {/* Filters Section */}
      <div className="filters">
        <select
          className="filter-dropdown"
          value={course}
          onChange={handleCourseChange}
        >
          <option value="">Select Course</option>
          <option value="JavaScript">JavaScript</option>
          <option value="ReactJS">ReactJS</option>
        </select>

        <select
          className="filter-dropdown"
          value={batch}
          onChange={handleBatchChange}
        >
          <option value="">Select Batch</option>
          <option value="11">Batch 11</option>
          <option value="12">Batch 12</option>
        </select>
      </div>

      {/* Student Table */}
      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Enrolled</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.batch}</td>
                  <td>{student.enrolled ? "Yes" : "No"}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate(`/student/${student.id}`, { state: student })
                      }
                      className="view-btn"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => removeStudent(student.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Studentlist;
