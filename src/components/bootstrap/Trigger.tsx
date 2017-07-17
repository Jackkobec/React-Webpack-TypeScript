import * as React from "react";
import {Button, Modal} from "react-bootstrap";

/*Added Styles for modal tests*/
require('../../styles/modal.css');

/**
 * You will want to include this bit of css
 *
 * .modal-container {
 *   position: relative;
 * }
 * .modal-container .modal, .modal-container .modal-backdrop {
 *   position: absolute;
 * }
 */

export const Trigger = React.createClass({
    getInitialState() {
        return {show: false};
    },

    render() {
        let close = () => this.setState({show: false});

        return (
            <div className="modal-container" style={{height: 200}}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({show: true})}
                >
                    Launch contained modal
                </Button>

                <Modal
                    show={ this.state.show }
                    onHide={ close }
                    container={ this }
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        {/*Added className="modal-container" for implements styles from modal.css*/}
                        <Modal.Title className="modal-title" id="contained-modal-title">Contained Modal</Modal.Title>
                    </Modal.Header>
                    {/*Added className="modal-container" for implements styles from modal.css*/}
                    <Modal.Body className="modal-title">
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id
                        earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ close }>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});