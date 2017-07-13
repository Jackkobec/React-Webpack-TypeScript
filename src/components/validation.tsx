import * as React from "react";
import * as mui from 'material-ui';
import {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import '../styles/style.css';

interface Fields {
    firstName?: string;
    secondName?: string;
    middleName?: string;
}

interface State extends Fields {
    fieldErrors?: Fields;
}

const constraints = {
    firstName: {
        required: true,
        maxLength: 7,
        regexp: new RegExp('^[0-9]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
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


export class Validation extends React.Component<any, State> {

    constructor() {
        super();

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
        return (
            <div>
                <HomeWidget title={ 'Validation widget' }>
                    <div>
                        <mui.Table fixedFooter={true} fixedHeader={ true } selectable={ false }
                                   style={ { width: 1000 } }>

                            <TableBody displayRowCheckbox={ false }>

                                <TableRow>
                                    <TableRowColumn>{ 'firstName' }</TableRowColumn>
                                    <TableRowColumn>
                                        <mui.TextField hintText={ 'firstName' }
                                                       value={ this.state.firstName}
                                                       errorText={ this.state.fieldErrors.firstName }
                                                       floatingLabelText={ 'firstName' }
                                                       onChange={(val) => {
                                                           this.setState({ firstName: (val.target as HTMLInputElement).value });
                                                       }}
                                                       multiLine={ true }
                                        />
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>{ 'secondName' }</TableRowColumn>
                                    <TableRowColumn>
                                        <mui.TextField hintText={ 'secondName' }
                                                       value={ this.state.secondName}
                                                       errorText={ this.state.fieldErrors.secondName }
                                                       floatingLabelText={ 'secondName' }
                                                       onChange={(val) => {
                                                           this.setState({secondName: (val.target as HTMLInputElement).value});
                                                       }}
                                                       multiLine={ true }
                                        />
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>{ 'middleName' }</TableRowColumn>
                                    <TableRowColumn>
                                        <mui.TextField hintText={ 'middleName' }
                                                       value={ this.state.middleName}
                                                       errorText={ this.state.fieldErrors.middleName }
                                                       floatingLabelText={ 'middleName' }
                                                       onChange={(val) => {
                                                           this.setState({middleName: (val.target as HTMLInputElement).value});
                                                       }}
                                                       multiLine={ true }
                                        />
                                    </TableRowColumn>
                                </TableRow>

                            </TableBody>
                        </mui.Table>
                        <mui.RaisedButton
                            label='Validate'
                            primary={ true }
                            onTouchTap={ () => this.validate() }
                        />

                        <mui.RaisedButton
                            label='Clean'
                            primary={ true }
                            onTouchTap={ () => this.clean() }
                        />
                    </div>
                </HomeWidget>
            </div>
        )
    }

    // Delegate fields name for cleanInput() method
    clean = () => {
        let firstName = this.cleanInput('firstName');
        let secondName = this.cleanInput('secondName');
        let middleName = this.cleanInput('middleName');
    };

    // Call triggerClean() method
    cleanInput(fieldName) {
        this.triggerClean(fieldName);
    }

    // Set all fields value as empty string '' if current field value != null
    triggerClean(fieldName) {
        if (this.state[fieldName] != null) {
            this.setState((a, b) => {
                return {[fieldName]: ''}
            });
        }
    }

    // Delegate fields name for validateInput() method
    validate = () => {
        let firstName = this.validateInput('firstName');
        let secondName = this.validateInput('secondName');
        let middleName = this.validateInput('middleName');

    };

    // Call triggerValidation() method
    validateInput(fieldName) {
        this.triggerValidation(fieldName);
        return this.state[fieldName] && this.state.fieldErrors[fieldName] == null;
    }

    // Set all fields value as empty string '' if current field value == null
    triggerValidation(fieldName) {
        if (this.state[fieldName] == null) {
            this.setState((a, b) => {
                return {[fieldName]: ''}
            });
        }
    }

}

// Custom constraint names and types
export type Constraint = {
    required?: boolean;
    regexp?: RegExp;
    regexpr?: string;
    email?: boolean;
    account?: boolean;
    taxCode?: boolean;
    greaterThanZero?: boolean;
    maxLength?: number;
    minLength?: number;
    length?: number;
    regExchangeRate?: RegExp;
    password?: boolean;
    amount?: boolean;
    amountNotNull?: boolean; // uses for maskedAmount
    selected?: boolean; // filter invalid selection (none)
    iban?: boolean;
    hasProperty?: string;
};

// Feedback message for validation
export function message(constraint: Constraint, value: string, regexSpecialTranslation?: string) {
    if (!constraint) return;

    if (value === undefined) return 'value === undefined';

    if (value == null) value = '';

    if (value.length == 0) return 'value.length == 0';

    if (value.length >= 7) return 'length error!!'

    if (constraint.regexp) {
        // if (!value.match(new RegExp(constraint.regexp)))
        //     return 'Input is not equals regex';
        if (!constraint.regexp.test(value))
            return 'Input is not equals regex';
    }
}

/** For use on the HomePage only */
export const HomeWidget = ({title, progress = undefined, children = undefined}: { title: string, progress?: React.ReactElement<any>, children?: React.ReactElement<any> }) => (
    <mui.Paper style={ {marginBottom: 20} }>
        <Header text={ title }/>
        { progress }
        <Content>{ children }</Content>
    </mui.Paper>
);

export const Header = ({text, children, buttons, style = {}}: { text?: string, children?: any, style?: Object, buttons?: React.ReactFragment }) => {
    return (
        <div style={ style } className="viewHeader">
            { text && <div className="text"> { text }</div> }
            { children }
            { buttons && <div className="buttons">{ buttons }</div> }
        </div>
    );
};

export const Content = ({padding = 20, children, className}: { padding?: number, children?: any, className?: string }) => (
    <div style={ {padding} } className={ className }>
        { children }
    </div>
);