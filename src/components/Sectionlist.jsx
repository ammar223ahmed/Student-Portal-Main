import React, { useState } from "react";
import { useParams } from "react-router";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";


const SectionList = () => {
  const { courseId, batchId } = useParams();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const sections = [
    { id: 1, title: "GULSHAN CAMPUS", description: "TTS 7 T0 9 Sir Bilal Raza", totalStudent : "120"},
    { id: 2, title: "Setup Environment", description: "MWF 5 TO 7" },
    { id: 3, title: "Basics", description: "Learning the core basics." },
  ];

  return (
    <div>
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <h2 className="batch-title">Sections for Batch {batchId}</h2>
      <div className="section-list-container">
        <div className="section-cards">
          {sections.map((section) => (
            <div key={section.id} className="section-card">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>
              <h3 className="section-description">Total Student: {section.totalStudent}</h3>
              <button className="action-btn">Start Section</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionList;
