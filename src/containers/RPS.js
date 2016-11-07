import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import RPSScore from '../components/RPSScore';
import RPSShapeSelector from '../components/RPSShapeSelector';
import RPSBoard from '../components/RPSBoard';

const RPS = () => {
    return (
        <div id="rock-paper-scissors">
            <RPSScore player={1} cpu={3} />
            <RPSShapeSelector />
            <RPSBoard />
        </div>
    )
};

export default RPS;
