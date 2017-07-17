import * as React from "react";
import {Button, Modal} from "react-bootstrap";
import {Trigger} from "./bootstrap/Trigger";

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
