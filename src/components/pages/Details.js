import React, { Component } from 'react';
import {InfoConsumer} from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews';

function Details(){
    return (
        <InfoConsumer>
            {data => {
                const {
                    id,
                    headerTitle,
                    headerSubTitle,
                    headerText,
                    img1,
                    title,
                    maps,
                    description
                    } = data.detailInfo;

    return(
        <>
            <HeaderDetails className="container-fluid align-items-center">
            <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
            <h4 className="display-5">{headerSubTitle}</h4>
            <p>{headerText}</p>

            {/*SOCIAL ICONS*/}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <i className="fab fa-facebook-f" />
                    </div>

                <div className="col-2">
                    <a href ="https://twitter.com/Riya08110827" >
                    <i className="fab fa-twitter"  />
                     </a>
                </div>

                 <div className="col-2">
                    <i className="fab fa-google" />
                </div>

                <div className="col-2">
                    <a href ="https://www.instagram.com/_riya.shukla_/">
                    <i className="fab fa-instagram" />
                    </a>
                </div>
                                
                <div className="col-2">
                    <i className="fab fa-reddit" />
                </div>
                 </div>
                </div>
            </HeaderDetails>

                           {/* Nav Link */}
                           <div className="container">
                           
                               <ul className="nav nav-tabs">
                               {/*About Place Link*/}
                                <li className="nav-item">
                                    <a href="#aboutPlace" className="nav-link active" 
                                    role="tab" 
                                    data-toggle="tab">About Place</a>
                                
                                </li>

                                {/* Reviews Link*/}
                                <li className="nav-item">
                                    <a href="#reviews" className="nav-link"
                                     role="tab" data-toggle="tab">Reviews</a>
                                
                                </li>

                                {/*Map Link*/}
                                <li className="nav-item">
                                    <a href="#map" className="nav-link" role="tab" data-toggle="tab">Maps</a>
                                
                                </li>
                                </ul>

                                {/*Tab Pane*/}
                                <div className="tab-content mb-5">

                                    {/*About Place Tab */}
                                    <div 
                                    id="aboutplace"
                                    className="tab-pane in active text-center mt-5"
                                    role="tabpanel">
                                        <h2 className="mb-3">{title}</h2>
                                        <img
                                         src={img1} 
                                         alt={title} 
                                         className="img-thumbnail img-fluid"
                                         
                                         />

                                        
                                        
                                    </div>

                                    {/*Reviews*/}
                                    <div className="tab-panel" id="reviews" role="tabpanel">
                                        <Reviews />
                                    </div>

                                    {/*Map*/}
                                    <div className="tab-panel" id="map" role="tabpanel">
                                        
                                        <iframe src={maps} style={{border: '0',
                                         height:'28.125rem',
                                         width:'100%' , frameborder:'0'
                                        }}>

                                        </iframe>
                                    </div>

                                </div>

                               
                           </div>
                            

                        </>
                    );

                    
                }}
            </InfoConsumer>
        );
    }

export default Details;

const HeaderDetails = styled.header   //header styling
` background: linear-gradient(white,pink);
    height:100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align:center;

    h1{
        padding-top: 10%;
        color:var (--mainDark);

    }

    h4{
        color:var(--mainDark);

    }

    p{
        padding-left :10%;
        padding-right:10%;
        margin-bottom:10%;
        color: var(--mainDark);
    }

    i{
        font-size: 1.875 rem;
        color: var(--mainDark);
    }

    i:hover{                     /* for social icon */
        color:var(--mainBlue);
        cursor: pointer;
    }

    .nav-item{
        height: 18.175 rem;
    }

    @media(max-width : 760 px){    //for fix the screen size after minimize
        h1,h4{
            color:var(--mainwhite)
        }
    }

}
`;


