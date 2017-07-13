import * as React from "react";
import * as mui from 'material-ui';
import {FontIcon, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
import '../styles/style.css';
import {red700} from "material-ui/styles/colors";

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

// Fields
interface Fields {
    firstName?: string;
    secondName?: string;
    middleName?: string;
}

// State
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
        maxLength: 7,
        regexp: new RegExp('^[0-9]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    },
    middleName: {
        required: true,
        maxLength: 7,
        regexp: new RegExp('^[0-9]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
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

    private checkValidationOnBtnPress(nextState) {
        [
            'firstName', 'secondName', 'middleName'
        ].forEach(fieldName => {
                nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);
        });
    }

    render() {
        return (
            <div>
                <HomeWidget title={ 'Validation widget' }>
                    <div>
                        <mui.Table fixedFooter={true} fixedHeader={ true } selectable={ false }
                                   style={ {width: 1000} }>

                            <TableBody displayRowCheckbox={ false }>

                                <TableRow>
                                    <TableRowColumn>{ 'firstName' }</TableRowColumn>
                                    <TableRowColumn>
                                        <mui.TextField hintText={ 'firstName' }
                                                       value={ this.state.firstName}
                                                       errorText={ this.state.fieldErrors.firstName }
                                                       floatingLabelText={ 'firstName' }
                                                       onChange={(val) => {
                                                           this.setState({firstName: (val.target as HTMLInputElement).value});
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
                            secondary={true}
                            onTouchTap={ () => this.clean() }
                            style={ styles.button }
                            backgroundColor={ red700 }

                        />
                    </div>
                </HomeWidget>
            </div>
        )
    }

    // Delegate fields name for cleanInput() method
    clean = () => {
        this.setState({firstName: '', secondName: '', middleName: ''}, () => {
            this.setState({fieldErrors: []});
        });
    };

    // Delegate fields name for validateInput() method
    validate = () => {
        let firstName = this.validateInput('firstName');
        let secondName = this.validateInput('secondName');
        let middleName = this.validateInput('middleName');

        if (firstName && secondName && middleName) {
            //TODO success
            console.log("success");
        } else {
            //TODO fail

            let nextState = Object.assign( {}, this.state);
            this.checkValidationOnBtnPress(nextState);
            this.setState(nextState);

            console.log("fail");
        }

    };

    // Call triggerValidation() method
    validateInput(fieldName) {
        this.triggerValidation(fieldName);
        return this.state[fieldName] && this.state.fieldErrors[fieldName] == null;
    }

    // Set all fields value as empty string '' if current field value == null
    triggerValidation(fieldName) {
        if (!this.state[fieldName]) {
            this.setState({[fieldName]: ''});
        };
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