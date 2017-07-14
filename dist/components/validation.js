import * as React from "react";
import * as mui from 'material-ui';
import { TableBody, TableRow, TableRowColumn } from 'material-ui';
import '../styles/style.css';
const constraints = {
    firstName: {
        required: true,
        maxLength: 7
    },
    secondName: {
        required: true,
        maxLength: 7
    },
    middleName: {
        required: true,
        maxLength: 7
    }
};
export class Validation extends React.Component {
    constructor() {
        super();
        this.validate = () => {
            let b0 = this.validateInput('firstName');
            console.log(b0);
        };
        this.state = {
            fieldErrors: {}
        };
        /* this.getById = this.getById.bind(this);
         this.update = this.update.bind(this);
         this.validate = this.validate.bind(this);*/
    }
    componentWillUpdate(nextProps, nextState) {
        [
            'firstName', 'secondName', 'middleName'
        ].forEach(fieldName => {
            if (nextState[fieldName] != this.state[fieldName]) {
                nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);
            }
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(HomeWidget, { title: 'Validation widget' },
                React.createElement("div", null,
                    React.createElement(mui.Table, { fixedFooter: true, fixedHeader: true, selectable: false, style: { width: 1000 } },
                        React.createElement(TableBody, { displayRowCheckbox: false },
                            React.createElement(TableRow, null,
                                React.createElement(TableRowColumn, null, 'firstName'),
                                React.createElement(TableRowColumn, null,
                                    React.createElement(mui.TextField, { hintText: 'firstName', value: this.state.firstName, errorText: this.state.fieldErrors.firstName, floatingLabelText: 'firstName', onChange: (val) => {
                                            this.setState({ firstName: val.target.value });
                                        }, multiLine: true }))))),
                    React.createElement(mui.RaisedButton, { label: 'Validate', primary: true, onTouchTap: () => this.validate() })))));
    }
    validateInput(fieldName) {
        this.triggerValidation(fieldName);
        return this.state[fieldName] && this.state.fieldErrors[fieldName] == null;
    }
    triggerValidation(fieldName) {
        if (this.state[fieldName] == null) {
            console.log("dsdsd");
            this.setState((a, b) => { return { [fieldName]: '' }; });
        }
    }
}
export function message(constraint, value, regexSpecialTranslation) {
    if (!constraint)
        return;
    if (value === undefined)
        return 'value === undefined';
    if (value == null)
        value = '';
    if (value.length == 0)
        return 'value.length == 0';
    if (value.length >= 7)
        return 'length error!!';
}
/** For use on the HomePage only */
export const HomeWidget = ({ title, progress = undefined, children = undefined }) => (React.createElement(mui.Paper, { style: { marginBottom: 20 } },
    React.createElement(Header, { text: title }),
    progress,
    React.createElement(Content, null, children)));
export const Header = ({ text, children, buttons, style = {} }) => {
    return (React.createElement("div", { style: style, className: "viewHeader" },
        text && React.createElement("div", { className: "text" },
            " ",
            text),
        children,
        buttons && React.createElement("div", { className: "buttons" }, buttons)));
};
export const Content = ({ padding = 20, children, className }) => (React.createElement("div", { style: { padding }, className: className }, children));
//# sourceMappingURL=validation.js.map