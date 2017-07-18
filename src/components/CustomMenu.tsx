import * as React from "react";
import * as mui from 'material-ui';

require('../styles/custom_menu.scss')

export class CustomMenu extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    /*Это нужно чтобы работал переход по клику в стиле:
     <a onClick={ () => { (this.context as any).router.push('/'); }}>Contact</a>
     */
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div>

                <div id="container">
                    <nav>
                        <ul>
                            <li><a href="/validation">Home</a></li>
                            <li><a href="#">WordPress</a>
                                <ul>
                                    <li><a href="#">Themes</a></li>
                                    <li><a href="#">Plugins</a></li>
                                    <li><a href="#">Tutorials</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Web Design</a>
                                <ul>
                                    <li><a href="#">Resources</a></li>
                                    <li><a href="#">Links</a></li>
                                    <li><a href="#">Tutorials</a>
                                        <ul>
                                            <li><a href="#">HTML/CSS</a></li>
                                            <li><a href="#">jQuery</a></li>
                                            <li><a href="#">Other</a>
                                                <ul>
                                                    <li><a href="#">Stuff</a></li>
                                                    <li><a href="#">Things</a></li>
                                                    <li><a href="#">Other Stuff</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/bootstrap">Graphic Design</a></li>
                            <li><a href="/cv">Inspiration</a></li>
                            {/*Еще один способ для переходя по клику на другую страницу.
                             Чтобы работало в конструкторе нужно добавить:
                             static contextTypes = {
                             router: React.PropTypes.object.isRequired
                             };
                             */}
                            <li><a onClick={ () => {
                                (this.context as any).router.push('/');
                            }}>Contact</a></li>
                            <li><a href="/test">About</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}