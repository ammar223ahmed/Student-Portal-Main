// import React, { useState } from "react";
// import TeacherHeader from "./TeacherHeader";
// import TeacherSidebar from "./TeacherSidebar";


// const TotalAssignmentsPage = () => {

//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
//             const OpenSidebar = () => {
//               setOpenSidebarToggle(!openSidebarToggle)
//             }

//   const assignments = [
//     { id: 1, name : "Ahmed",  title: "Todo App", course: "Web and App Development", deadline: "20th January", status: "Pending" },
//     { id: 2, name : "Raza",  title: "Olx Clone", course: "Web and App Development", deadline: "22nd January", status: "Completed" },
//     { id: 3, name : "Hassan",  title: "Etsy Landing Page", course: "Web and App Development", deadline: "25th January", status: "In Progress" },
//     { id: 4, name : "Muneeb",  title: "Todo App", course: "Web and App Development", deadline: "28th January", status: "Pending" },
//     { id: 5, name : "Suhab",  title: "Javascript Functions", course: "Web and App Development", deadline: "30th January", status: "Completed" },
//   ];

//   return (
//     <div>
//          <TeacherHeader OpenSidebar={OpenSidebar}/>
//          <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//    <div className="Assignments-List-Page">
//     <div className="assignments-list-page">
//       <h2>Students Assignments</h2>
//       <ul className="assignments-list">
//         {assignments.map((assignment) => (
//           <li key={assignment.id} className="assignment-item">
//             <div className="assignment-details">
//                 <h2>Name : {assignment.name}</h2>
//               <h3>{assignment.title}</h3>
//               <p>Course: {assignment.course}</p>
//               <p>Deadline: {assignment.deadline}</p>
//             </div>
//             <span className={`assignment-status ${assignment.status.toLowerCase().replace(" ", "-")}`}>
//               {assignment.status}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default TotalAssignmentsPage;

import React, { useState } from "react";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";

const TotalAssignmentsPage = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const assignments = [
    { id: 1, name: "Ahmed", title: "Todo App", course: "Web and App Development", deadline: "20th January", status: "Pending" },
    { id: 2, name: "Raza", title: "Olx Clone", course: "Web and App Development", deadline: "22nd January", status: "Completed" },
    { id: 3, name: "Hassan", title: "Etsy Landing Page", course: "Web and App Development", deadline: "25th January", status: "In Progress" },
    { id: 4, name: "Muneeb", title: "Todo App", course: "Web and App Development", deadline: "28th January", status: "Pending" },
    { id: 5, name: "Suhab", title: "Javascript Functions", course: "Web and App Development", deadline: "30th January", status: "Completed" },
  ];

  // Filter assignments based on the selected status
  const filteredAssignments = assignments.filter((assignment) => 
    filterStatus === "All" || assignment.status === filterStatus
  );

  return (
    <div>
      <TeacherHeader OpenSidebar={OpenSidebar} />
      <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <div className="Assignments-List-Page">
        <div className="assignments-list-page">
          <h2>Students Assignments</h2>

          {/* Filter Dropdown */}
          <div className="filter-section">
            <label htmlFor="filter">Filter by Status:</label>
            <select
              id="filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
          <br /><br />

          <ul className="assignments-list">
            {filteredAssignments.length > 0 ? (
              filteredAssignments.map((assignment) => (
                <li key={assignment.id} className="assignment-item">
                  <div className="assignment-details">
                    <h2>Name: {assignment.name}</h2>
                    <h3>{assignment.title}</h3>
                    <p>Course: {assignment.course}</p>
                    <p>Deadline: {assignment.deadline}</p>
                  </div>
                  <span
                    className={`assignment-status ${assignment.status.toLowerCase().replace(" ", "-")}`}
                  >
                    {assignment.status}
                  </span>
                </li>
              ))
            ) : (
              <p>No assignments found for the selected status.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TotalAssignmentsPage;
