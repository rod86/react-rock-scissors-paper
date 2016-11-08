import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Navbar from 'react-bootstrap/lib/Navbar';
import RPS from '../containers/RPS';

export default class App extends Component {
  render() {
    return (
        <div>
            <Navbar inverse={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Rock Paper Scissors</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>

            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <RPS />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}
