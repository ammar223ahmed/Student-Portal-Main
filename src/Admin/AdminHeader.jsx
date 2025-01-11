import React, { useEffect, useState } from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router';

const AdminHeader = ({ OpenSidebar }) => {
  return (

   
        <header className="header">
          <div className="menu-icon">
            <BsJustify className="icon" onClick={OpenSidebar} />
          </div>
          <div className="header-left flex">
            <h2>SMIT MANAGEMENT SYSTEM</h2>
          </div>
          <div className="header-right flex gap-2">
           
                <Link to="/login" className="login-btn">Login</Link>
                <Link to="/signup" className="signup-btn">Signup</Link>
             
          </div>
        </header>

    
  )
}

export default AdminHeader
