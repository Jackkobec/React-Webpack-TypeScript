import * as React from "react";
import * as mui from 'material-ui';
import {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import '../styles/style.css';

type Person = {
    firstName?: string;
    secondName?: string;
    middleName?: string;
}

type SampleState = {
    person: Person;
    error: Error;
    errorText?: string;
}

type Error = {
    firstNameError?: string;
    secondNameError?: string;
    middleNameError?: string;
}

export class ValidationSample extends React.Component<any, SampleState> {
    constructor(props) {
        super(props);
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
        }
    }

    render() {
        const labelStyle = {fontSize: 34, color: '#ff9900'};

        let {errorText, person, error} = this.state;

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td >
                            <label style={ {marginRight: '10px'} } htmlFor="input1">Имя</label>
                        </td>
                        <td>
                            <input id="input1" type="text"
                                   onChange={ (e) => this.setPersonFieldByEvent(e, 'firstName') }
                                   value={ person.firstName }/>
                        </td>
                        <td>
                            <h2>{ error.firstNameError }</h2>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <label style={ {marginRight: '10px'} } htmlFor="input2">Фамилия</label>
                        </td>
                        <td>
                            <input id="input2" type="text"
                                   onChange={ (e) => this.setPersonFieldByEvent(e, 'secondName') }
                                   value={ person.secondName }/>
                        </td>
                        <td>
                            <h2>{ error.secondNameError }</h2>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <label style={ {marginRight: '10px'} } htmlFor="input3">Отчество</label>
                        </td>
                        <td>
                            <input id="input3" type="text"
                                   onChange={ (e) => this.setPersonFieldByEvent(e, 'middleName') }
                                   value={ person.middleName }/>
                        </td>
                        <td>
                            <h2>{ error.middleNameError }</h2>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={ {marginTop: '10px'} }>
                    <input id="button1" type="button" value="Validate"
                           onClick={ this.validateFirstName }
                    />
                </div>
                <h2>{ errorText }</h2>

                <mui.RaisedButton label="Default"/>

                <mui.Table fixedFooter={ true } fixedHeader={ true } selectable={ false } style={ {width: 1000} }>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow selected={ true }>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                            <TableRowColumn>
                                <mui.SelectField
                                    floatingLabelText={ 'Hello world' }
                                    floatingLabelStyle={ labelStyle }
                                />
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </mui.Table>
            </div >
        );
    }

    setPersonField = (value, field) => {
        /* let person = this.state.person;
         person[field] = value;

         this.setState({person});*/

        this.setState((prevState) => {
            return {person: {...prevState.person, [field]: value}}
        });
    };

    setPersonFieldByEvent = (e, field) => {
        let value = (e.target as HTMLInputElement).value;

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

    validateFirstName = () => {
        if (this.state.person.firstName.length >= 7
            || this.state.person.secondName.length >= 7
            || this.state.person.middleName.length >= 7) {
            this.setState((prevState) => {
                return {error: {...prevState.error, firstNameError: 'firstNameError'}}
            });
        } else {
            this.setState((prevState) => {
                return {error: {...prevState.error, firstNameError: 'OK'}}
            });
        }
    };

    //
}
