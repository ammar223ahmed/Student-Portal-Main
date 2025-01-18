// // import React, { useState } from "react";
// // import { useNavigate, useParams } from "react-router";
// import AdminHeader from "../Admin/AdminHeader";
// import AdminSidebar from "../Admin/AdminSidebar";
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';


// const BatchList = () => {

//   const { courseId } = useParams();

//   const batches = [
//     { id: 1, name: "Batch 1", startDate: "2023-01-01" },
//     { id: 2, name: "Batch 2", startDate: "2023-02-01" },
//     { id: 3, name: "Batch 3", startDate: "2023-03-01" },
//   ];

//     const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
//         const OpenSidebar = () => {
//           setOpenSidebarToggle(!openSidebarToggle)
//         }

//   // const { courseId } = useParams();
//   // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   // const navigate = useNavigate();

//   // const OpenSidebar = () => {
//   //   setOpenSidebarToggle(!openSidebarToggle);
//   // };

//   // const courses = [
//   //   { id: "1", name: "React Basics" },
//   //   { id: "2", name: "JavaScript Essentials" },
//   // ];

//   // const batches = [
//   //   { id: 1, name: "Batch 1", startDate: "2023-01-01", endDate: "2023-06-01", status: "Ongoing" },
//   //   { id: 2, name: "Batch 2", startDate: "2023-07-01", endDate: "2023-12-01", status: "Upcoming" },
//   //   { id: 3, name: "Batch 3", startDate: "2024-01-01", endDate: "2024-06-01", status: "Upcoming" },
//   // ];

//   // const course = courses.find((c) => c.id === courseId);

//   // const handleBatchClick = (batchId) => {
//   //   navigate(`/course/${courseId}/batch/${batchId}/sections`);
//   // };

//   return (
//     <div>
//       <AdminHeader OpenSidebar={OpenSidebar} />
//       <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       <div className="batch-list-container">
//       <div className="batch-list">
//       <h2>Batches for Course {courseId}</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Batch Name</th>
//             <th>Start Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {batches.map((batch) => (
//             <tr key={batch.id}>
//               <td>{batch.name}</td>
//               <td>{batch.startDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
     
//         {/* <h2 className="course-title">{course ? course.name : "Course Not Found"}</h2>
//         <table className="batch-table">
//           <thead>
//             <tr>
//               <th>Batch Name</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {batches.map((batch) => (
//               <tr key={batch.id}>
//                 <td>{batch.name}</td>
//                 <td>{batch.startDate}</td>
//                 <td>{batch.endDate}</td>
//                 <td>{batch.status}</td>
//                 <td>
//                   <button
//                     className="view-sections-btn"
//                     onClick={() => handleBatchClick(batch.id)}
//                   >
//                     View Sections
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table> */}
//       </div>
//     </div>
//   );
// };

// export default BatchList;



// import { Link } from "react-router";
// import AdminHeader from "../Admin/AdminHeader";
// import AdminSidebar from "../Admin/AdminSidebar";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const BatchList = () => {
//   const { courseId } = useParams();

//   // Example data
//   const batches = [
//     {
//       id: 1,
//       name: "Batch 11",
//       progress: "End",
//       totalTeachers: 3,
//       totalSections: 5,
//     },
//     {
//       id: 2,
//       name: "Batch 13",
//       progress: "Started",
//       totalTeachers: 3,
//       totalSections: 6,
//     },
//   ];

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <div>
//       <AdminHeader OpenSidebar={OpenSidebar} />
//       <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//       <div className="batch-list-container">
        
//         <br />
//         <div className='addcource-btn-parent'>
//        <Link to='/addbatch' className='add-course'>Add New Course ↓</Link>
//          </div>     
//          <br />
//         <table className="batch-table">
//           <thead>
//             <tr>
//               <th>Batch</th>
//               <th>In Progress</th>
//               <th>Total Teachers</th>
//               <th>Total Sections</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {batches.map((batch) => (
//               <tr key={batch.id}>
//                 <td>{batch.name}</td>
//                 <td>{batch.progress}</td>
//                 <td>{batch.totalTeachers}</td>
//                 <td>{batch.totalSections}</td>
//                 <td>
//                   <button className="view-btn">View Sections</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BatchList;


import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";
import { Link } from "react-router";

const BatchList = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const batches = [
    { id: 1, name: "Batch 11", progress: "End", totalTeachers: 3, totalSections: 5 },
    { id: 2, name: "Batch 13", progress: "Started", totalTeachers: 3, totalSections: 6 },
  ];

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleViewSections = (batchId) => {
    navigate(`/course/${courseId}/batch/${batchId}/sections`);
  };

  return (
    <div>
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      
       
      <div className="batch-list-container">
       <br /> 
      <div className='addcource-btn-parent'>
      <Link to='/addbatch' className='add-course'>Add New Batch ↓</Link>
       </div>  
       <br />
        {/* <h2>Batches for Course {courseId}</h2> */}
        <table className="batch-table">
          <thead>
            <tr>
              <th>Batch</th>
              <th>In Progress</th>
              <th>Total Teachers</th>
              <th>Total Sections</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.id}>
                <td>{batch.name}</td>
                <td>{batch.progress}</td>
                <td>{batch.totalTeachers}</td>
                <td>{batch.totalSections}</td>
                <td>
                  <button className="view-btn" onClick={() => handleViewSections(batch.id)}>
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
