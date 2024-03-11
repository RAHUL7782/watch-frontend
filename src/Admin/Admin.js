import React from 'react'
import MainContent from '../Admin/MainContent';
import Sdbar from '../Admin/Sdbar';
import "../Admin/styles/SidMain.css";

const Admin = () => {
  return (
    <div className='app-container'>
    <Sdbar/>
    <MainContent/>
    
  </div>
  )
} 

export default Admin
