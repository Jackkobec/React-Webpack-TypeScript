import * as React from "react";

import * as h from 'material-ui/styles';

import {
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const asiaCreditBankTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Myriad ProKaz, Myriad Pro, Verdana, Tahoma, sans-serif',
    palette: {
        primary1Color: '#f67828',
        primary2Color: '#ffcc66',
        primary3Color: '#996633',
        accent1Color: '#666666',
        accent2Color: '#cccccc',
        accent3Color: '#666666',
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: '#dddddd',
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: '#ffcc66',
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    }
});

export class Layout extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return <h.MuiThemeProvider muiTheme={ asiaCreditBankTheme }>
            <div>
                { this.props.children }
            </div>
        </h.MuiThemeProvider>
    }
}