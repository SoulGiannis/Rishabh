import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactimg from '../images/contactgif.gif'
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }    
    const [formDetails, setFormDetials] = React.useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetials({
            ...formDetails,
            [category]: value
        })
    }
    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactimg} alt="contactimg"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="tel" value={formDetails.phone} placeholder='Mobile Number' onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e)=> onFormUpdate('message', e.target.value)}/>
                                    <button type='submit'><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
