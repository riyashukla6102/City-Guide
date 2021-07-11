import React from 'react';
import styled from 'styled-components';
import {motion } from 'framer-motion';
import flight from '../image/flight.jpg';
import train from '../image/train.jpg';
import {Link} from 'react-router-dom';




const Section = styled.section`
height:100vh;
display:flex;
justify-content: center;
align-items :center;
background :#131313;

`;

const Container = styled.div`

display: flex;
grid-template-column: 1fr 1 fr;
height: 100vh;
padding:3rem calc ((100vw-1300px) /2);



@media screen and (max-width 768px) {
    grid-grid-template-columns: 1fr;

}
`;

const ColumnLeft=styled.div`
    display: flex;
    color: #fff;
    flex-direction : column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1{
        margin-bottom:0.5rem;
        font-size: 2 sem;
    }

    p{
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;


const Button=styled(motion.button)`
     padding: 1 rem 3rem;
     font-size: 1rem;
     border: 2px solid #fff;
     border-radius: 4px;
     outline:none;
     cursor: pointer;
     background: transparent;  
     color: #fff; 
`;

const Image = styled(motion.img)`
    position: relative;
    width : 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px
`;


const ColumnRight=styled.div`
    display: flex;
    justify-content: center;
    align-items: 3rem;
    position: relative;

    ${Image}:nth-child(1){
        top:10px;
        left:10px;
    }

    ${Image}:nth-child(2){
        top:170px;
        left:10px;
    }

   
    
`;
const Start = () => {
    const fadeLeft = {
        hidden:{opacity: 0 , x: -100},
        visible: {opacity: 1, x:0}
    }
    return (
        <Section>
        <Container>

            <ColumnLeft>
               <motion.h1 
               initial={{opacity:0}}
               animate={{opacity:1}}
               tansition={{duration:1}}
               > Welcome to City-Guide
               </motion.h1> 
               <motion.p
                variants={fadeLeft}
               initial='hidden'
               animate='visible'
               transition={{duration:2}}
               >Turn up your travel spirit
               </motion.p>

               <Link to = "/Home">
               <Button
               whileHover={{scale:1.05}}
               whileTap={{scale:0.95, backgroundColor: '#67f6e7'
               ,border: 'none', color: '#000'
                }}

                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration:1}}
               
               >Get Started</Button>
               </Link>
            </ColumnLeft>

            <ColumnRight>
                <Image src={flight} alt='flight' whileTap={{scale:0.9}}/>
                <Image src={train} alt='train'  whileTap={{scale:0.9}}/>
                
            </ColumnRight>

        </Container>

        </Section>
    )
};

export default Start;