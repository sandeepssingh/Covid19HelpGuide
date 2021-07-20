import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav
  } from 'react-bootstrap';
import './Navigation.css';

const Navigation = (props) => {
return (
<Navbar bg="light">
  <Navbar.Brand href="/Home"> 
  <img  className="d-none d-md-inline " src='./images/png/logo-small.png' alt="" />
  <span className="pd-10 logotxt">Covid19 Help Guide</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <ul className="navbar-nav nav-justified w-100 text-center mt-1">
        <li className="nav-item">
            <Nav.Link href="/Home"> 
                <div><img src= './images/png/house.png' /></div>
                <span className="d-none d-sm-inline">Home</span>
            </Nav.Link>
        </li>
        <li className="nav-item">
            <Nav.Link href="/Resources" >
            <div><img src= './images/png/resources.png' /></div>
                <span className="d-none d-sm-inline">Resources</span>
            </Nav.Link> 
        </li>
        <li className="nav-item">
            <Nav.Link href="/Contact">
            <div><img src= './images/png/contact.png' /></div>
            <div><span className="d-none d-sm-inline">Contact Us</span></div>
            </Nav.Link> 
        </li>
    </ul>
    </Nav>   
  </Navbar.Collapse>
</Navbar>
)}
export default Navigation;