import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const RPSBoardText = ({ status }) => {
    let text = '',
        colorClass = '';

    if (status.finished == true) {
        if (status.winner != null && status.winner == 'user') {
            text = 'You win!';
            colorClass = 'text-success';
        } else if (status.winner != null && status.winner == 'cpu') {
            text = 'You loose';
            colorClass = 'text-danger';
        }
    } else {
        if (status.winner != null && status.winner == 'user') {
            text = 'You win the round';
            colorClass = 'text-success';
        } else if (status.winner != null && status.winner == 'cpu') {
            text = 'You loose the round';
            colorClass = 'text-danger';
        } else if (status.winner != null && status.winner == 'draw') {
            text = 'Draw in the round';
            colorClass = 'text-info';
        }
    }

    return (
        <Row id="rock-paper-scissors-text" className={colorClass}>
            <Col xs={12}>
                {text}
            </Col>
        </Row>
    )
}

export default RPSBoardText;
