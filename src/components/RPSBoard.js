import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import RPSBoardShape from './RPSBoardShape';


const RPSBoard = ({leftShape, rightShape}) => {
    return (
        <Row id="rock-paper-scissors-board">
            <RPSBoardShape
                title="User"
                shape={leftShape} />
            <RPSBoardShape
                title="CPU"
                shape={rightShape} />
        </Row>
    )
}

export default RPSBoard;
