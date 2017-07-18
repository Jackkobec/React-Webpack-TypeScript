import * as React from "react";
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip, Grid, Row, Col} from "react-bootstrap";
import { Trigger } from "./bootstrap/Trigger";



// require('../styles/custom_menu.scss')

export class BootstrapTest extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    /*Это нужно чтобы работал переход по клику в стиле:
     <a onClick={ () => { (this.context as any).router.push('/'); }}>Contact</a>
     */
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };


    render() {
        return (
            <div>
                {/*Рендер переменной с Bootstrap элементами*/}
                { buttonsInstance }

                {/*Рендер класса с Bootstrap элементами*/}
                <Trigger />

                {/*Tooltips*/}
                { positionerInstance }

                {/*Page layout*/}
                { gridInstance }
            </div>
        )
    }
}

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance = (
    <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
        <Button bsSize="large" block>Block level button</Button>
    </div>
);

// ReactDOM.render(buttonsInstance, document.getElementById("this"));

/*Tooltips*/
const tooltip = (
    <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

const positionerInstance = (
    <ButtonToolbar>
        <OverlayTrigger placement="left" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <OverlayTrigger placement="right" overlay={tooltip}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
    </ButtonToolbar>
);

/*Page layout*/
const gridInstance = (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row>
    </Grid>
);
