// import React, { Component } from 'react'
// import {InfoConsumer} from './context';
// import { Link } from 'react-router-dom';

// class Info extends Component {
//     render() {
//         const{
//             id,
//             headerTitle,
//             headerSubTitle,
//             headerText,
//             img

//         } = this.props.item;
        
//         return (
            
//                     <div className = "col-10 col-lg-4 mx-auto mb-5">
//                     <div className="card" style = {{width: '100%'}}>
//                     <img src={img} alt={headerTitle} className="card-img-top" />  
//                     <div className="card-body">
//                       <h3 className="card-title text-uppercase">{headerTitle}</h3>
//                       <h5 className="card-title">{headerSubTitle}</h5>
//                       <p className="card-text">{headerText}</p>
//                     <InfoConsumer>{
//                         data=>(
//                             <Link 
//                       onClick = {() => data.handleDetail(id)}
//                        to="/details"
//                        className=" btn btn-outline-primary text-uppercase"
//                        >
//                        More Info
//                       </Link>

//                         )
//                     }
                      
//                       </InfoConsumer>

//                     </div>
//                     </div>

//                     </div>
//                 )
//                 }
            
//     }
// export default Info;

import React from 'react';
import {InfoConsumer} from './context';
import { Link } from 'react-router-dom';
import Example from './Detailmodal';
import { Component } from 'react';

class Info extends Component{

    constructor(props) {
        super(props);
        this.state = {show: false};
      }
    render(){

    
    const{ id,headerTitle,headerSubTitle,headerText,img1,img2,img3 }=this.props.item;
    
  
    const handleClose = () => this.setState({show:false});
    const handleShow = () =>this.setState({show:true});
    return (
        <>
        <Example title={headerTitle} img1={img1} show={this.state.show} handleClose={handleClose}  img2={img2} img3={img3}/>
            

                    <div className = "col-10 col-lg-4 mx-auto mb-5">
                    <div className="card" style = {{width: '22rem'}} onClick={handleShow}>
                    <img src={img1} alt={headerTitle} className="card-img-top"  height='250px'/>  
                    <div className="card-body">
                      <h3 className="card-title text-uppercase">{headerTitle}</h3>
                      <h5 className="card-title">{headerSubTitle}</h5>
                      <p className="card-text">{headerText}</p>
                      <InfoConsumer>
                        {data => (
                      <Link 
                      onClick = {() => data.handleDetail(id)}
                       to="/details"
                       className=" btn btn-outline-primary text-uppercase"
                       >
                       More Info
                      </Link>
                        )
                    }
            </InfoConsumer>

                    </div>
                    </div>

                    </div>
                
              
            </>
        )
    }
    }


export default Info;

