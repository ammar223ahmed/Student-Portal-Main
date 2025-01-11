import React, { useState } from "react";
import TeacherHeader from "./TeacherHeader";
import TeacherSidebar from "./TeacherSidebar";


const TotalAssignmentsPage = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
            const OpenSidebar = () => {
              setOpenSidebarToggle(!openSidebarToggle)
            }

  const assignments = [
    { id: 1, name : "Ahmed",  title: "Todo App", course: "Web and App Development", deadline: "20th January", status: "Pending" },
    { id: 2, name : "Raza",  title: "Olx Clone", course: "Web and App Development", deadline: "22nd January", status: "Completed" },
    { id: 3, name : "Hassan",  title: "Etsy Landing Page", course: "Web and App Development", deadline: "25th January", status: "In Progress" },
    { id: 4, name : "Muneeb",  title: "Todo App", course: "Web and App Development", deadline: "28th January", status: "Pending" },
    { id: 5, name : "Suhab",  title: "Javascript Functions", course: "Web and App Development", deadline: "30th January", status: "Completed" },
  ];

  return (
    <div>
         <TeacherHeader OpenSidebar={OpenSidebar}/>
         <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
   <div className="Assignments-List-Page">
    <div className="assignments-list-page">
      <h2>Students Assignments</h2>
      <ul className="assignments-list">
        {assignments.map((assignment) => (
          <li key={assignment.id} className="assignment-item">
            <div className="assignment-details">
                <h2>Name : {assignment.name}</h2>
              <h3>{assignment.title}</h3>
              <p>Course: {assignment.course}</p>
              <p>Deadline: {assignment.deadline}</p>
            </div>
            <span className={`assignment-status ${assignment.status.toLowerCase().replace(" ", "-")}`}>
              {assignment.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default TotalAssignmentsPage;
