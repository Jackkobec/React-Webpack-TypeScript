/**
 * Created by jack on 6/26/17.
 */
import * as React from "react";
import './hello.css';
export const UserList = ({ users }) => {
    /*let f = () => {}; // создание функции для дальнейшего експорта
     function s() {} // простое создание функции */
    return (React.createElement("div", null,
        React.createElement("ul", null, users.map((item, i) => React.createElement("li", null, item.name)))));
};
//# sourceMappingURL=UserList.js.map