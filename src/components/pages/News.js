import React, { Component } from 'react';
import Newscard from '../Newscard';
import {InfoConsumer} from '../context';
import { motion } from 'framer-motion';

 function News(){
     
    
        return (
            <motion.div exit ={{opacity: 0}} 
            animate={{opacity:1}} 
            initial={{opacity:0}}>
            <InfoConsumer>
            
                {value => {
                    return value.news.map(item => {
                        return<Newscard key = {item.id} item={item} />;
                    })
                }}
            </InfoConsumer>
            </motion.div>
        );
    }

export default News;
