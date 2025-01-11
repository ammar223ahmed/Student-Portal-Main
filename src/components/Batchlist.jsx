import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";


const BatchList = () => {
  const { courseId } = useParams();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const courses = [
    { id: "1", name: "React Basics" },
    { id: "2", name: "JavaScript Essentials" },
  ];

  const batches = [
    { id: 1, name: "Batch 1", startDate: "2023-01-01", endDate: "2023-06-01", status: "Ongoing" },
    { id: 2, name: "Batch 2", startDate: "2023-07-01", endDate: "2023-12-01", status: "Upcoming" },
    { id: 3, name: "Batch 3", startDate: "2024-01-01", endDate: "2024-06-01", status: "Upcoming" },
  ];

  const course = courses.find((c) => c.id === courseId);

  const handleBatchClick = (batchId) => {
    navigate(`/course/${courseId}/batch/${batchId}/sections`);
  };

  return (
    <div>
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="batch-list-container">
        <h2 className="course-title">{course ? course.name : "Course Not Found"}</h2>
        <table className="batch-table">
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.id}>
                <td>{batch.name}</td>
                <td>{batch.startDate}</td>
                <td>{batch.endDate}</td>
                <td>{batch.status}</td>
                <td>
                  <button
                    className="view-sections-btn"
                    onClick={() => handleBatchClick(batch.id)}
                  >
                    View Sections
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchList;
