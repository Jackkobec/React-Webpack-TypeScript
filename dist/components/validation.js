import * as React from "react";
import * as mui from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, FlatButton, TableBody, TableRow, TableRowColumn, Toggle } from 'material-ui';
import '../styles/style.css';
import { red700 } from "material-ui/styles/colors";
// Declare constant for image in the path: ../images/oboi-kosmos-57.jpg
const spaceImg = require('../images/oboi-kosmos-57.jpg');
const okImg = require('../images/ok-128.jpg');
// Button style
const styles = {
    button: {
        margin: 12,
    },
    exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};
const constraints = {
    firstName: {
        required: true,
        maxLength: 7,
        regexp: new RegExp('^[0-9]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    },
    secondName: {
        required: true,
        maxLength: 7,
        regexp: new RegExp('^[0-9]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    },
    middleName: {
        required: true,
        maxLength: 7,
        regexp: new RegExp('^[0-9]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    }
};
export class Validation extends React.Component {
    constructor() {
        super();
        this.handleExpandChange = (expanded) => {
            this.setState({ expanded: expanded });
        };
        this.handleToggle = (event, toggle) => {
            this.setState({ expanded: toggle });
        };
        this.handleExpand = () => {
            this.setState({ expanded: true });
        };
        this.handleReduce = () => {
            this.setState({ expanded: false });
        };
        // Delegate fields name for cleanInput() method
        this.clean = () => {
            this.setState({ firstName: '', secondName: '', middleName: '' }, () => {
                this.setState({ fieldErrors: [] });
            });
        };
        // Delegate fields name for validateInput() method
        this.validate = () => {
            let firstName = this.validateInput('firstName');
            let secondName = this.validateInput('secondName');
            let middleName = this.validateInput('middleName');
            if (firstName && secondName && middleName) {
                //TODO success
                //todo тут вызов методв обращения в бэк
                console.log("success");
            }
            else {
                //TODO fail
                let nextState = Object.assign({}, this.state);
                this.checkValidationOnBtnPress(nextState);
                this.setState(nextState);
                console.log("fail");
            }
        };
        this.state = {
            fieldErrors: {},
            expanded: false // card view
        };
        /* this.getById = this.getById.bind(this);
         this.update = this.update.bind(this);
         this.validate = this.validate.bind(this);*/
    }
    componentWillUpdate(nextProps, nextState) {
        /*Для каждого элемента массива если следующее состояние поля nextState[fieldName]
         * не равно != текущему состоянию поля != this.state[fieldName] ,
         * то устанавливаем в следующее состояниее стейта в fieldErrors[fieldName]
         * сообщение из метода message(constraint: Constraint, value: string, regexSpecialTranslation?: string)
         * // nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);*/
        [
            'firstName', 'secondName', 'middleName'
        ].forEach(fieldName => {
            if (nextState[fieldName] != this.state[fieldName]) {
                nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);
            }
        });
    }
    /*Для каждого элемента массива  устанавливаем в следующее состояниее стейта в fieldErrors[fieldName]
     * сообщение из метода message(constraint: Constraint, value: string, regexSpecialTranslation?: string)
     * // nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);*/
    checkValidationOnBtnPress(nextState) {
        [
            'firstName', 'secondName', 'middleName'
        ].forEach(fieldName => {
            nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(HomeWidget, { title: 'Validation widget' },
                React.createElement("div", null,
                    React.createElement(mui.Table, { fixedFooter: true, fixedHeader: true, selectable: false, style: { width: 1000 } },
                        React.createElement(TableBody, { displayRowCheckbox: false },
                            React.createElement(TableRow, null,
                                React.createElement(TableRowColumn, null, 'Name'),
                                React.createElement(TableRowColumn, null,
                                    React.createElement(mui.TextField, { hintText: 'firstName', value: this.state.firstName, errorText: this.state.fieldErrors.firstName, floatingLabelText: 'firstName', onChange: (val) => {
                                            this.setState({ firstName: val.target.value });
                                        }, multiLine: true }))),
                            React.createElement(TableRow, null,
                                React.createElement(TableRowColumn, null, 'Second Name'),
                                React.createElement(TableRowColumn, null,
                                    React.createElement(mui.TextField, { hintText: 'hintText secondName', value: this.state.secondName, errorText: this.state.fieldErrors.secondName, floatingLabelText: 'secondName', onChange: (val) => {
                                            this.setState({ secondName: val.target.value });
                                        }, multiLine: true }))),
                            React.createElement(TableRow, null,
                                React.createElement(TableRowColumn, null, 'Middle Name'),
                                React.createElement(TableRowColumn, null,
                                    React.createElement(mui.TextField, { hintText: 'middleName', value: this.state.middleName, errorText: this.state.fieldErrors.middleName, floatingLabelText: 'middleName', onChange: (val) => {
                                            this.setState({ middleName: val.target.value });
                                        }, multiLine: true }))))),
                    React.createElement(mui.RaisedButton, { label: 'Validate', primary: true, onTouchTap: () => this.validate() }),
                    React.createElement(mui.RaisedButton, { label: 'Clean', secondary: true, onTouchTap: () => this.clean(), style: styles.button, backgroundColor: red700 }))),
            React.createElement(Card, { expanded: this.state.expanded, onExpandChange: this.handleExpandChange },
                React.createElement(CardHeader, { title: "URL Avatar", subtitle: "Subtitle", avatar: okImg, actAsExpander: true, showExpandableButton: true }),
                React.createElement(CardText, null,
                    React.createElement(Toggle, { toggled: this.state.expanded, onToggle: this.handleToggle, labelPosition: "right", label: "This toggle controls the expanded state of the component." })),
                React.createElement(CardMedia, { expandable: true, overlay: React.createElement(CardTitle, { title: "Overlay title", subtitle: "Overlay subtitle" }) },
                    React.createElement("img", { src: spaceImg, alt: "" })),
                React.createElement(CardTitle, { title: "Card title", subtitle: "Card subtitle", expandable: true }),
                React.createElement(CardText, { expandable: true }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."),
                React.createElement(CardActions, null,
                    React.createElement(FlatButton, { label: "Expand", onTouchTap: this.handleExpand }),
                    React.createElement(FlatButton, { label: "Reduce", onTouchTap: this.handleReduce })))));
    }
    // Call triggerValidation() method
    validateInput(fieldName) {
        this.triggerValidation(fieldName);
        return this.state[fieldName] && this.state.fieldErrors[fieldName] == null;
    }
    // Set all fields value as empty string '' if current field value == null
    triggerValidation(fieldName) {
        if (!this.state[fieldName]) {
            this.setState({ [fieldName]: '' });
        }
        ;
    }
}
// Feedback message for validation
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
    if (constraint.regexp) {
        // if (!value.match(new RegExp(constraint.regexp)))
        //     return 'Input is not equals regex';
        if (!constraint.regexp.test(value))
            return 'Input is not equals regex';
    }
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