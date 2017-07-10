import * as React from "react";

import {browserHistory, Route, Router} from "react-router";

import {Test} from "./test"; //Импорт компонента из проекта
import {Hello} from "./components/Hello"; //Импорт компонента из проекта
import {Users} from "./components/Users"; //Импорт компонента из проекта
import {UserDetails} from "./components/UserDetails"; //Импорт компонента из проекта
import {UserDetailList} from "./components/UserDatailsList";
import {CommonList} from "./components/CommonList";
import {Mans} from "./components/Man";
import {Girls} from "./components/Girl";
import {ValidationSample} from "./components/ValidationSample";
import {Layout} from "./components/layout"; //Импорт компонента из проекта


const App = () => <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
        <Route path="/test" component={ Test }/>
        <Route path="/users" component={ Users }/>
        <Route path="/users/detail/:userId" component={ UserDetails }/>
        <Route path="/users/detail-list" component={ UserDetailList }/>
        <Route path="/validation-sample" component={ ValidationSample }/>
    </Route>

    <Route path="/handbooks" component={ CommonList }>
        <Route path="users" component={ Users }/>
        <Route path="mans" component={ Mans }/>
        <Route path="girls" component={ Girls }/>
    </Route>


</Router>;

export default App;