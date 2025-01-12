import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


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

  return (
    <div className="admin-container">
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
  );
};

export default StudentDetailPage;
