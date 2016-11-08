import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';

const RPSBoardShape = ({title, shape}) => {
    let shapeName = (shape != null) ? shape.name : '',
        shapeImage = (shape != null) ? shape.image : '';
    return (
        <Col xs={6}>
            <div className="shape">
                <h3>{title}</h3>
                <Image src={shapeImage} responsive={true} />
                <div className="title">{shapeName}</div>
            </div>
        </Col>
    )
}

export default RPSBoardShape;
