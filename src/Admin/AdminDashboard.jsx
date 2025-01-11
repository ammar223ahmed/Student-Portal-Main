import React, { useState } from 'react'
import { FaBook } from 'react-icons/fa';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import { Link } from 'react-router';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';


function AdminHome() {


    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     
     const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
  


  return (
  <div>
    <AdminHeader OpenSidebar={OpenSidebar}/>
    <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <main className='main-container'>
        <br /> <br />
        <div className='main-cards'>
            <div className='card'>
        <Link to='/studentlist'>
                <div className='card-inner'>
                    <h3>STUDENT</h3>
                    <BsPeopleFill className='card_icon'/>

                </div>
                <h1 className='card-heading'>300</h1>
        </Link>
            </div>
            <div className='card'>
        <Link to='/teacherlist'>
                <div className='card-inner'>
                    <h3>TEACHERS</h3>
                 
                    <BsPeopleFill className='card_icon'/>

                </div>
                <h1 className='card-heading'>12</h1>
            </Link>
            </div>
            <div className='card'>
        <Link to='/courses '>    
                <div className='card-inner'>
                    <h3>COURSES</h3>
                    <FaBook size={30} />
                    
                </div>
                <h1 className='card-heading'>33</h1>
            </Link>
            </div>
            <div className='card'>
            <Link to='/adminalert'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1 className='card-heading'>42</h1>
            </Link>
            </div>

        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
    </div>
  )
}

export default AdminHome