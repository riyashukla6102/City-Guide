import React from 'react'
import { Container ,Row } from 'react-bootstrap';
import {InfoConsumer} from '../context';
import Info from '../Info';
import { motion } from 'framer-motion';


function Home(){
    
    
        return (
            <Container>
                <motion.div exit ={{opacity:0}}
                    animate={{opacity:1}} 
                    initial={{opacity:0}}
                >
            <Row className="mt-5">
            <InfoConsumer>
              {(data )=> {
                  return  data.info.map(item => {
                      return <Info key = {item.id} item={item} />;
                  });
              }
              }  
            </InfoConsumer>
            </Row>
            </motion.div>

            </Container>
        );
    }
export default Home; 
