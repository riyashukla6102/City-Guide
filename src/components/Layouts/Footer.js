import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import styled from 'styled-components';


function Footer(){
    return(
        <FooterContainer className="main-footer">
        <div className="footer-middle">
       <Container>
        <Row>
        {/* column1 */}
        <Col md={3} sd={6}>
            <h4>About Us</h4>
            <ul className="list-unstyled">
                <li><a href="/">Postal Adress</a></li>
                <li><a href="/">Who we are</a></li>
                <li><a href="/">Our team</a></li>
                <li><a href="/">Content solution</a></li>
            </ul>
        </Col>

        {/* column2 */}
        <Col md={3} sd={6}>
    
    
            <h4>Places to visit</h4>
            <ul className="list-unstyled">
                <li><a href="https://timesofindia.indiatimes.com/travel/perth/travel-guide/cs45448716.cms">In Bangalore</a></li>
                <li> <a href="/">In Mumbai</a></li>
                <li><a href="/">In Delhi</a></li>
                <li><a href="/">In Goa</a></li>
        
            </ul>
            </Col>

        {/* column3 */}
        <Col md={3} sd={6}>
            <h4>Hotels</h4>
            <ul className="list-unstyled">
                <li><a href="/">In Goa</a></li>
                <li> <a href="/">In Jaipur</a></li>
                <li><a href="/">In Mumbai</a></li>
                <li><a href="/">In Delhi</a></li>
            </ul>
        </Col>

        {/* column4 */}
        <Col md={3} sd={6}>
            <h4>Best Beaches</h4>
            <ul className="list-unstyled">
                <li><a href="/">Goa Beaches</a></li>
                <li><a href="/">Mumbai Beaches</a></li>
                <li><a href="/">Pondicherry Beaches</a></li>
                <li><a href="/">Kerala Beaches</a></li>
                
            </ul>
        </Col>
        </Row>

        {/*Footer Bottom*/}
        <div className  ="footer-bottom">
            <p className="text-xs-center">
                &copy; {new Date().getFullYear()} City Guide App - All Rights 
                Reserved
            </p>
        </div>
        </Container>
        </div>
        </FooterContainer>
    ); 
}
export default Footer;



const FooterContainer = styled.footer`
  .footer-middle{
    background: var(--mainLightGrey);
    padding-top: 3rem;
    
   
  }


  .footer-bottom{
      padding-top:3rem;
      padding-bottom:2rem;
  }

  ul li a{
      color:var(--mainBlack);

  }

  ul li  a: hover{
      color: var(--mainBlue);

  }
`;
