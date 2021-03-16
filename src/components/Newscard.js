import React, { Component } from 'react'
import{InfoConsumer} from '../components/context'
import {Link} from 'react-router-dom'

 class Newscard extends Component {
    render() {
        const {id,newsTitle,newsText} = this.props.item;
        return (
            <InfoConsumer>
                {
                    data =>(
                        <div className="card container mt -2 mb -3 p-5">
                            <div className="card-body">
                                <h5 key={id} className="card-title">{newsTitle}</h5>
                                <p className="card - text">{newsText}</p> 
                                <Link className="card - link">Read More</Link>
                              
                            </div>
                        </div>
                    )
                        
                    }
                
            </InfoConsumer>
            
        )
    }
}

export default Newscard;

