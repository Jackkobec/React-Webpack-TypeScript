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
import {Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip, Grid, Row, Col, Carousel} from "react-bootstrap";
import {BootstrapNativeTest} from "./bootstrap/BootstrapNativeTest";
import {AudioComponent} from "../audio/AudioComponent";
import {AlertLoop} from "../audio/AlertLoop";

const asiaCreditBankTheme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Myriad ProKaz, Myriad Pro, Verdana, Tahoma, sans-serif',
    palette: {
        primary1Color: '#e61400',
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
};

interface LayoutProps {
    loggedIn: boolean;
    loading: boolean;
}

export class Layout extends React.Component<LayoutProps, any> {
    constructor(props) {
        super(props);

        this.state = {}
    }

    alertLoop() {
        <AudioComponent />
        for (let i = 0; i < 77; i++) {
            alert("Дослушайте гимн!")
        }
    }

    soundClick() {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'http://best-muzon.cc/dl/online/8IpXfrSqV_ms7RAI89_-ZQ/1500542054/songs12/2017/06/olga-buzova-malopolovin-(best-muzon.cc).mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
    }

    render() {
        const styles = {
            mainView: {
                margin: '200px auto',
                width: 1280, /*Ширина элементов на странице, ширина содержимого*/
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
            },

            carouselDivStyle: {
                // height: 0, // Если height: 0 - будет пересекаться с остальными элементами.
            }
        };

        // window.onload = () => this.alertLoop();

        return <h.MuiThemeProvider muiTheme={ asiaCreditBankTheme }>

            <div>
                {/*Тут мы можем отрендерить(отрисовать) компоненты, которые будут общие для всех страниц сайта,
                 например меню или тулбар*/}
                {/*Test common item*/}
                {/*<TabsExampleControlled />*/}

                {/*<AppBarExampleComposition />*/}

                {/*Общие компоненты для всего сайта по сути - всех вложенных роутов*/}

                {/*Carousel*/}
                {/*Added div with styles for carousel*/}
                <div style={ styles.carouselDivStyle }>
                    { carouselInstance }
                </div>

                {/*Свое меню*/}
                <CustomMenu />

                {/*<audio controls>*/}
                {/*<source src="../audio/cccp.mp3">*/}
                {/*Тег audio не поддерживается вашим браузером.</source>*/}
                {/*</audio>*/}

                 {/*<audio src="http://best-muzon.cc/dl/online/8IpXfrSqV_ms7RAI89_-ZQ/1500542054/songs12/2017/06/olga-buzova-malopolovin-(best-muzon.cc).mp3"
                 autoPlay={ true } controls={ true }></audio>*/}
                {/* <p onClick={ () => this.soundClick() }>Кликни по этому тексту</p>*/}

                {/*Background audio + player*/}
                <AudioComponent />

                {/*<AlertLoop />*/}

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

// const cccpAnthem = require("../audio/cccp.mp3");

/*Carousel*/
const carouselCCCPImg = require("../images/cccp_1920x1200.jpg");
const carouselCCCP2Img = require("../images/cccp2_1920x1200.jpg");
const carouselCCCP3Img = require("../images/cccp3_2133x1200.jpg");
const carouselCCCP4Img = require("../images/testMap.png");

const carouselInstance = (
    <Carousel pauseOnHover={ false }>
        <Carousel.Item>
            <img width={2133} height={1200} alt="2133x1200" src={ carouselCCCP2Img }/>
            <Carousel.Caption>
                <a style={ {color: '#ffc900'} } href="/validation">
                    <h3 style={ {color: '#ffc900', hover:{ background:  '#ffc900', } } }>СССР</h3>
                </a>
                <p style={ {color: '#ffc900'} }>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width={2133} height={1200} alt="2133x1200" src={ carouselCCCPImg }/>
            <Carousel.Caption>
                <a style={ {color: '#ffc900'} } href="/validation">
                    <h3 style={ {color: '#ffc900', hover:{ background:  '#ffc900', } } }>СССР</h3>
                </a>
                <p style={ {color: '#ffc900'} }>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img width={2133} height={1200} alt="2133x1200" src={ carouselCCCP3Img }/>
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width={2133} height={1200} alt="2133x1200" src={ carouselCCCP4Img }/>
            <Carousel.Caption>
                <a style={ {color: '#ffc900'} } href="/validation">
                    <h3 style={ {color: '#ffc900', hover:{ background:  '#ffc900', } } }>СССР</h3>
                </a>
                <p style={ {color: '#ffc900'} }>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
            </Carousel.Caption>
        </Carousel.Item>
        {/*<Carousel.Item>
         <img width={1920} height={1200} alt="1920x1200" src={ carouselCCCP3Img }/>
         <Carousel.Caption>
         <h3>СССР</h3>
         <p>Союз нерушимый республик свободных навеки прославил Великую Русь</p>
         </Carousel.Caption>
         </Carousel.Item>*/}
    </Carousel>
);
