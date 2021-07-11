import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Form , Button, Col , Modal, Container , Image ,Row} from 'react-bootstrap';

const Signup = ()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container>
        <Row className="my-4">
            <Col>
            <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
             </Form.Group>
           <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
                                                    
           
            <Link className="btn btn-outline-primary btn-lg">
                Login
            </Link>

            <Link className="btn btn-outline-primary btn-lg ml-3" onClick={handleShow}>
              Signup
                </Link>
            
            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                <Modal.Title>SignUp Here</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <Form>
                                                <Form.Row>
                <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Emailid" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type = "password" placeholder="Enter Password" />
            </Form.Group>

            <Form.Group controlId="formPassword1">
                <Form.Label>Re-Password</Form.Label>
                <Form.Control type = "password" placeholder="Re Enter Password" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Modal.Body>
        </Modal>
                                                
     </Form>
            </Col>
            <Col>
                <img src='../../images/travel.jpg'></img>
            </Col>
        </Row>
    
                </Container>
   

    )}

export default Signup;