import * as React from "react";

import {browserHistory, Route, Router} from "react-router";

import {Test} from "./test"; //Импорт компонента из проекта
import {Users} from "./components/Users"; //Импорт компонента из проекта
import {UserDetails} from "./components/UserDetails"; //Импорт компонента из проекта
import {UserDetailList} from "./components/UserDatailsList";
import {CommonList} from "./components/CommonList";
import {Mans} from "./components/Man";
import {Girls} from "./components/Girl";
import {ValidationSample} from "./components/ValidationSample";
import {Layout} from "./components/layout";
import {Validation} from "./components/validation";
import {BootstrapTest} from "./components/BootsprapTest";
import {BootstrapNativeTest} from "./components/bootstrap/BootstrapNativeTest"; //Импорт компонента из проекта

/*
 Сделано для того, чтобы пользователь при переходе на url-ы во время работы приложения
 находился внутри приложения, а не попадал на внешние url
 */

/*
 Если мы хотим чтобы у нас на всех страницах были одни и те же уже готовые компоненты, мы можем добавить их в корневой роут,
 а все остальные роуты заврнуть в него:
 <Route path="/" component={ Layout }>
    <Route path="/test" component={ Test }/>
 </Route>
 */
const App = () => <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
        <Route path="/test" component={ Test }/>
        <Route path="/users" component={ Users }/>
        <Route path="/users/detail/:userId" component={ UserDetails }/>
        <Route path="/users/detail-list" component={ UserDetailList }/>
        <Route path="/validation-sample" component={ ValidationSample }/>
        <Route path="/validation" component={ Validation }/>
        <Route path="/bootstrap" component={ BootstrapTest }/>

    </Route>

    <Route path="/cv" component={ BootstrapNativeTest }/>

    <Route path="/handbooks" component={ CommonList }>
        <Route path="users" component={ Users }/>
        <Route path="mans" component={ Mans }/>
        <Route path="girls" component={ Girls }/>
    </Route>


</Router>;

export default App;