import * as React from "react";
import { Link } from "react-router";
export class CommonList extends React.Component {
    render() {
        // return (
        //     <UserTable users={ users }/>
        // );
        return (React.createElement("div", null,
            React.createElement("aside", null,
                React.createElement("p", null,
                    React.createElement(Link, { to: `/handbooks/mans`, activeClassName: "active" })),
                React.createElement("p", null,
                    React.createElement(Link, { to: `/handbooks/girls`, activeClassName: "active" })),
                React.createElement("p", null,
                    React.createElement(Link, { to: `/handbooks/users`, activeClassName: "active" }))),
            React.createElement("section", null,
                React.createElement("div", null, this.props.children))));
    }
}
//# sourceMappingURL=CommonList.js.map