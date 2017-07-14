import * as React from "react";
import * as mui from 'material-ui';
import { TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import '../styles/style.css';
export class ValidationSample extends React.Component {
    constructor(props) {
        super(props);
        this.setPersonField = (value, field) => {
            /* let person = this.state.person;
             person[field] = value;
    
             this.setState({person});*/
            this.setState((prevState) => {
                return { person: Object.assign({}, prevState.person, { [field]: value }) };
            });
        };
        this.setPersonFieldByEvent = (e, field) => {
            let value = e.target.value;
            this.setPersonField(value, field);
        };
        /*validate = () => {
         if (this.state.person.firstName.length >= 7) {
         this.setState((prevState) => {
         return {error: {...prevState.error, firstNameError: 'firstNameError'}}
         });
         } else {
         this.setState((prevState) => {
         return {error: {...prevState.error, firstNameError: 'OK'}}
         });
         }
         };*/
        this.validateFirstName = () => {
            if (this.state.person.firstName.length >= 7
                || this.state.person.secondName.length >= 7
                || this.state.person.middleName.length >= 7) {
                this.setState((prevState) => {
                    return { error: Object.assign({}, prevState.error, { firstNameError: 'firstNameError' }) };
                });
            }
            else {
                this.setState((prevState) => {
                    return { error: Object.assign({}, prevState.error, { firstNameError: 'OK' }) };
                });
            }
        };
        this.state = {
            errorText: '',
            person: {
                firstName: '',
                secondName: '',
                middleName: ''
            },
            error: {
                firstNameError: '',
                secondNameError: '',
                middleNameError: ''
            }
        };
    }
    render() {
        const labelStyle = { fontSize: 34, color: '#ff9900' };
        let { errorText, person, error } = this.state;
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("label", { style: { marginRight: '10px' }, htmlFor: "input1" }, "\u0418\u043C\u044F")),
                        React.createElement("td", null,
                            React.createElement("input", { id: "input1", type: "text", onChange: (e) => this.setPersonFieldByEvent(e, 'firstName'), value: person.firstName })),
                        React.createElement("td", null,
                            React.createElement("h2", null, error.firstNameError))),
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("label", { style: { marginRight: '10px' }, htmlFor: "input2" }, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F")),
                        React.createElement("td", null,
                            React.createElement("input", { id: "input2", type: "text", onChange: (e) => this.setPersonFieldByEvent(e, 'secondName'), value: person.secondName })),
                        React.createElement("td", null,
                            React.createElement("h2", null, error.secondNameError))),
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("label", { style: { marginRight: '10px' }, htmlFor: "input3" }, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E")),
                        React.createElement("td", null,
                            React.createElement("input", { id: "input3", type: "text", onChange: (e) => this.setPersonFieldByEvent(e, 'middleName'), value: person.middleName })),
                        React.createElement("td", null,
                            React.createElement("h2", null, error.middleNameError))))),
            React.createElement("div", { style: { marginTop: '10px' } },
                React.createElement("input", { id: "button1", type: "button", value: "Validate", onClick: this.validateFirstName })),
            React.createElement("h2", null, errorText),
            React.createElement(mui.RaisedButton, { label: "Default" }),
            React.createElement(mui.Table, { fixedFooter: true, fixedHeader: true, selectable: false, style: { width: 1000 } },
                React.createElement(TableHeader, null,
                    React.createElement(TableRow, null,
                        React.createElement(TableHeaderColumn, null, "ID"),
                        React.createElement(TableHeaderColumn, null, "Name"),
                        React.createElement(TableHeaderColumn, null, "Status"))),
                React.createElement(TableBody, null,
                    React.createElement(TableRow, { selected: true },
                        React.createElement(TableRowColumn, null, "1"),
                        React.createElement(TableRowColumn, null, "John Smith"),
                        React.createElement(TableRowColumn, null, "Employed"),
                        React.createElement(TableRowColumn, null,
                            React.createElement(mui.SelectField, { floatingLabelText: 'Hello world', floatingLabelStyle: labelStyle })))))));
    }
}
//# sourceMappingURL=ValidationSample.js.map