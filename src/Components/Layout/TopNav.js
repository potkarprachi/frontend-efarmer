import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNav.css';
import Logo from '../Images/Logo.jpg';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

function TopNav() {
    const[logState, useLogState]=useState(0);
    
  
  return (
    <>

      <Navbar bg="light" className='nav' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className='nav-img' src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Lastest Updates</Nav.Link>

            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/farmerlogin">Farmer</NavDropdown.Item>
              <NavDropdown.Item href="/customerlogin">Customer</NavDropdown.Item>
              <NavDropdown.Item href="/adminlogin">Admin</NavDropdown.Item>
              {sessionStorage?<NavDropdown.Item href="/logout">Logout</NavDropdown.Item>:" "}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar> 
    </>
  );
}
export default TopNav;
