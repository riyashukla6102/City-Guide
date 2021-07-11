import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Modal,Button,Form,Col} from 'react-bootstrap';



 const NotFoundPage = ()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


        return (
            <ComponentNotFound className="container">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>Error 404 not found</h2>
                        <div className="error-details">
                            Sorry, an error occured. The requested page was not found!
                        </div>
                        <div className="error-actions">
                            <Link to ="/home" className="btn btn-outline-primary btn-lg" >
                                <i className="fas fa-home" />&nbsp;Back to main
                            </Link>

                            <Link className="btn btn-outline-primary btn-lg" onClick={handleShow}>
                            <i className="fas fa-envelope"/>&nbsp;Support

                            </Link>
                                

                                

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Submit Your Queries here!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                     
                                    <Form>
                                        
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="QueryForm.ControlTextarea1">
                                                <Form.Label as="h6">Enter Queries</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>

                                        <Form.Group id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                            </Form>



                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        );
    }

export default NotFoundPage;

 const ComponentNotFound= styled.div`
  .error-template {
      padding: 40px 15px;
      text-align: center;
  }

  .error.actions{
      margin-top: 15px;
      margin-bottom: 15px;
  }

  .btn{
      margin-right: 10px;
  }
 `;
