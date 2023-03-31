import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import skillasset1 from '../images/skill-asset1.png'
import skillasset2 from '../images/skill-asset2.png'
import skillasset3 from '../images/skill-asset3.png'

export const Skills = () => {
     const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <h5> Web Development</h5>
                                </div>
                                <div className='item'>
                                    <h5> UX|UI Development</h5>
                                </div>
                                <div className='item'>
                                    <h5> Mern Stack</h5>
                                </div>
                                <div className='item'>
                                    <h5>Problem Sovling</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
