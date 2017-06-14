import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

 const NavBar = () =>(
<Navbar collapseOnSelect fixedTop id='navbar'>
  <Navbar.Header>
  <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav id="nav-inner">
  <LinkContainer exact to='/'>
    <NavItem eventKey={1} >HOME</NavItem>
  </LinkContainer>
  <LinkContainer to='/about'>
    <NavItem eventKey={2}>ABOUT</NavItem>
  </LinkContainer>
  <NavDropdown eventKey={3} title="PORTFOLIO" id='nav-dropdown'>
    <LinkContainer to='/frontend'>
      <MenuItem eventKey={3.1}>FRONTEND</MenuItem>
    </LinkContainer>
    <LinkContainer to='/backend'>
      <MenuItem eventKey={3.2}>BACKEND</MenuItem>
    </LinkContainer>
  </NavDropdown>
  </Nav>
  </Navbar.Collapse>
  </Navbar>

)

  export default NavBar;
