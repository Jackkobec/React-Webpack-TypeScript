import * as React from "react";
import * as h from 'material-ui/styles';
import { white, darkBlack, fullBlack, } from 'material-ui/styles/colors';
import spacing from 'material-ui/styles/spacing';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Typography from 'material-ui/styles/typography';
const asiaCreditBankTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Myriad ProKaz, Myriad Pro, Verdana, Tahoma, sans-serif',
    palette: {
        primary1Color: '#ff1300',
        primary2Color: '#ffcc66',
        primary3Color: '#996633',
        accent1Color: '#1b3166',
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
const MainBar = ({ loggedIn }) => {
    const styles = {
        container: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            margin: 6,
            paddingTop: 0,
            letterSpacing: 0,
            lineHeight: '64px',
        },
        title: {
            fontSize: 22,
            fontWeight: Typography.fontWeightNormal,
        },
        divider: {
            borderLeft: '1px solid rgba(255,255,255,0.35)',
            margin: '0 20px',
            fontSize: 20
        },
        rightButton: {
            alignSelf: 'flex-end'
        },
        menuButton: {
            imageInput: {},
            alignSelf: 'flex-end'
        }
    };
};
export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const styles = {
            mainView: {
                margin: '20px auto',
                width: 1040,
            },
            leftGutter: {
                transition: 'all 0.2s ease-out 0.1s',
                marginLeft: undefined,
            },
            menuButton: {
                imageInput: {},
            }
        };
        return React.createElement(h.MuiThemeProvider, { muiTheme: asiaCreditBankTheme },
            React.createElement("div", { style: styles.leftGutter },
                React.createElement("div", { style: styles.mainView }, this.props.children)));
    }
}
//# sourceMappingURL=layout.js.map