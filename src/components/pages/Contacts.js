import React, { Component } from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';


 function Contacts(){
   
        return (
            <section className="my-5  py-5">
                <Container>
                <div className="well well -sm">
                    <h3> <strong>Our Location</strong></h3>
                </div>
               
                
                <Row>
                    <Col md={7}>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1o8nj3qUM7EbH3Eupsa7LD5rNe4hf_rqj" 
                    style={{
                       border:'0',
                       width:'100%',
                       height:'315px',
                       frameborder: '0'
                       }}
                       allowFullScreen>

                    </iframe>

                    </Col>
                

                <Col md={5}>
                    <h4><strong>Contact Us</strong></h4>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" 
                            placeholder="Name"/>
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" 
                            placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <input type="tel" className="form-control" 
                            placeholder="Phone"/>
                        </div>

                        <textarea 
                        className ="form-control"
                        cols="30"
                        rows="3"
                          placeholder="Message"
                          />
                          <Link classname="btn btn-outline-primary text-uppercase mt=1">
                              <i className="fa fa-paper-plane-o" aria-hidden="true">

                              </i>
                              <i className="fa fa-telegram-plane"/>&nbsp; Send
                          </Link>
                        
                        </form>



                        </Col>   
                </Row>
                </Container>
            </section>
        );
    }

export default Contacts;
