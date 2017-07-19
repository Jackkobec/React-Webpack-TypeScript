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
import TabsExampleControlled from "./TabsExampleControlled";
import AppBarExampleComposition from "./Login";
import {CustomMenu} from "./CustomMenu";
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip, Grid, Row, Col, Carousel} from "react-bootstrap";
import {BootstrapNativeTest} from "./bootstrap/BootstrapNativeTest";

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
                margin: '200px auto',
                width: 1280,/*Ширина элементов на странице, ширина содержимого*/
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

            <div>
                {/*Тут мы можем отрендерить(отрисовать) компоненты, которые будут общие для всех страниц сайта,
                 например меню или тулбар*/}
                {/*Test common item*/}
                {/*<TabsExampleControlled />*/}

                {/*<AppBarExampleComposition />*/}

                {/*Общие компоненты для всего сайта по сути - всех вложенных роутов*/}

                {/*Carousel*/}
                { carouselInstance }

                {/*Свое меню*/}
                <CustomMenu />

               {/* Native bootstrap
                <BootstrapNativeTest />*/}

                <div style={ styles.leftGutter }>
                    <div style={ styles.mainView }>
                        { this.props.children }
                    </div>
                </div>

            </div>
        </h.MuiThemeProvider>
    }
}

/*Carousel*/
const carouselCCCPImg = require("../images/cccp.jpg");
const carouselCCCP2Img = require("../images/cccp2.jpg");
const carouselCCCP3Img = require("../images/cccp3.jpg");

const carouselInstance = (
    <Carousel>
        <Carousel.Item>
            <img width={1920} height={500} alt="1920x500" src={ carouselCCCPImg }/>
            <Carousel.Caption>
                <h3>СССР</h3>
                <p>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width={1920} height={500} alt="1920x500" src={ carouselCCCP2Img }/>
            <Carousel.Caption>
                <h3>СССР</h3>
                <p>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width={1920} height={500} alt="1920x500" src={ carouselCCCP3Img }/>
            <Carousel.Caption>
                <h3>СССР</h3>
                <p>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);