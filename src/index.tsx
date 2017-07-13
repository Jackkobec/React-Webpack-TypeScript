import * as React from "react";
import * as ReactDOM from "react-dom";

require('react-tap-event-plugin')();

import App from './routes';

ReactDOM.render(
    <App/>,
    document.getElementById("example")
);

