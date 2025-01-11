import React, { useState } from 'react'
import TeacherHeader from './TeacherHeader'
import TeacherSidebar from './TeacherSidebar'

const TeacherCourses = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
          const OpenSidebar = () => {
            setOpenSidebarToggle(!openSidebarToggle)
          }
  
          const courses = [
            { title: "Web Development Batch 11", description: "Learn HTML, CSS, JavaScript, and React, Next, Express, Mongo",
              button: "Enrolled" , duration: "11 Months " },
            { title: "Web Development Batch 15", description: "Learn HTML, CSS Javascript and React  ",   button: "Enrolled" ,  duration: "2 Weeks" },
            { title: "Machine Learning", description: "Introduction to ML concepts and Python libraries.", button: "Enrolled" , duration: "10 Weeks" },
          ];       
           

  return (
    <div>
         <TeacherHeader OpenSidebar={OpenSidebar}/>
      <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <br /><br /><br />
    <div className='teacher-courses-parent'>
      <h1 className='text-center text-3xl font-lg'> Courses Sections</h1>
      <br />
      <hr />
      <br />
      <div className="courses-container">
      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button>{course.button}</button> <br />
          <span className="course-duration">{course.duration}</span>
        </div>
      ))}
    </div>
    </div></div>
  )
}

export default TeacherCourses
