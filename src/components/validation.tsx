import * as React from "react";
import * as mui from 'material-ui';
import {
    Card,
    CardActions, CardHeader, CardMedia, CardText, CardTitle, FlatButton, FontIcon, TableBody, TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn, Toggle
} from 'material-ui';
import '../styles/style.css';
import {red700} from "material-ui/styles/colors";
import {get} from "../config/backend";

// Declare constant for image in the path: ../images/oboi-kosmos-57.jpg
const spaceImg = require('../images/oboi-kosmos-57.jpg');
const okImg = require('../images/ok-128.jpg')

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
    fieldErrors?: Fields,
    expanded: boolean; // card view
}

const constraints = {
    firstName: {
        required: true,
        maxLength: 22,
        regexp: new RegExp('^[0-9A-Za-zА-Яа-я]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    },
    secondName: {
        required: true,
        maxLength: 22,
        regexp: new RegExp('^[0-9A-Za-zА-Яа-я]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    },
    middleName: {
        required: true,
        maxLength: 22,
        regexp: new RegExp('^[0-9A-Za-zА-Яа-я]+$') // Регекспы - это не строка, задаются так или /^[0-9]+$/
    }
};

export class Validation extends React.Component<any, State> {
    constructor() {
        super();

        this.state = {
            fieldErrors: {},

            expanded: false // card view
        };

        /* this.getById = this.getById.bind(this);
         this.update = this.update.bind(this);
         this.validate = this.validate.bind(this);*/
    }

    componentWillMount() {
        get('/api/users/fio')
            .then((fioDto: Fields) => {
                this.setState({ firstName: fioDto.firstName, secondName: fioDto.secondName, middleName: fioDto.middleName })
            })
            .catch(e => console.log(e));
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
    private checkValidationOnBtnPress(nextState) {
        [
            'firstName', 'secondName', 'middleName'
        ].forEach(fieldName => {
            nextState.fieldErrors[fieldName] = message(constraints[fieldName], nextState[fieldName]);
        });
    }

    handleExpandChange = (expanded) => { // card view
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => { // card view
        this.setState({expanded: toggle});
    };

    handleExpand = () => { // card view
        this.setState({expanded: true});
    };

    handleReduce = () => { // card view
        this.setState({expanded: false});
    };

    render() {
        return (
            <div style={ {backgroundColor: '#ffc900' } }>
                {/*Home widget*/}
                <HomeWidget title={ 'Validation widget' } >
                    <div>
                        {/*Table*/}
                        <mui.Table fixedFooter={true} fixedHeader={ true } selectable={ false }
                                   style={ {width: 1000, backgroundColor: '#ffc900'} }>

                            <TableBody displayRowCheckbox={ false }>

                                <TableRow>
                                    <TableRowColumn>{ 'Name' }</TableRowColumn>
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
                                    <TableRowColumn>{ 'Second Name' }</TableRowColumn>
                                    <TableRowColumn>
                                        <mui.TextField hintText={ 'hintText secondName' }
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
                                    <TableRowColumn>{ 'Middle Name' }</TableRowColumn>
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
                        {/*Table end*/}
                        {/*Buttons block*/}
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
                        {/*Buttons block end*/}
                    </div>
                </HomeWidget>
                {/*Home widget end*/}

                {/*Card view*/}
                {/*avatar="https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png"*/}
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                        avatar={ okImg }
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText>
                        <Toggle
                            toggled={this.state.expanded}
                            onToggle={this.handleToggle}
                            labelPosition="right"
                            label="This toggle controls the expanded state of the component."
                        />
                    </CardText>
                    <CardMedia
                        expandable={true}
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
                    >
                        <img src={ spaceImg } alt=""/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" expandable={true}/>
                    <CardText expandable={true}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Expand" onTouchTap={this.handleExpand}/>
                        <FlatButton label="Reduce" onTouchTap={this.handleReduce}/>
                    </CardActions>
                </Card>
                {/*Card view end*/}
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
            //todo тут вызов методв обращения в бэк
            console.log("success");
        } else {
            //TODO fail

            let nextState = Object.assign({}, this.state);
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
        }
        ;
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

    if (value.length >= 22) return 'length error!!'

    if (constraint.regexp) {
        // if (!value.match(new RegExp(constraint.regexp)))
        //     return 'Input is not equals regex';
        if (!constraint.regexp.test(value))
            return 'Input is not equals regex';
    }
}

/** For use on the HomePage only */
export const HomeWidget = ({title, progress = undefined, children = undefined}: { title: string, progress?: React.ReactElement<any>, children?: React.ReactElement<any> }) => (
    <mui.Paper style={ {marginBottom: 20, backgroundColor: '#ffc900'} }>
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