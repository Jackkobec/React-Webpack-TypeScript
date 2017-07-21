import * as React from "react";
import '../../styles/bootstrap-native.css'
// import {Button, ButtonToolbar, Col, Grid, Modal, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

require('../../styles/bootstrap-native.css');

export class BootstrapNativeTest extends React.Component<any, any> {
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
                <div className="container">
                    <div className="row">


                        <h1>Creative User Profile <small>#User-Interface #User #Profile #jquery #Social #contact #accordion</small></h1>

                        <ul id="accordion" className="accordion">
                            <li>
                                <div className="col col_4 iamgurdeep-pic">
                                    <img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"/>
                                        <div className="edit-pic">
                                            <a href="https://web.facebook.com/iamgurdeeposahan" target="_blank" className="fa fa-facebook"/>
                                            <a href="https://www.instagram.com/gurdeeposahan/" target="_blank" className="fa fa-instagram"/>
                                            <a href="https://twitter.com/gurdeeposahan1" target="_blank" className="fa fa-twitter"/>
                                            <a href="https://plus.google.com/u/0/105032594920038016998" target="_blank" className="fa fa-google"/>



                                        </div>
                                        <div className="username">
                                            <h2>Gurdeep Osahan  <small><i className="fa fa-map-marker"></i> India (Punjab)</small></h2>
                                            <p><i className="fa fa-briefcase"></i> Web Design and Development.</p>

                                            <a href="https://web.facebook.com/iamgurdeeposahan" target="_blank" className="btn-o"> <i className="fa fa-user-plus"></i> Add Friend </a>
                                            <a href="https://www.instagram.com/gurdeeposahan/" target="_blank"  className="btn-o"> <i className="fa fa-plus"></i> Follow </a>


                                            <ul className="nav navbar-nav">
                                                <li className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-ellipsis-v pull-right"/></a>
                                                    <ul className="dropdown-menu pull-right">
                                                        <li><a href="#">Video Call <i className="fa fa-video-camera"/></a></li>
                                                        <li><a href="#">Poke <i className="fa fa-hand-o-right"></i></a></li>
                                                        <li><a href="#">Report <i className="fa fa-bug"></i></a></li>
                                                        <li><a href="#">Block <i className="fa fa-lock"></i></a></li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>

                                </div>

                            </li>
                            <li>
                                <div className="link"><i className="fa fa-globe"></i>About<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><a href="#"><i className="fa fa-calendar left-none"></i> Date of Birth : 03/09/1994</a></li>
                                    <li><a href="#">Address : INDIA,Punjab</a></li>
                                    <li><a href="mailto:gurdeepjawaddi94@gmail.com">Email : gurdeepjawaddi94@gmail.com</a></li>
                                    <li><a href="#">Phone : +91 85680-79956</a></li>
                                </ul>
                            </li>
                            <li className="default open">
                                <div className="link"><i className="fa fa-code"></i>Professional Skills<i className="fa fa-chevron-down"></i></div>
                                <ul className="submenu">
                                    <li><a href="#"><span className="tags">Adobe Photoshop</span> <span className="tags">Corel Draw</span> <span className="tags">CSS</span> <span className="tags">Css 3</span>
                                        <span className="tags">Graphic Design</span> <span className="tags">HTML</span> <span className="tags">HTML5</span> <span className="tags">JavaScript</span>
                                        <span className="tags">Twitter bootstrap</span> <span className="tags">bootstrap</span> <span className="tags">User Interface Design</span> <span className="tags">Wordpress</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="link"><i className="fa fa-picture-o"></i>Photos <small>1,120</small><i className="fa fa-chevron-down"></i></div>
                        <ul className="submenu">
                            <li className="photosgurdeep"><a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                            </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>

                                <a className="view-all" href="https://web.facebook.com/iamgurdeeposahan" target="_blank" >15+
                                </a>

                            </li>
                        </ul>
                    </li>
                    <li><div className="link"><i className="fa fa-users"></i>Friends <small>1,053</small><i className="fa fa-chevron-down"></i></div>
                        <ul className="submenu">
                            <li className="photosgurdeep"><a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                            </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>
                                <a href="#"><img className="img-responsive iamgurdeeposahan" alt="iamgurdeeposahan" src="http://www.webncc.in/images/gurdeeposahan.jpg"></img>
                                </a>

                                <a className="view-all" href="https://web.facebook.com/iamgurdeeposahan" target="_blank">50+
                                </a>

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>





    </div>
        </div>
        )
    }

}
