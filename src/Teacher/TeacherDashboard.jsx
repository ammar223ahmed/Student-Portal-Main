import React, { useState } from 'react';
// import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import { Link } from 'react-router';
import TeacherSidebar from './TeacherSidebar';
import TeacherHeader from './TeacherHeader';

const TeacherDashboard = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
        const OpenSidebar = () => {
          setOpenSidebarToggle(!openSidebarToggle)
        }

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
             

  return (
   <div>
      <TeacherHeader OpenSidebar={OpenSidebar}/>
      <TeacherSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <br /><br /><br />
    <div className="teacher-dashboard">
      <div className="teacherHeader">
        
        <div className="Teacher-name-card">
          <h3>Teacher Name</h3>
          <p>Bilal Raza</p>
        </div>
        <Link to='/teacherCourses'>
        <div className="Teacher-course-card">
          <h3>Courses Enrolled</h3>
          <p>5 Courses</p>
        </div>
        </Link>
        <Link to= '/teacherassignments'>
        <div className="Teacher-assignment-card">
          <h3>Total Assignments</h3>
          <p>30 Assignments</p>
        </div>
        </Link>
      </div>

      {/* <div className="performance">
        <h3>Performance Over Time</h3>
        <div className="chart-placeholder">Performance chart will go here.</div>
      </div> */}
      
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

      <div className="events-activity">
        <div className="teacher-events-card">
          <h3>Upcoming Events</h3>
          <p>Assignment Deadline: 20th January</p>
          <p>Next Meeting: 25th January</p>
        </div>
        <div className="teacher-events-card">
          <h3>Recent Activity</h3>
          <p>Reviewed Assignment: "OLX CLONE"</p>
          <p>Started New Course batch 15: "Web Development"</p>
        </div>
      </div>
    </div>



   </div>
  );
};

export default TeacherDashboard;
 