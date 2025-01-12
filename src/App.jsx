import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home/Home'
import Login from './Home/Login'
import Signup from './Home/Signup'
import Header from './Home/Header'
import Sidebar from './Home/Sidebar'
import Student from './components/student'
import TeacherDashboard from './Teacher/TeacherDashboard'
import TeacherHeader from './Teacher/TeacherHeader'
import TeacherSidebar from './Teacher/TeacherSidebar'
import TeacherCourses from './Teacher/TeacherCourses'
import TotalAssignmentsPage from './Teacher/TeacherAssignments'
import TeacherAlert from './Teacher/Teacheralerts'
import AdminHome from './Admin/AdminDashboard'
import AdminHeader from './Admin/AdminHeader'
import AdminSidebar from './Admin/AdminSidebar'
import TeacherList from './components/Teacherlist'
import Courselist from './components/Courselist'
import BatchList from './components/Batchlist'
import SectionList from './components/Sectionlist'
import AddCourseForm from './components/AddCourse'
import Alert from './components/Alerts'
import AdminAlert from './Admin/Adminalerts'
import Studentlist from './components/Studentlist'
import StudentDetailPage from './components/StudentDetailPage'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>

       {/* Code divide by 5 Section !*/}
    {/* Fronted Lead AMMAR AHMED! */}
    {/* First Section Home Pages Made By Owais Raza ! */}
    <Route path='/' element={ <Home/> } ></Route>
    <Route path='/login' element={ <Login/> } ></Route>
    <Route path='/signup' element={ <Signup/> } ></Route>
    <Route path='/headerhome' element={ <Header/> } ></Route>
    <Route path='/sidebarhome' element={ <Sidebar/> } ></Route>
    {/* Completed First Section. */}
    <Route path='/student' element={ <Student/> } ></Route>

     {/* Fourth Section TEACHER Workflow  Made By Ammar Ahmed & Aaqib khan ! */}
     <Route path='/teacherdashboard' element={<TeacherDashboard/>}></Route>
    <Route path='/teacherheader' element={<TeacherHeader/>}></Route>
    <Route path='/teacherSidebar' element={<TeacherSidebar/>}></Route>
    <Route path='/teacherCourses' element={<TeacherCourses/>}></Route>
    <Route path='/teacherassignments' element={<TotalAssignmentsPage/>}></Route>
    <Route path='/teacheralerts' element={<TeacherAlert/>}></Route>

    {/* Completed Fourth Section. */}

     {/* Admin Section */}

      <Route path='/Admin' element={<AdminHome/>}></Route>
      <Route path='/adminheader' element={<AdminHeader/>}></Route>
      <Route path='/adminsidebar' element={<AdminSidebar/>}></Route>
      <Route path='/teacherlist' element={<TeacherList/>}></Route>
      <Route path='/courses' element={ <Courselist /> } ></Route>
      <Route path='/Studentlist' element={ <Studentlist/> }></Route>
      <Route path="/student/:id" element={<StudentDetailPage />} />
    <Route path="/course/:courseId/batches" element={<BatchList />} />
    <Route path="/course/:courseId/batch/:batchId/sections" element={<SectionList/>} />
    <Route path='/addcourse' element={ <AddCourseForm/> } ></Route>
    <Route path='/alerts' element={ <Alert/> } ></Route>
    <Route path='/adminalert' element={<AdminAlert/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
