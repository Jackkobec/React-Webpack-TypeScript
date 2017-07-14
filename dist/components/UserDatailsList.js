import * as React from "react";
import { get } from '../config/backend';
import { UserList } from "./UserList";
import { UserIdTable } from "./UserIdTable";
export class UserDetailList extends React.Component {
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
            React.createElement(UserIdTable, { users: this.state.users }),
            React.createElement(UserList, { users: this.state.users })));
    }
}
//# sourceMappingURL=UserDatailsList.js.map