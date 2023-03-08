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
    const id=sessionStorage.getItem("userId");
  
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
            <Nav.Link href="/" className="nav-text-top">Home</Nav.Link>
            <Nav.Link href="/aboutus" className="nav-text-top">About Us</Nav.Link>
            <Nav.Link href="/contactus" className="nav-text-top">Contact Us</Nav.Link>
            <Nav.Link href='/login' className="nav-text-top">Login</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar> 
    </>
  );
}
export default TopNav;
