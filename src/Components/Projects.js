import React from 'react'
import { Col, Container, Row, Nav,Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import projImg1 from '../images/projImg1.png'
import projImg3 from '../images/projImg3.png'
import projImg4 from '../images/projImg4.png'
import projImg5 from '../images/projImg5.png'
import projImg6 from '../images/projImg6.png'
import projImg7 from '../images/projImg7.PNG'
import projImg8 from '../images/projImg8.png'
import projImg9 from '../images/projImg9.png'
import projImg10 from '../images/projImg10.png'

export const Projects = () => {
    const projects = [
        {
            title: "Social Media Website",
            description: "Built Social Media Website clone using Reactjs",
            imgUrl: projImg1,
            url: 'https://soulgiannis.github.io/find',
            className:"img-change-first"
        },
        {
            title: "Immigration Management System",
            description: "Full stack crud website using JSP, Servlet",
            imgUrl: projImg4,
            url: 'https://github.com/SoulGiannis/SoulGiannis.github.io',
            className: "img-change-fourth"
        },
        {
            title: "Portfolio Website",
            description: "Responsive Portfolio website using Reactjs",
            imgUrl: projImg3,
            url: '#',
            className:"img-change-third"
        },
        {
            title: "Responsive Webpages",
            description: "Built responsive webpages using html, css and javascript",
            imgUrl: projImg5,
            url: 'https://soulgiannis.github.io/login',
            className:"img-change-second"
        },
    ];

    
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{margin:"20px"}}>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, key) => {
                                                return <ProjectCard key={key} {...project   } />
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content> 
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={''} alt="backgroundimage right"></img>
        </section>  
    )
};
