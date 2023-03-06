import React from 'react'
import { Link } from 'react-router-dom'
import { AdminSideBarData } from './AdminSideBarData'

function AdminSideNav() {
  return (
    
    <div className="Sidebar">
    <ul className="SidebarList">
    {AdminSideBarData.map((val,key)=>{
    return(
      <li 
      key={key} 
      className="row"
      id={window.location.pathname==val.link ? "active" : " "}
      >
      <Link className="SidebarList row" to={val.link}>
        
        <div id="icon">{val.icon}</div>
        <div id="title">{val.title}</div>
        </Link>
      </li>
      
    )
   })}
   </ul>
   </div> 
  )
}

export default AdminSideNav