import React from 'react'
import { FaBook } from 'react-icons/fa';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
//  import { FaEye } from "react-icons/fa";
 import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router';

function TeacherSidebar({openSidebarToggle, OpenSidebar}) {
  
    return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
         <div className= 'sidebar-tittle mx-5 mt-10 flex'>
            <div className='sidebar-brand'>
            <MdDashboard size={22} /> Teacher Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
<br />
        <ul className='sidebar-list my-5 mx-3 '>
            <li className='admin-sidebar-list-item'>
                <Link to='/teacherdashboard' className='flex gap-4 my-6 mx-5'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <br />
            <li className='admin-sidebar-list-item'>
                <Link to='/teacherassignments'  className='flex gap-3  my-6 mx-5'>
                <BsPeopleFill className='icon'/> Students Assignments
                </Link >
            </li>
      <br />
            <li className='admin-sidebar-list-item'>
                <Link to='/teachercourses' className='flex gap-3  my-6 mx-5'>
                     <FaBook size={30} /> Courses
                </Link>
            </li>
       <br />     
            <li className='admin-sidebar-list-item'>
                <Link to='/teacheralerts' href="" className='flex gap-3  my-6 mx-5'>
                    <BsPeopleFill className='icon'/>Alerts
                </Link> 
            </li>
            <br />
        </ul>
    </aside>
  )
}

export default TeacherSidebar