import React from 'react'
import { Col } from 'react-bootstrap';

export const ProjectCard = ({className, title, description, imgUrl, url}) => {
    return (
        <Col size={12} sm={12} md={6}>
            <a href={url}>
                <div className="flip-box">
                    <div  className="flip-box-inner">
                        <div className={className}>
                        </div>
                        <div className="flip-box-back">
                            <h2 id="firstfront">{title}</h2>
                            <h2 id="firstfronttwo"> {description}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </Col>
    )
};