import * as React from "react";
import './hello.css';
import { Link } from 'react-router';
export const UserTable = ({ users }) => {
    /*let f = () => {}; // создание функции для дальнейшего експорта
     function s() {} // простое создание функции */
    return (React.createElement("div", null,
        React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "NAME"),
                    React.createElement("th", null, "DETAILS")),
                users.map((item, i) => React.createElement("tr", { key: i },
                    React.createElement("td", null, item.id),
                    React.createElement("td", null, item.name),
                    React.createElement("td", null,
                        React.createElement(Link, { to: `/users/detail/${item.id}`, activeClassName: "active" }, 'Details'))))))));
};
//# sourceMappingURL=UserTable.js.map