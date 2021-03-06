import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';

const RPSScore = ({user, cpu}) => {
    return (
        <Row id="rock-paper-scissors-score">
            <Col xs={12} sm={4}>
                <Well bsSize="small">
                <Row>
                    <Col xs={6}>
                        <b>You:</b> {user}
                    </Col>
                    <Col xs={6}>
                        <b>CPU:</b> {cpu}
                    </Col>
                </Row>
                </Well>
            </Col>
        </Row>
    )
}

export default RPSScore;
