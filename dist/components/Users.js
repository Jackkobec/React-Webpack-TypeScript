import * as React from "react";
import { get } from '../config/backend';
import { UserTable } from "./UserTable";
import { UserList } from "./UserList";
export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentWillMount() {
        get('/api/users')
            .then((users) => {
            this.setState({ users });
        })
            .catch(e => console.log(e));
    }
    render() {
        const { users } = this.state; //так пишут если нужно много раз юзать и ретурн ниже
        // return (
        //     <UserTable users={ users }/>
        // );
        return (React.createElement("div", null,
            React.createElement(UserTable, { users: this.state.users }),
            React.createElement(UserList, { users: this.state.users })));
    }
}
//# sourceMappingURL=Users.js.map