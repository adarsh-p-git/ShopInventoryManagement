import React from 'react'
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
      <img
              src="https://th.bing.com/th/id/OIP.8f8WAzR9YjrJWIBLauFlmQHaF-?rs=1&pid=ImgDetMain"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />

        Shop Master</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/inventory">Inventory List</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          
        </Nav>
        <Nav.Link href="/"><Button className='btn btn-danger'>LogOut</Button></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header