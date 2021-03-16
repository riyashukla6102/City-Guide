import React from 'react';
import logo from  '../../logo.svg';
import {Navbar , Nav , Form , FormControl , Button} from 'react-bootstrap';

 function NavbarComponent() {
    return (


      <Navbar bg="light" expand="lg navbar-light bg-dark">
      <img src={logo} alt ="logo" style={{ width:'35px'}}></img>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mx-auto text-white text-uppercase ml-5">
      <Nav.Link className="nav-link text-white text-uppercase ml-5" href="/">Home&nbsp;
       <i className="fas fa-home"></i>
      </Nav.Link>

      <Nav.Link className="nav-link text-white text-uppercase ml-5" href="/news">News&nbsp;
       <i className="fas fa-newspaper"></i>
       </Nav.Link>

      <Nav.Link className="nav-link text-white text-uppercase ml-5" href="/contacts">Contact Us&nbsp; 
      <i className="fas fa-phone"></i>
      </Nav.Link>

      <Button variant="light ml-5">Light</Button>
       <Button variant="dark ">Dark</Button>{' '}
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        
    );
}

export default NavbarComponent;


 
