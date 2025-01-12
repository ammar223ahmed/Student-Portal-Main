import React from 'react'
import { FaBook } from 'react-icons/fa';
// import { FaBook } from 'react-icons/fa';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router';

function AdminSidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand gap-3'>
        <MdDashboard size={22} />  Admin Dashborad
         </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <Link to='/admin' className='flex gap-3'>
                <BsGrid1X2Fill className='icon'/> Dashboard
            </Link>
        </li>
        <li className='sidebar-list-item'>
            <Link to='/courses'  className='flex gap-3'>
            <FaBook size={30}/> Courses
            </Link >
        </li>
        <li className='sidebar-list-item'>
            <Link to='/ Studentlist'  className='flex gap-3'>
            <BsPeopleFill className='icon'/> Students
            </Link >
        </li>
        <li className='sidebar-list-item'>
        <Link to='/teacherlist' href='' className='flex gap-3'>
           <BsPeopleFill className='icon'/> Teachers
        </Link >
      
        </li>
        <li className='sidebar-list-item'>
            <Link to='/adminalert' href="" className='flex gap-3'>
                <BsPeopleFill className='icon'/> Alerts
            </Link> 
        </li>
        
        {/* <li className='sidebar-list-item'>
            <a href="" className='flex gap-3'>
                <BsMenuButtonWideFill className='icon'/> Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-3'>
                <BsFillGearFill className='icon'/> Setting
            </a>
        </li> */}
    </ul>
</aside>
  )
}

export default AdminSidebar
