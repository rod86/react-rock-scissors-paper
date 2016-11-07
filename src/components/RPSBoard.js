import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

/*
props
    player shape leftShape
    cpu shape    rightShape
*/
/*
component RPSBoardShape props
- title
- shape url
- shape name
*/

const RPSBoard = () => {
    return (
        <Row id="rock-paper-scissors-board">
            <Col xs={6}>
                <div className="shape">
                    <h3>Player</h3>
                    <Image src="http://lorempixel.com/200/200/" responsive={true} />
                    <div className="title">Scissors</div>
                </div>
            </Col>
            <Col xs={6}>
                <div className="shape">
                    <h3>Player</h3>
                    <Image src="http://lorempixel.com/200/200/" responsive={true} />
                    <div className="title">Scissors</div>
                </div>
            </Col>
        </Row>
    )
}

export default RPSBoard;
