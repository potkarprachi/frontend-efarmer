import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

const FarmerSideNavBar = () => {
  var name=sessionStorage.getItem("name");
  return (
    <div style={{ display: 'flex', height: '100vh', width:'100%' ,overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader icon="user" prefix={<i className="fa fa-bars fa-large" ></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit' }} >{name}</a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/AdminDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminCropTable" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="check">Crop Approval</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminContactUs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="phone">Contact us Queries</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admintransaction" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card">Transcations</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default FarmerSideNavBar;