// import React, { useState } from 'react';
// import { Link } from 'react-router';
// import { FaCloudUploadAlt } from "react-icons/fa"; // You can use this for "Add New" button icon
// import AdminHeader from '../Admin/AdminHeader';
// import AdminSidebar from '../Admin/AdminSidebar';

// const TeacherList = () => {
//   const teachers = [
//     {
//       teacherName: "John Doe",
//       department: "Computer Science",
//       teacherID: "T001",
//     },
//     {
//       teacherName: "Jane Smith",
//       department: "Data Science",
//       teacherID: "T002",
//     },
//     {
//       teacherName: "Emily Johnson",
//       department: "AI and ML",
//       teacherID: "T003",
//     },
//     {
//       teacherName: "Michael Brown",
//       department: "Backend Development",
//       teacherID: "T004",
//     },
//     {
//       teacherName: "Sarah Lee",
//       department: "Frontend Development",
//       teacherID: "T005",
//     },
//     {
//       teacherName: "David Wilson",
//       department: "Cloud Computing",
//       teacherID: "T006",
//     },
//     {
//       teacherName: "Laura Taylor",
//       department: "Full Stack Development",
//       teacherID: "T007",
//     },
//     {
//       teacherName: "Mark Harris",
//       department: "Digital Marketing",
//       teacherID: "T008",
//     },
//     {
//       teacherName: "Sophia Clark",
//       department: "Machine Learning",
//       teacherID: "T009",
//     },
//     {
//       teacherName: "James Lewis",
//       department: "Web Development",
//       teacherID: "T010",
//     }
//   ];

    
//        const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
//         const OpenSidebar = () => {
//           setOpenSidebarToggle(!openSidebarToggle)
//         }

//   return (
//     <div>
//     <AdminHeader OpenSidebar={OpenSidebar}/>
//     <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//     <div className='Teachers'>
//       <div className='table-parent'>
//         <br /><br />

//         {/* Table to display teacher data */}
//         <table className='table-chart-teacher' border="1" cellPadding="5" style={{ marginTop: '20px' }}>
//           <thead>
//             <tr>
//               <th className='heading'>Teacher Name</th>
//               <th className='heading'>Department</th>
//               <th className='heading'>Teacher ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {teachers.map((teacher, index) => (
//               <tr key={index}>
//                 <td>{teacher.teacherName}</td>
//                 <td>{teacher.department}</td>
//                 <td>{teacher.teacherID}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className='addteacher-btn-parent'>
//           <Link to='/addteacher' className='add-teacher'>Add New Teacher ⇪</Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default TeacherList;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";
// import "./app.css";

const TeacherList = () => {
  const navigate = useNavigate();

  // Mock Data
  const teachers = [
    { id: 1, name: "Ali Ahmed", department: "Computer Science" },
    { id: 2, name: "Sara Khan", department: "Mathematics" },
    { id: 3, name: "Bilal Raza", department: "Physics" },
  ];

  const handleViewDetails = (teacherId) => {
    navigate(`/teacher/${teacherId}`);
  };


     const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
                const OpenSidebar = () => {
                  setOpenSidebarToggle(!openSidebarToggle)
                }

  return (
    <div>
    <AdminHeader OpenSidebar={OpenSidebar}/>
    <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <br />
    <br /><br />
    <div className="teacher-list-container">
      <h2 className="font-bold">Teacher List</h2>
      <div className='addcource-btn-parent'>
       <Link to='/addteacher' className='add-course'>Add New Teacher ↓</Link>
         </div>   
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Teacher ID</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.name}</td>
              <td>{teacher.id}</td>
              <td>{teacher.department}</td>
              <td>
                <button
                  className="view-details-btn"
                  onClick={() => handleViewDetails(teacher.id)}
                >
                  View Details
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

export default TeacherList;
