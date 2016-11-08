import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import RPSScore from '../components/RPSScore';
import RPSShapeSelector from '../components/RPSShapeSelector';
import RPSBoard from '../components/RPSBoard';
import RPSBoardText from '../components/RPSBoardText';
import { fetchShapes, setUserShape, run, restart } from '../actions/index';


class RPS extends Component {

    componentWillMount() {
        this.props.fetchShapes();
    }

    setUserShape(shape) {
        this.props.setUserShape(shape);
    }

    run() {
        this.props.run(this.props.user.selectedShape);
    }

    restart() {
        this.props.restart();
    }

    render() {
        let userShape = (this.props.user.selectedShape!=null) ? this.props.user.selectedShape : null,
            CPUShape = (this.props.cpu.selectedShape!=null) ? this.props.cpu.selectedShape : null;

        return (
            <div id="rock-paper-scissors">
                <Row>
                    <Col xs={12}>
                        <Button bsStyle="danger" onClick={this.restart.bind(this)}>Restart Game</Button>
                    </Col>
                </Row>
                <RPSScore
                    user={this.props.user.score}
                    cpu={this.props.cpu.score} />
                <RPSShapeSelector
                    shapes={this.props.shapes}
                    onSelectShape={this.setUserShape.bind(this)}
                    onRun={this.run.bind(this)}
                    selectedShape={userShape} />
                <RPSBoard
                    leftShape={userShape}
                    rightShape={CPUShape} />
                <RPSBoardText
                    status={this.props.status} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shapes: state.rps.shapes,
        user: state.rps.user,
        cpu: state.rps.cpu,
        status: state.rps.status
    }
}

export default connect(mapStateToProps, { fetchShapes, setUserShape, run, restart })(RPS);
