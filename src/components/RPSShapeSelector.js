import React, { Component, PropTypes } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';


class RPSShapeSelector extends Component {

    static propTypes = {
        onSelectShape: PropTypes.func.isRequired,
        onRun: PropTypes.func.isRequired
    }

    renderShapeButton({ id, name }) {
        let active = (this.props.selectedShape != undefined && this.props.selectedShape.id == id);
        return (
            <Button key={id} active={active} onClick={()=>this.props.onSelectShape(id)}>
                {name}
            </Button>
        )
    }

    render() {
        return (
            <Row id="rock-paper-scissors-shape-selector">
                <Col xs={12}>
                    <b>Choose: </b>
                    <ButtonGroup>
                        {this.props.shapes.map(this.renderShapeButton.bind(this))}
                    </ButtonGroup>
                    <Button bsStyle="primary" disabled={(this.props.selectedShape==null)} onClick={this.props.onRun}>Go</Button>
                </Col>
            </Row>
        )
    }
}

export default RPSShapeSelector;
