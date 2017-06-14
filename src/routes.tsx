import * as React from "react";

import { Router, Route, browserHistory } from 'react-router';

import { Hello } from "./components/Hello";
import {Test} from "./test";

const App = () => <Router history={ browserHistory }>
    <Route path="/" component={ Hello }/>
    <Route path="/test" component={ Test }/>
</Router>;

export default App;