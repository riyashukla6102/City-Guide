import React from 'react';
import logo from  '../../logo.svg';
import {Navbar , Nav , Form , FormControl , Button} from 'react-bootstrap';
import{NavLink} from 'react-router-dom';

 function NavbarComponent() {
    return (
      <Navbar bg="light" expand="lg navbar-light bg-dark">
      <Navbar.Brand href="/">
      <img src={logo} alt ="logo" style={{ width:'35px'}}></img>
      <span className="hello ml-1" > City-Guide </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">


      

    <Nav className="mx-auto text-white text-uppercase ml-5">

    

      <NavLink className="nav-link text-white text-uppercase ml-5" to="/home">Home&nbsp;
       <i className="fas fa-home"></i>
      </NavLink>

      <NavLink className="nav-link text-white text-uppercase ml-5" to="/news">News&nbsp;
       <i className="fas fa-newspaper"></i>
       </NavLink>

      <NavLink className="nav-link text-white text-uppercase ml-5" to="/contacts">Contact Us&nbsp; 
      <i className="fas fa-phone"></i>
      </NavLink>

      <NavLink className="nav-link text-white text-uppercase ml-5" to="/signup">Signup/Login&nbsp;
      <i class="fas fa-user-plus"></i>
      </NavLink>

      
    </Nav>
    {/* <Form inline>
      <Button type="button" className="btn btn-light sm-2">Light
      </Button>
      <Button type="button" className="btn btn-dark">Dark</Button>
    </Form> */}

    
  </Navbar.Collapse>
</Navbar>
        
    );
}

export default NavbarComponent;


 
