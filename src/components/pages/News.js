import React, { Component } from 'react';
import Newscard from '../Newscard';
import {InfoConsumer} from '../context';

 function News(){
    
        return (
            <InfoConsumer>
                {value => {
                    return value.news.map(item => {
                        return<Newscard key = {item.id} item={item} />;
                    })
                }}
            </InfoConsumer>
        );
    }

export default News;
