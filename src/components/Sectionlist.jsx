// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// // import "./app.css"; // Ensure you style the SectionPage here
// import { Link } from "react-router";
// import AdminHeader from "../Admin/AdminHeader";
// import AdminSidebar from "../Admin/AdminSidebar";

// const SectionPage = () => {
//   const { batchId } = useParams();

//   const sections = [
//     { id: 1, campus: "Gulshan Campus", days: "TTS", timing: "7 to 9", teacher: "Bilal Raza",  totalStudents: "150"},
//     { id: 2, campus: "Badarabad Campus", days: "MWF", timing: "5 to 7", teacher: "Ali Ahmed",  totalStudents: "120"},
//   ];

//    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
//     const OpenSidebar = () => {
//       setOpenSidebarToggle(!openSidebarToggle);
//     };

//   return (
//     <div>
//    <AdminHeader OpenSidebar={OpenSidebar} />
//    <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//     <div className="section-page">
//       <h2 className="font-bold">Sections </h2>
//       <div className="sections-container">
//         {sections.map((section) => (
//           <div key={section.id} className="section-card">
//             <h3 className="font-bold">{section.campus}</h3>
//             <p><strong>Days:</strong> {section.days}</p>
//             <p><strong>Timing:</strong> {section.timing}</p>
//             <p><strong>Teacher:</strong> {section.teacher}</p>
//             <p><strong>Students:</strong> {section.totalStudents}</p>
//           </div>
//         ))}
//       </div>

//       <div className="sectionlist-btn">
//         <Link to="/batch-list" className="sectionlist-btnn">Back To Batch</Link>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SectionPage;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router";
import AdminHeader from "../Admin/AdminHeader";
import AdminSidebar from "../Admin/AdminSidebar";

const SectionPage = () => {
  const { batchId } = useParams();

  const [sections, setSections] = useState([
    { id: 1, campus: "Gulshan Campus", days: "TTS", timing: "7 to 9", teacher: "Bilal Raza", totalStudents: 150 },
    { id: 2, campus: "Badarabad Campus", days: "MWF", timing: "5 to 7", teacher: "Ali Ahmed", totalStudents: 120 },
  ]);

  const [selectedSections, setSelectedSections] = useState([]);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Handle checkbox selection
  const handleCheckboxChange = (id) => {
    setSelectedSections((prev) =>
      prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
    );
  };

  // Merge selected sections
  const mergeSections = () => {
    if (selectedSections.length !== 2) {
      alert("Please select exactly 2 sections to merge.");
      return;
    }

    const [firstSection, secondSection] = selectedSections.map((id) =>
      sections.find((section) => section.id === id)
    );

    const mergedSection = {
      id: sections.length + 1, // Generate a new ID for the merged section
      campus: `${firstSection.campus} & ${secondSection.campus}`,
      days: `${firstSection.days}, ${secondSection.days}`,
      timing: `${firstSection.timing} & ${secondSection.timing}`,
      teacher: `${firstSection.teacher}, ${secondSection.teacher}`,
      totalStudents: firstSection.totalStudents + secondSection.totalStudents,
    };

    setSections((prev) =>
      prev.filter((section) => !selectedSections.includes(section.id)).concat(mergedSection)
    );
    setSelectedSections([]);
  };

  return (
    <div>
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="section-page">
        {/* <h2 className="font-bold">Sections</h2> */}
      <br /><br />
        {/* Merge Sections Feature */}
        <div className="merge-section">
          <h2>Select sections to merge:</h2>
          <button onClick={mergeSections} className="merge-btn">Merge Selected Sections</button>
        </div>
        
          <div className='addcource-btn-parent'>
              <Link to='/addsection' className='add-course'>Add New Section ↓</Link>
               </div>  

        <br />
        <div className="sections-container">
          {sections.map((section) => (
            <div key={section.id} className="section-card">
              <input
                type="checkbox"
                checked={selectedSections.includes(section.id)}
                onChange={() => handleCheckboxChange(section.id)}
              />
              <h3 className="font-bold">{section.campus}</h3>
              <p><strong>Days:</strong> {section.days}</p>
              <p><strong>Timing:</strong> {section.timing}</p>
              <p><strong>Teacher:</strong> {section.teacher}</p>
              <p><strong>Students:</strong> {section.totalStudents}</p>
            </div>
          ))}
        </div>

        <div className="sectionlist-btn">
          <Link to="/courses" className="sectionlist-btnn">Back To Course</Link>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
