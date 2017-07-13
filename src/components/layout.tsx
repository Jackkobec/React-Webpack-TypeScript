import * as React from "react";

import * as h from 'material-ui/styles';

import {
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {CSSProperties} from "react";
import Typography from 'material-ui/styles/typography';

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

const MainBar = ({loggedIn}) => {
    const styles = {
        container: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            margin: 6,
            paddingTop: 0,
            letterSpacing: 0,
            lineHeight: '64px',
        } as CSSProperties,
        title: {
            fontSize: 22,
            fontWeight: Typography.fontWeightNormal,
        } as CSSProperties,
        divider: {
            borderLeft: '1px solid rgba(255,255,255,0.35)',
            margin: '0 20px',
            fontSize: 20
        } as CSSProperties,
        rightButton: {
            alignSelf: 'flex-end'
        } as CSSProperties,
        menuButton: {
            imageInput: {
                // cursor: 'pointer',
                // width: '100%',
                // opacity: 0,
            },
            alignSelf: 'flex-end'
        } as CSSProperties
    };
}

interface LayoutProps {
    loggedIn: boolean;
    loading: boolean;
}

export class Layout extends React.Component<LayoutProps, any> {
    constructor(props) {
        super(props);

        this.state = {}
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
                imageInput: {
                    // cursor: 'pointer',
                    // position: 'absolute',
                    // top: 0,
                    // bottom: 0,
                    // right: 0,
                    // left: 0,
                    // width: '100%',
                    // opacity: 0,
                },
                // alignSelf: 'flex-end'
            }
        };

        return <h.MuiThemeProvider muiTheme={ asiaCreditBankTheme }>

            <div style={ styles.leftGutter }>
                <div style={ styles.mainView }>
                    { this.props.children }
                </div>
            </div>

        </h.MuiThemeProvider>
    }

}