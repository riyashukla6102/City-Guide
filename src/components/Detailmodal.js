import React from 'react';
import {Modal , Carousel} from 'react-bootstrap';



function Example({title,img1,show,handleClose,img2,img3,id}) {
   return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-2 py-2">
          <Carousel>
            <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel> 
            {/* <InfoConsumer>
                        {data => (
                      <Link 
                      onClick = {() => data.handleDetail(id)}
                       to="/details"
                       className=" btn btn-outline-primary text-uppercase my-3"
                       >
                       More Info
                      </Link>
                        )
                    }
            </InfoConsumer> */}
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Example;
  