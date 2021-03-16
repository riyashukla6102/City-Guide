import React, { Component } from 'react'
import { Container ,Row } from 'react-bootstrap';
import {InfoConsumer} from '../context';
import Info from '../Info';
function Home(){
    
        return (

            <Container>
             <Row className="mt-5">

            <InfoConsumer>
              {data => {
                  return  data.info.map(item => {
                      return <Info key = {item.id} item={item} />;
                  });
              }
              }  
            </InfoConsumer>

            </Row>

            </Container>
            
        );
    }

export default Home; 
