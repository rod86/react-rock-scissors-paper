import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';

/*
props:
    shapes
    selectedShape
*/

const RPSShapeSelector = () => {
    return (
        <Row id="rock-paper-scissors-shape-selector">
            <Col xs={12}>
                <b>Choose: </b>
                <ButtonGroup>
                    <Button active>Rock</Button>
                    <Button>Paper</Button>
                    <Button>Scissors</Button>
                </ButtonGroup>
                <Button bsStyle="primary" disabled>Go</Button>
            </Col>
        </Row>
    )
}

export default RPSShapeSelector;
